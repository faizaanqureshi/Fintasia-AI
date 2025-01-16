'use client'

import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { Button } from "@/components/ui/moving-border";

export function NewReport() {
    const [files, setFiles] = useState<File[]>([]);
    const [loadingText, setLoadingText] = useState<string>("First we'll processing your document to make it robot readable 🤖")
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileUpload = (files: File[]) => {
        setFiles(files);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        if (!files[0]) {
            return;
        }

        const form = new FormData();
        form.append('file', files[0])

        try {
            console.log('attempting first upload for conversion')
            const response = await fetch('/api/document', {
                method: 'POST',
                body: form,
            });

            const result = await response.json()
            
            if (response.status === 200) {
                setLoadingText("Now we'll using the magic of AI to generate financial insights 🪄")
            }

            try {
                const data = result;
                const response = await fetch('/api/ai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const aiResult = await response.json()
                console.log('AI Respnse:', aiResult);
            } catch (error) {
                console.error('Error in AI request:', error)
            }
        } catch (error) {
            console.error('Error converting file:', error);
        }
    }

    return (
        <div className="flex flex-col justify-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 pt-16 self-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-black text-center">
                Start Your Financial Analysis Here
            </h1>
            <h2 className="text-2xl font-thin font-sans text-black text-center pt-6">
                Simply upload a bank statement, balance sheet, or any other financial document
            </h2>
            {!loading ?
                <div className="w-full max-w-4xl mx-auto min-h-96 bg-transparent rounded-lg">
                    <FileUpload onChange={handleFileUpload} />
                </div> :
                <div className="flex self-center items-center justify-center flex-col mt-16 gap-10">
                    <h1 className="font-sans font-thin text-xl text-center">{loadingText}</h1>
                    <progress className="progress w-84 self-center"></progress>
                </div>
            }
            {files.length && !loading ?
                <form onSubmit={handleSubmit} className="flex self-center">
                    <div className="self-center -translate-y-12 md:-translate-y-16">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white text-black border-neutral-200 font-sans font-semibold text-lg self-center"
                        >
                            Generate
                        </Button>
                    </div></form> : null}
        </div>
    )
}