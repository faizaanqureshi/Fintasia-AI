import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const client = new DocumentProcessorServiceClient();
    const name = `projects/fintasia-ai/locations/us/processors/d8d5c115b13ec973`;

    console.log('init processors');

    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const encodedFile = Buffer.from(arrayBuffer).toString('base64');

    console.log('encoded file');

    const request = {
      name,
      rawDocument: {
        content: encodedFile,
        mimeType: file.type
      }
    };

    const [result] = await client.processDocument(request);
    console.log('Document processing complete.');

    const { document } = result;
    const { text } = document;
    const response = {
      "tables": []
    };

    for (const page of document.pages) {
      for (const table of page.tables) {
        const tableInfo = {
          "numColumns": 0,
          "numRows": 0,
          "columns": [],
          "rows": []
        };
        const numColumns = table.headerRows[0].cells.length;
        const numRows = table.bodyRows.length;

        const columnHeaders = [];

        for (const headerCell of table.headerRows[0].cells) {
          const headerCellText = getText(headerCell.layout.textAnchor, text).trim();
          columnHeaders.push(headerCellText);
        }

        for (const bodyRow of table.bodyRows) {
          const rowInfo = {};

          bodyRow.cells.forEach((bodyCell, columnIndex) => {
            const bodyCellText = getText(bodyCell.layout.textAnchor, text).trim();
            const columnHeader = columnHeaders[columnIndex];
            rowInfo[columnHeader] = bodyCellText;
          });

          tableInfo.rows.push(rowInfo);
        }

        tableInfo.numColumns = numColumns;
        tableInfo.numRows = numRows;
        tableInfo.columns = columnHeaders;
        response.tables.push(tableInfo);
      }
    }

    return NextResponse.json({
      success: true,
      data: response
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

const getText = (textAnchor, text) => {
  if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
    return '';
  }
  
  const startIndex = textAnchor.textSegments[0].startIndex || 0;
  const endIndex = textAnchor.textSegments[0].endIndex;
  
  return text.substring(startIndex, endIndex);
}