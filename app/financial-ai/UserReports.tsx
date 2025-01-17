'use client'

import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"
import { deleteReport } from "./new/actions"

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

    const handleDeleteUser = async (id: number) => {
        deleteReport(id)
    }

    return (<div>
        {
            userReports.length > 0 ? userReports.map((report: any) => {
                return (
                    <div className="flex flex-row items-center justify-between pr-5">
                        <li className="text-sans font-thin text-md" onClick={() => router.push(`/financial-ai/report?id=${report.id}`)}><a>{report.client_name}</a></li>
                        <form
                            onSubmit={() => handleDeleteUser(report.id)}
                        >
                            <button type="submit">
                                <Trash strokeWidth={1.5} width={20} />
                            </button>
                        </form>
                    </div>
                )
            }) : <h1 className="text-sans font-thin text-md text-zinc-500 px-4"> No Reports Generated</h1 >}</div>
    )
}