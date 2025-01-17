import { KeyPatterns, Source } from "@/app/api/ai/FinancialDetails"

export default function Patterns({patterns}: {patterns: KeyPatterns | undefined}) {
    return (
        <div className="flex flex-col">
            <h1>Key Patterns</h1>
            <div className="flex gap-4 flex-col">
                <div className="flex flex-col gap-2">
                    <h1>Balance Trends</h1>
                    <h1>{patterns?.balance_trends.average_balance}</h1>
                    <h1>{patterns?.balance_trends.maximum_balance}</h1>
                    <h1>{patterns?.balance_trends.minimum_balance}</h1>
                    <h1>{patterns?.balance_trends.end_of_month_balance}</h1>
                    <h1>{patterns?.balance_trends.description}</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Expense Patterns</h1>

                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <h1>Liabilities</h1>
                            <h1>{patterns?.expense_patterns.categories.liabilities.percent_of_debit}</h1>
                            <h1>{patterns?.expense_patterns.categories.liabilities.total_debit}</h1>
                        </div>

                        <div className="flex flex-col">
                            <h1>Necessities</h1>
                            <h1>{patterns?.expense_patterns.categories.necessities.percent_of_debit}</h1>
                            <h1>{patterns?.expense_patterns.categories.necessities.total_debit}</h1>
                        </div>

                        <div className="flex flex-col">
                            <h1>One Time Expenses</h1>
                            <h1>{patterns?.expense_patterns.categories.one_time_expenses.percent_of_debit}</h1>
                            <h1>{patterns?.expense_patterns.categories.one_time_expenses.total_debit}</h1>
                        </div>

                        <div>
                            <h1>Luxuries</h1>
                            <h1>{patterns?.expense_patterns.categories.luxuries.percent_of_debit}</h1>
                            <h1>{patterns?.expense_patterns.categories.luxuries.total_debit}</h1>
                        </div>
                    </div>

                    <h1>Highest Spending Category: {patterns?.expense_patterns.highest_spending_category}</h1>
                    <h1>{patterns?.expense_patterns.description}</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Income Sources</h1>
                    {patterns?.income_sources.sources.map((source: Source) => {
                        return (
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <h1>Particular</h1>
                                    <h1>{source.particular}</h1>
                                </div>
                                <div>
                                    <h1>Average Amount</h1>
                                    <h1>{source.average_amount}</h1>
                                </div>
                                <div>
                                    <h1>Frequency</h1>
                                    <h1>{source.frequency}</h1>
                                </div>
                                <div>
                                    <h1>Total Amount</h1>
                                    <h1>{source.total_amount}</h1>
                                </div>
                            </div>
                        )
                    })}
                    <h1>{patterns?.income_sources.highest_source}</h1>
                    <h1>{patterns?.income_sources.description}</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <h1>Irregular Transactions</h1>
                    {patterns?.irregular_transactions.details.map((details: any) => {
                        return (
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col">
                                    <h1>Transaction Type</h1>
                                    <h1>{details.transaction_type}</h1>
                                </div>
                                <div>
                                    <h1>Source</h1>
                                    <h1>{details.source}</h1>
                                </div>
                                <div>
                                    <h1>Amount</h1>
                                    <h1>{details.amount}</h1>
                                </div>
                                <div>
                                    <h1>Purpose</h1>
                                    <h1>{details.purpose}</h1>
                                </div>
                            </div>
                        )
                    })}
                    <h1>{patterns?.irregular_transactions.description}</h1>
                </div>

                <div className="flex flex-row gap-2">
                    <h1>Risk Indicators</h1>
                    <div>
                        <h1>Overdraft Charges</h1>
                        <h1>{patterns?.risk_indicators.overdraft_charges}</h1>
                    </div>

                    <div>
                        <h1>Low Balances</h1>
                        <h1>{patterns?.risk_indicators.low_balances}</h1>
                    </div>

                    <div>
                        <h1>Financial Strain</h1>
                        <h1>{patterns?.risk_indicators.financial_strain}</h1>
                    </div>

                    <div>
                        <h1>Red Flags</h1>
                        {patterns?.risk_indicators.red_flags.map((flag: string) => {
                            return (
                                <h1>{flag}</h1>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1>Spending Consistency</h1>

                    <div className="flex flex-row">
                        <h1>Habit Type</h1>
                        <h1>{patterns?.spending_consistency.habit_type}</h1>
                    </div>

                    <div className="flex flex-row">
                        <h1>Monthlty Trends</h1>
                        <h1>{patterns?.spending_consistency.monthly_trends.highest_spending_month}</h1>
                        <h1>{patterns?.spending_consistency.monthly_trends.lowest_spending_month}</h1>
                    </div>

                    {patterns?.spending_consistency.spikes.map((spike: any) => {
                        return (
                            <div className="flex flex-row">
                                <h1>Month: {spike.month}</h1>
                                <h1>Reason: {spike.reason}</h1>
                                <h1>Amount: {spike.amount}</h1>
                            </div>
                        )
                    })}

                    <h1>{patterns?.spending_consistency.description}</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <h1>Transaction Volume and Frequency</h1>

                    <div className="flex flex-row">
                        <h1>Total Transactions</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.total_transactions}</h1>
                    </div>

                    <div className="flex flex-row">
                        <h1>Average Transaction Value</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.average_transaction_value}</h1>
                    </div>

                    <div className="flex flex-row">
                        <h1>High Activity Periods</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.high_activity_periods.daily}</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.high_activity_periods.monthly}</h1>
                    </div>

                    <div className="flex flex-row">
                        <h1>Large Transactions</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.large_transactions.count}</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.large_transactions.total_amount}</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.large_transactions.description}</h1>
                    </div>

                    <div className="flex flex-row">
                        <h1>Small Transactions</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.small_transactions.percentage}</h1>
                        <h1>{patterns?.transaction_volume_and_frequency.small_transactions.description}</h1>
                    </div>

                    <h1>{patterns?.transaction_volume_and_frequency.description}</h1>
                </div>
            </div>
        </div>
    )
}