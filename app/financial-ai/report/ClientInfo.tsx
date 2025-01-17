import { ClientDetails } from "@/app/api/ai/FinancialDetails";

export default function ClientInfo({client_details, phoneNumber}: {client_details: ClientDetails | undefined, phoneNumber: string | undefined}) {
    return (
        <div>
            <h1 className="text-2xl sm:text-4xl lg:text-2xl font-semibold font-sans text-black">
                {client_details?.full_name}
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans pt-2">
                <a href={`mailto:${client_details?.email}`} className="text-cyan-600 underline">{client_details?.email}</a>
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans text-black">
                <a href={`tel:${phoneNumber}`} className="text-cyan-600 underline">{phoneNumber}</a>
            </h1>
        </div>
    )
}