
import { ResponseData } from "@/app/api/ai/FinancialDetails"
import parsePhoneNumber from 'libphonenumber-js'
import Financials from "./Financials";

export default function ExistingReport({ report }: { report: ResponseData | undefined }) {
    const client_details = report?.client_details;
    const phoneNumber = parsePhoneNumber(client_details?.phone_number ?? '', 'IN')?.formatInternational()
    const financial_details = report?.financial_details
    const financial_ratios = report?.financial_ratios
    const patterns = report?.key_patterns
    const analysis = report?.overall_analysis
    const rating = report?.rating

    console.log(client_details?.phone_number)

    return <div className="flex flex-col justify-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-9/12 pt-16 self-center gap-12">
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

        <Financials financial_details={financial_details} />
    </div>
}