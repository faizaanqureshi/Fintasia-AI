import { FinancialDetails } from "@/app/api/ai/FinancialDetails"

function NumberData({ heading, number, desc }: { heading: string, number: string, desc: string }) {
    return (
        <div className="tooltip" data-tip={desc}>
            <div className="flex flex-col">
                <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans">
                    {heading}
                </h1>
                <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans">
                    {number}
                </h1>
            </div>
        </div>
    )
}

export default function Financials({financial_details}: {financial_details: FinancialDetails | undefined}) {
    return (
        <div className="flex flex-col">
            <h1>Financial Details</h1>
            <div className="flex flex-row gap-4">
                <NumberData
                    desc="The total number of months since the account was opened"
                    heading="Account Age in Months"
                    number={financial_details?.account_age_months.toString() ?? 'N/A'}
                />

                <NumberData
                    desc="The average balance maintained in the account per month"
                    heading="Average Monthly Balance"
                    number={`$${financial_details?.average_monthly_balance}`}
                />

                <NumberData
                    desc="The ratio of total credit to total debit transactions in the account"
                    heading="Credit to Debit Ratio"
                    number={`${financial_details?.credit_to_debit_ratio}`}
                />

                <NumberData
                    desc="The initial balance in the account at the beginning of the reporting period"
                    heading="Opening Balance"
                    number={`$${financial_details?.opening_balance}`}
                />

                <NumberData
                    desc="The final balance in the account at the end of the reporting period"
                    heading="Closing Balance"
                    number={`$${financial_details?.closing_balance}`}
                />

                <NumberData
                    desc="The total amount debited from the account during the reporting period"
                    heading="Total Debit"
                    number={`$${financial_details?.total_debit}`}
                />

                <NumberData
                    desc="The total amount credited to the account during the reporting period"
                    heading="Total Credit"
                    number={`$${financial_details?.total_credit}`}
                />
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-lg font-sans text-black">
                {financial_details?.description}
            </h1>
        </div>
    )
}