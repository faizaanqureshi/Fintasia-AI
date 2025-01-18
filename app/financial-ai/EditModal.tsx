import { useRouter } from "next/navigation";
import { useState } from "react";
import { editReportDetails } from "./new/actions";

export default function EditModal({ report, index }: { report: any, index: number }) {
    const [name, setName] = useState(report.client_name)
    const [email, setEmail] = useState(report.email)
    const [phone, setPhone] = useState(report.phone)
    const router = useRouter();

    const handleEditReport = async (id: number) => {
        const error = editReportDetails(id, name, phone, email)
        router.push(`/financial-ai/report?id=${id}`)
        console.log(error)
    }

    return (
        <dialog id={`edit_modal_${index}`} className="modal">
            <div className="modal-box bg-white">
                <h3 className="font-bold text-lg">Edit Information</h3>
                <div className="flex flex-col gap-4 pt-6">
                    <label className="input input-bordered flex items-center gap-2 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                        </svg>
                        <input type="text" className="grow" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    </label>
                </div>
                <div className="flex flex-row gap-2 justify-end pt-8">
                    <form method="dialog">
                        <button className="btn bg-white border-neutral-200 text-black hover:bg-neutral-100 hover:border-neutral-200">Cancel</button>
                    </form>
                    <form method="dialog" onSubmit={() => handleEditReport(report.id)}>
                        <button type="submit" className="btn bg-sky-500 text-white font-semibold border-0 hover:bg-sky-700">Submit</button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}