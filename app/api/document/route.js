import path from 'path';
import { DocumentProcessorServiceClient } from '@google-cloud/documentai'
import fs from 'fs/promises'

export async function GET() {
    try {
    const client = new DocumentProcessorServiceClient();
    const name = `projects/fintasia-ai/locations/us/processors/d8d5c115b13ec973`

    const filePath = path.resolve(process.cwd(), 'app', 'api', 'document','statement2.pdf');
    const file = await fs.readFile(filePath);
    const encodedFile = Buffer.from(file).toString('base64');

    const request = {
        name,
        rawDocument: {
            content: encodedFile,
            mimeType: 'application/pdf'
        }
    }

    const [result] = await client.processDocument(request)

    console.log('Document processing complete.')

    const {document} = result;
    const {text} = document;
    const response = {
      "tables": []
    }

    console.log(`There are ${document.pages.length} page(s) in this document.`);

    for (const page of document.pages) {
        console.log(`\n\n**** Page ${page.pageNumber} ****`);

        console.log(`Found ${page.tables.length} table(s):`);
        for (const table of page.tables) {
            const tableInfo = {
              "numColumns": 0,
              "numRows": 0,
              "columns": [],
              "rows": []
            }
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
                const columnHeader = columnHeaders[columnIndex]
                rowInfo[columnHeader] = bodyCellText;
              })

              tableInfo.rows.push(rowInfo)
            }

            tableInfo.numColumns = numColumns
            tableInfo.numRows = numRows
            tableInfo.columns = columnHeaders
            response.tables.push(tableInfo)
        }

        for (const field of page.formFields) {
            const fieldName = getText(field.fieldName?.textAnchor, text);
            const fieldValue = getText(field.fieldValue?.textAnchor, text);
            console.log(
                `\t* ${JSON.stringify(fieldName)}: ${JSON.stringify(fieldValue)}`
              );
        }
    }
    
    return new Response(
        JSON.stringify({success: true, data: response}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({success: false, error: error}), {
          status: 500
      }
    )
  }
}
  
const getText = (textAnchor, text) => {
  if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
    return '';
  }
  
  // First shard in document doesn't have startIndex property
  const startIndex = textAnchor.textSegments[0].startIndex || 0;
  const endIndex = textAnchor.textSegments[0].endIndex;
  
  return text.substring(startIndex, endIndex);
};