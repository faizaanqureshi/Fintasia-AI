'use client'

import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { Button } from "@/components/ui/moving-border";
import { uploadDocument } from "./actions";

export function NewReport() {
    const [files, setFiles] = useState<File[]>([]);
    const [loadingText, setLoadingText] = useState<string>("First we'll process your document to make it robot readable 🤖")
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorReason, setErrorReason] = useState<string>('');

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
                setLoadingText("Now we'll use the magic of AI to generate financial insights 🪄")
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
                console.log('AI Response:', aiResult);


                uploadDocument(aiResult);
            } catch (error) {
                console.error('Error in AI request:', error)
                setError(true)
                setLoading(false)
                setErrorReason('There was a problem using the AI, try again later')
            }
        } catch (error) {
            console.error('Error converting file:', error);
            setError(true)
            setLoading(false)
            setErrorReason('There was a problem parsing your document, upload another document or try again later')
        }
    }

    return (
        <div className="flex flex-col justify-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 pt-16 self-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-black text-center">
                Start Your Financial Analysis Here
            </h1>
            <h2 className="text-2xl font-thin font-sans text-black text-center pt-6">
                Upload Bank Statements for Transaction Insights and Credit Ratings
            </h2>
            {!loading && !error ?
                <div className="w-full max-w-4xl mx-auto min-h-96 bg-transparent rounded-lg">
                    <FileUpload onChange={handleFileUpload} />
                </div> :
                <div className="flex self-center items-center justify-center flex-col mt-16 gap-10">
                    <h1 className="font-sans font-thin text-xl text-center">{loadingText}</h1>
                    <progress className="progress w-84 self-center"></progress>
                    <h1 className="font-sans font-thin text-xl text-center">This may take a couple of minutes</h1>
                </div>
            }
            {files.length && !loading && !error ?
                <form onSubmit={handleSubmit} className="flex self-center">
                    <div className="self-center -translate-y-12 md:-translate-y-16">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white text-black border-neutral-200 font-sans font-semibold text-lg self-center"
                        >
                            Generate
                        </Button>
                    </div></form> : null}
            {error ?
                <div role="alert" className="alert alert-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white">{errorReason}</span>
                </div>
                : null}
        </div>
    )
}