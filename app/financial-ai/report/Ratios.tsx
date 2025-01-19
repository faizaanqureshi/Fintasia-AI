import { FinancialRatios } from "@/app/api/ai/FinancialDetails";

function RatioDisplay({ratio, title}: {ratio: any, title: string}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg">
                <div className="self-center">
                    <div className="flex flex-col">
                        <h1 className="stat-title text-black font-semibold text-md pb-4">{title}</h1>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col">
                        <h1 className="stat-desc text-center text-neutral-400">Low</h1>
                        <h1>{ratio.low}</h1>
                    </div>

                    <div className="flex flex-col text-center">
                        <h1 className="stat-desc text-neutral-400">Average</h1>
                        <h1>{ratio.average}</h1>
                    </div>

                    <div className="flex flex-col text-center">
                        <h1 className="stat-desc text-neutral-400">High</h1>
                        <h1>{ratio.high}</h1>
                    </div>
                </div>
                <div className="self-center">
                    <div className="flex flex-col">
                        <h1 className="stat-value text-lg pt-4">{ratio.client_ratio}</h1>
                    </div>
                </div>
                <h1 className="pt-2 font-sans">{ratio.description}</h1>
            </div>
        </div>
    )
}

export default function Ratios({ financial_ratios }: { financial_ratios: FinancialRatios | undefined }) {
    return (
        <div className="flex flex-col">
            <h1 className="font-sans text-lg font-semibold">Financial Ratios</h1>
            <div className="flex gap-4 pt-2 flex-wrap xl:flex-nowrap">
                <RatioDisplay ratio={financial_ratios?.cash_flow_ratio} title={'Cash Flow Ratio'}  />
                <RatioDisplay ratio={financial_ratios?.debt_to_income_ratio} title={'Debt to Income Ratio'}  />
                <RatioDisplay ratio={financial_ratios?.liquidity_ratio} title={'Liquidity Ratio'} />
                <RatioDisplay ratio={financial_ratios?.savings_rate} title={'Savings Rate'}  />
            </div>
        </div>
    )
}