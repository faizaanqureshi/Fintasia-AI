import { KeyPatterns, Source } from "@/app/api/ai/FinancialDetails"
import { Scale } from "lucide-react"
import { HandCoins } from "lucide-react"
import { CircleDollarSign } from "lucide-react"
import { TrendingUp } from "lucide-react"
import { TriangleAlert } from "lucide-react"
import { AudioWaveform } from "lucide-react"
import { ChartNoAxesCombined } from "lucide-react"

export default function Patterns({ patterns }: { patterns: KeyPatterns | undefined }) {
    return (
        <div className="flex flex-col">
            <h1 className="font-sans text-lg font-bold pb-2">Key Patterns</h1>
            <div className="flex gap-4 flex-col">
                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Balance Trends</h1>
                            <Scale strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4">
                        <div className="flex flex-col">
                            <h1 className="stat-desc text-center text-neutral-400">Average Balance</h1>
                            <h1 className="stat-value text-lg">${patterns?.balance_trends.average_balance}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Maximum Balance</h1>
                            <h1 className="stat-value text-lg">${patterns?.balance_trends.maximum_balance}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Minimum Balance</h1>
                            <h1 className="stat-value text-lg">${patterns?.balance_trends.minimum_balance}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">End of Month Balance</h1>
                            <h1 className="stat-value text-lg">${patterns?.balance_trends.end_of_month_balance}</h1>
                        </div>
                    </div>
                    <h1 className="pt-4 font-sans">{patterns?.balance_trends.description}</h1>
                </div>


                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Expense Patterns</h1>
                            <HandCoins strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 p-4">
                        <div className="flex flex-col">
                            <h1 className="stat-desc text-center text-neutral-400 text-lg font-sans font-bold">Liabilities</h1>
                            <div className="flex flex-col pt-4 text-center">
                                <h1 className="stat-desc text-center text-neutral-400">Percent of Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg">{patterns?.expense_patterns.categories.liabilities.percent_of_debit}%</h1>
                            </div>
                            <div className="flex flex-col pt-2">
                                <h1 className="stat-desc text-center text-neutral-400">Total Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">${patterns?.expense_patterns.categories.liabilities.total_debit}</h1>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="stat-desc text-center text-neutral-400 text-lg font-sans font-bold">Necessities</h1>
                            <div className="flex flex-col pt-4">
                                <h1 className="stat-desc text-center text-neutral-400">Percent of Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">{patterns?.expense_patterns.categories.necessities.percent_of_debit}%</h1>
                            </div>
                            <div className="flex flex-col pt-2">
                                <h1 className="stat-desc text-center text-neutral-400">Total Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">${patterns?.expense_patterns.categories.necessities.total_debit}</h1>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="stat-desc text-center text-neutral-400 text-lg font-sans font-bold">Luxuries</h1>
                            <div className="flex flex-col pt-4">
                                <h1 className="stat-desc text-center text-neutral-400">Percent of Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">{patterns?.expense_patterns.categories.luxuries.percent_of_debit}%</h1>
                            </div>
                            <div className="flex flex-col pt-2">
                                <h1 className="stat-desc text-center text-neutral-400">Total Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">${patterns?.expense_patterns.categories.luxuries.total_debit}</h1>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="stat-desc text-center text-neutral-400 text-lg font-sans font-bold">One Time</h1>
                            <div className="flex flex-col pt-4">
                                <h1 className="stat-desc text-center text-neutral-400">Percent of Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">{patterns?.expense_patterns.categories.one_time_expenses.percent_of_debit}%</h1>
                            </div>
                            <div className="flex flex-col pt-2">
                                <h1 className="stat-desc text-center text-neutral-400">Total Debit</h1>
                                <h1 className="stat-value text-sm sm:text-lg text-center">${patterns?.expense_patterns.categories.one_time_expenses.total_debit}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col self-center items-center pt-4">
                        <h1 className="font-thin text-lg font-sans">Highest Spending Category</h1>
                        <h1 className="font-bold text-lg font-sans">{patterns?.expense_patterns.highest_spending_category}</h1>
                    </div>
                    <h1 className="pt-4 text-md font-sans">{patterns?.expense_patterns.description}</h1>
                </div>



                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Income Sources</h1>
                            <CircleDollarSign strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full">
                        <table className="w-auto border-collapse">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-2 sm:px-6 py-1 font-normal text-sm text-neutral-400">Particular</th>
                                    <th className="px-2 sm:px-6 py-1 font-normal text-sm text-neutral-400">Average Amount</th>
                                    <th className="px-2 sm:px-6 py-1 font-normal text-sm text-neutral-400">Frequency</th>
                                    <th className="px-2 sm:px-6 py-1 font-normal text-sm text-neutral-400">Total Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {patterns?.income_sources.sources.map((source: Source, index: number) => (
                                    <tr key={index} className="text-left font-sans font-bold text-sm sm:text-lg">
                                        <td className="px-2 sm:px-6 py-1">{source.particular}</td>
                                        <td className="px-2 sm:px-6 py-1">${source.average_amount}</td>
                                        <td className="px-2 sm:px-6 py-1">{source.frequency}</td>
                                        <td className="px-2 sm:px-6 py-1">${source.total_amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col self-center items-center pt-4">
                        <h1 className="font-thin text-lg font-sans">Highest Income Source</h1>
                        <h1 className="font-bold text-lg font-sans">{patterns?.income_sources.highest_source}</h1>
                    </div>
                    <h1 className="pt-4 text-md font-sans">{patterns?.income_sources.description}</h1>
                </div>




                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Irregular Transactions</h1>
                            <TrendingUp strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full">
                        <table className="w-auto border-collapse">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-2 sm:px-6 py-2 font-normal text-sm text-neutral-400">Source</th>
                                    <th className="px-2 sm:px-6 py-2 font-normal text-sm text-neutral-400">Transaction Type</th>
                                    <th className="px-2 sm:px-6 py-2 font-normal text-sm text-neutral-400">Amount</th>
                                    <th className="px-2 sm:px-6 py-2 font-normal text-sm text-neutral-400">Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {patterns?.irregular_transactions.details.map((details: any, index: number) => (
                                    <tr key={index} className="text-left font-sans font-bold text-sm sm:text-lg">
                                        <td className="px-2 sm:px-6 py-1">{details.source}</td>
                                        <td className="px-2 sm:px-6 py-1">{details.transaction_type}</td>
                                        <td className="px-2 sm:px-6 py-1">${details.amount}</td>
                                        <td className="px-2 sm:px-6py-1">{details.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="pt-4 text-md font-sans">{patterns?.irregular_transactions.description}</h1>
                </div>




                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Risk Indicators</h1>
                            <TriangleAlert strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-center text-neutral-400">Overdraft Charges</h1>
                            <h1 className="font-sans text-md font-bold">{patterns?.risk_indicators.overdraft_charges}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Low Balances</h1>
                            <h1 className="font-sans text-md font-bold">{patterns?.risk_indicators.low_balances}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Financial Strain</h1>
                            <h1 className="font-sans text-md font-bold">{patterns?.risk_indicators.financial_strain}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400 pb-2">Red Flags</h1>
                            <div className="flex gap-2 flex-col">
                                {patterns?.risk_indicators.red_flags.map((flag: string) => {
                                    return (
                                        <h1 className="bg-red-600 w-fit self-center text-white px-2 p-1 rounded-3xl">{flag}</h1>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <h1 className="pt-4 font-sans">{patterns?.balance_trends.description}</h1>
                </div>



                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 gap-2">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Spending Consistency</h1>
                            <AudioWaveform strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-evenly">
                        <div className="flex flex-col">
                            <h1 className="text-base text-center text-neutral-400 text-wrap font-sans">Habit Type</h1>
                            <h1 className="font-sans text-sm md:text-lg self-center font-bold">{patterns?.spending_consistency.habit_type}</h1>
                        </div>

                        <div className="flex flex-col items-center">
                            <h1 className="text-base text-center text-neutral-400 text-wrap font-sans">Monthly Trends</h1>
                            <div className="flex flex-row justify-between pt-2 gap-4">
                                <div className="flex items-center flex-col">
                                    <h1 className="stat-desc text-center text-neutral-400 text-center text-wrap">Highest Spending Month</h1>
                                    <h1 className="font-sans font-bold">{patterns?.spending_consistency.monthly_trends.highest_spending_month}</h1>
                                </div>
                                <div className="flex items-center flex-col">
                                    <h1 className="stat-desc text-center text-neutral-400 text-center text-wrap">Lowest Spending Month</h1>
                                    <h1 className="font-sans font-bold">{patterns?.spending_consistency.monthly_trends.lowest_spending_month}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center w-full pt-8 sm:pt-4">
                        <h1 className="font-sans font-bold text-neutral-500 pb-2">Spending Spikes</h1>
                        <table className="w-auto border-collapse">
                            <thead>
                                <tr className="text-left">
                                    <th className="font-sans px-6 py-1 font-normal text-sm text-neutral-400">Month</th>
                                    <th className="font-sans px-6 py-1 font-normal text-sm text-neutral-400">Reason</th>
                                    <th className="font-sans px-6 py-1 font-normal text-sm text-neutral-400">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {patterns?.spending_consistency.spikes.map((spike: any, index: any) => (
                                    <tr key={index} className="text-left font-sans font-bold">
                                        <td className="font-sans px-6 py-1 text-base">{spike.month}</td>
                                        <td className="font-sans px-6 py-1 text-base">{spike.reason}</td>
                                        <td className="font-sans px-6 py-1 text-base">${spike.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h1 className="pt-4 font-sans">{patterns?.spending_consistency.description}</h1>
                </div>

                <div className="flex flex-col bg-white rounded-xl shadow-xl p-4">
                    <div className="self-center">
                        <div className="flex flex-row gap-2">
                            <h1 className="stat-title text-black font-bold text-md pb-4">Transaction Volume and Frequency</h1>
                            <ChartNoAxesCombined strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-center text-neutral-400">Total Transactions</h1>
                            <h1 className="font-sans text-md font-bold">{patterns?.transaction_volume_and_frequency.total_transactions}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Average Transaction Value</h1>
                            <h1 className="font-sans text-md font-bold">{patterns?.transaction_volume_and_frequency.average_transaction_value}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">High Activity Periods</h1>
                            <h1 className="font-sans text-md font-bold">Daily - {patterns?.transaction_volume_and_frequency.high_activity_periods.daily}</h1>
                            <h1 className="font-sans text-md font-bold">Monthly - {patterns?.transaction_volume_and_frequency.high_activity_periods.monthly}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Large Transactions</h1>
                            <h1 className="font-bold">${patterns?.transaction_volume_and_frequency.large_transactions.total_amount}</h1>
                            <h1 className="font-sans">{patterns?.transaction_volume_and_frequency.large_transactions.description}</h1>
                        </div>

                        <div className="flex flex-col text-center">
                            <h1 className="stat-desc text-neutral-400">Small Transactions</h1>
                            <h1 className="font-bold">{patterns?.transaction_volume_and_frequency.small_transactions.percentage}%</h1>
                            <h1 className="font-sans">{patterns?.transaction_volume_and_frequency.small_transactions.description}</h1>
                        </div>

                    </div>
                    <h1 className="pt-4 font-sans">{patterns?.transaction_volume_and_frequency.description}</h1>
                </div>
            </div>
        </div>
    )
}