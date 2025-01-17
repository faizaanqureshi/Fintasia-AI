
import { ResponseData } from "@/app/api/ai/FinancialDetails"
import parsePhoneNumber from 'libphonenumber-js'
import Financials from "./Financials";
import Ratios from "./Ratios";
import Patterns from "./Patterns";
import Analysis from "./Analysis";
import Rating from "./Rating";
import ClientInfo from "./ClientInfo";

export default function ExistingReport({ report, date }: { report: ResponseData | undefined, date: any }) {
    const client_details = report?.client_details;
    const phoneNumber = parsePhoneNumber(client_details?.phone_number ?? '', 'IN')?.formatInternational()
    const financial_details = report?.financial_details
    const financial_ratios = report?.financial_ratios
    const patterns = report?.key_patterns
    const analysis = report?.overall_analysis
    const rating = report?.rating

    console.log(client_details?.phone_number)

    return <div className="flex flex-col justify-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-9/12 p-8 self-center gap-12 bg-white/50 shadow rounded-xl">
        <ClientInfo client_details={client_details} phoneNumber={phoneNumber} date={date} />
        <Financials financial_details={financial_details} />
        <Ratios financial_ratios={financial_ratios} />
        <Patterns patterns={patterns} />
        <Analysis analysis={analysis} />
        <Rating rating={rating} />
    </div>
}