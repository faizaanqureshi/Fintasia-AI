import { format } from 'date-fns';

export default function ClientInfo({ fullName, email, phoneNumber, date }: { fullName: string | undefined, email: string | undefined, phoneNumber: string | undefined, date: any }) {
    const prettyDate = format(new Date(date), 'MMM d, yyyy');

    return (
        <div className="flex flex-col items-center self-center bg-white shadow-xl rounded-xl p-4 gap-6">
            <div className="flex flex-col items-center">
                <div className='flex flex-row gap-4'>
                    <h1 className="text-2xl font-semibold font-sans text-black w-fit text-center">
                        {fullName}
                    </h1>
                </div>
                <div className="flex flex-col items-center w-fit pt-2">
                    <h1 className="text-xl font-sans w-fit">
                        <a href={`mailto:${email}`} className="text-cyan-600 underline">{email}</a>
                    </h1>
                    <h1 className="text-xl font-sans text-black w-fit">
                        <a href={`tel:${phoneNumber}`} className="text-cyan-600 underline">{phoneNumber}</a>
                    </h1>
                    <h1 className="text-md font-sans text-black w-fit">
                        {prettyDate}
                    </h1>
                </div>
            </div>
        </div>
    )
}