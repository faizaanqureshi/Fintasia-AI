import { ClientDetails } from "@/app/api/ai/FinancialDetails";
import { format } from 'date-fns';

export default function ClientInfo({ client_details, phoneNumber, date }: { client_details: ClientDetails | undefined, phoneNumber: string | undefined, date: any }) {
    const prettyDate = format(new Date(date), 'MMM d, yyyy');

    return (
        <div className="flex flex-col self-center items-center">
            <h1 className="text-2xl sm:text-4xl lg:text-2xl font-semibold font-sans text-black w-fit text-center">
                {client_details?.full_name}
            </h1>
            <div className="flex flex-col items-center w-fit pt-2">
                <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans w-fit">
                    <a href={`mailto:${client_details?.email}`} className="text-cyan-600 underline">{client_details?.email}</a>
                </h1>
                <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans text-black w-fit">
                    <a href={`tel:${phoneNumber}`} className="text-cyan-600 underline">{phoneNumber}</a>
                </h1>
                <h1 className="text-md font-sans text-black w-fit">
                    {prettyDate}
                </h1>
            </div>
        </div>
    )
}