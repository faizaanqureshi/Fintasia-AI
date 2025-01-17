import { FinancialRatios } from "@/app/api/ai/FinancialDetails";

export default function Ratios({financial_ratios}: {financial_ratios: FinancialRatios | undefined}) {
    return (
        <div className="flex flex-col">
            <h1>Financial Ratios</h1>
            <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <h1>low {financial_ratios?.cash_flow_ratio.low}</h1>
                        <h1>avg {financial_ratios?.cash_flow_ratio.average}</h1>
                        <h1>high {financial_ratios?.cash_flow_ratio.high}</h1>
                        <h1>client {financial_ratios?.cash_flow_ratio.client_ratio}</h1>
                    </div>
                    <h1>{financial_ratios?.cash_flow_ratio.description}</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1>low {financial_ratios?.debt_to_income_ratio.low}</h1>
                        <h1>avg {financial_ratios?.debt_to_income_ratio.average}</h1>
                        <h1>high {financial_ratios?.debt_to_income_ratio.high}</h1>
                        <h1>client {financial_ratios?.debt_to_income_ratio.client_ratio}</h1>
                    </div>
                    <h1>{financial_ratios?.debt_to_income_ratio.description}</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1>low {financial_ratios?.liquidity_ratio.low}</h1>
                        <h1>avg {financial_ratios?.liquidity_ratio.average}</h1>
                        <h1>high {financial_ratios?.liquidity_ratio.high}</h1>
                        <h1>client {financial_ratios?.liquidity_ratio.client_ratio}</h1>
                    </div>
                    <h1>{financial_ratios?.liquidity_ratio.description}</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <h1>low {financial_ratios?.savings_rate.low}</h1>
                        <h1>avg {financial_ratios?.savings_rate.average}</h1>
                        <h1>high {financial_ratios?.savings_rate.high}</h1>
                        <h1>client {financial_ratios?.savings_rate.client_ratio}</h1>
                    </div>
                    <h1>{financial_ratios?.savings_rate.description}</h1>
                </div>
            </div>
        </div>
    )
}