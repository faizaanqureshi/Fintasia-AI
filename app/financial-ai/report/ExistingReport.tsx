import { ResponseData } from "@/app/api/ai/FinancialDetails"
import Financials from "./Financials";
import Ratios from "./Ratios";
import Patterns from "./Patterns";
import Analysis from "./Analysis";
import Rating from "./Rating";
import ClientInfo from "./ClientInfo";

export default function ExistingReport({ report, name, phone, email, date }: { report: ResponseData | undefined, name: string | undefined, phone: string | undefined, email: string | undefined, date: any }) {
    const financial_details = report?.financial_details
    const financial_ratios = report?.financial_ratios
    const patterns = report?.key_patterns
    const analysis = report?.overall_analysis
    const rating = report?.rating

    return <div className="flex flex-col justify-center w-full sm:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-9/12 p-4 md:p-8 self-center gap-12 mt-8 bg-white/50 shadow rounded-xl">
        <ClientInfo fullName={name} email={email} phoneNumber={phone} date={date} />
        <Financials financial_details={financial_details} />
        <Ratios financial_ratios={financial_ratios} />
        <Patterns patterns={patterns} />
        <Analysis analysis={analysis} />
        <Rating rating={rating} />
    </div>
}