'use client'

import { Pencil, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"
import { deleteReport } from "./new/actions"
import EditModal from "./EditModal"

export function PlusButton() {
    const router = useRouter()

    return (
        <label
            onClick={() => router.push('/financial-ai/new')}
            className="btn btn-ghost p-2"
        >
            <Plus strokeWidth={1.5} />
        </label>
    )
}

export default function UserReports({ userReports }: { userReports: any }) {
    const router = useRouter()

    const handleDeleteReport = async (id: number) => {
        deleteReport(id)
        router.push('/financial-ai/new')
    }

    return (<div>
        {
            userReports.length > 0 ? userReports.map((report: any) => {
                return (
                    <div className="flex flex-row items-center justify-between pr-5">
                        <li className="text-sans font-thin text-md truncate max-w-48 w-fit" onClick={() => router.push(`/financial-ai/report?id=${report.id}`)}><a>{report.client_name}</a></li>
                        <div className="join">
                            <button className="btn join-item btn-sm bg-white hover:bg-neutral-300 border-neutral-200 hover:border-neutral-200" onClick={() => (document.getElementById('edit_modal') as HTMLDialogElement).showModal()}>
                                <Pencil strokeWidth={1.5} width={20} stroke="black" />
                            </button>
                            <button className="btn join-item btn-sm bg-white hover:bg-neutral-300 border-neutral-200 hover:border-neutral-200" onClick={() => (document.getElementById('delete_modal') as HTMLDialogElement).showModal()}>
                                <Trash strokeWidth={1.5} width={20} stroke="black" />
                            </button>
                        </div>

                        <EditModal report={report} />
                        
                        <dialog id="delete_modal" className="modal">
                            <div className="modal-box bg-white">
                                <h3 className="font-bold text-lg">Delete Report?</h3>
                                <p className="pt-4 text-md">This will delete <b>{report.client_name}</b></p>
                                <p className="pt-2 text-md text-neutral-500">This action cannot be undone</p>
                                <div className="flex flex-row gap-2 justify-end pt-4">
                                    <form method="dialog">
                                        <button className="btn bg-white border-neutral-200 text-black hover:bg-neutral-100 hover:border-neutral-200">Cancel</button>
                                    </form>
                                    <form method="dialog" onSubmit={() => handleDeleteReport(report.id)}>
                                        <button type="submit" className="btn bg-red-500 text-white font-semibold border-0 hover:bg-red-700">Delete</button>
                                    </form>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                )
            }) : <h1 className="text-sans font-thin text-md text-zinc-500 px-4"> No Reports Generated</h1 >}</div >
    )
}