import OpenAI from "openai"
import { zodResponseFormat } from "openai/helpers/zod";
import { responseDataSchema } from "./FinancialDetails";

export async function POST(req) {
    try {
        const data = await req.json();
        const openai = new OpenAI();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            response_format: zodResponseFormat(responseDataSchema, "response"),
            messages: [
                { role: "system", content: "You are a financial analyst. Your task is to analyze financial data and determine whether a company should be given a loan or not." },
                {
                    role: "user",
                    content: `
            Based on the following financial data:
            ${JSON.stringify(data)}

            Return a full financial analysis of the company and whether a loan should be given to the company.
            Use the following descriptions to fill in the JSON response.

            {
                "success": true,
                "data": {
                    "client_details": {
                        "full_name": "Client's Full Name",
                        "email": "client@example.com",
                        "phone_number": "Client's Phone Number"
                    },
                    "financial_details": {
                        "opening_balance": "Opening balance amount",
                        "total_debit": "Total debit amount",
                        "total_credit": "Total credit amount",
                        "closing_balance": "Closing balance amount",
                        "average_monthly_balance": "Average monthly balance",
                        "account_age_months": "Number of months account has been active",
                        "credit_to_debit_ratio": "Credit to debit ratio value",
                        "description": "Description of the client's financial account activity"
                    },
                    "financial_ratios": {
                        "liquidity_ratio": {
                            "low": "Low liquidity ratio value",
                            "high": "High liquidity ratio value",
                            "average": "Average liquidity ratio value",
                            "client_ratio": "Client's liquidity ratio",
                            "description": "Explanation of the liquidity ratio."
                        },
                        "debt_to_income_ratio": {
                            "low": "Low debt-to-income ratio value",
                            "high": "High debt-to-income ratio value",
                            "average": "Average debt-to-income ratio value",
                            "client_ratio": "Client's debt-to-income ratio",
                            "description": "Explanation of the debt-to-income ratio."
                        },
                        "cash_flow_ratio": {
                            "low": "Low cash flow ratio value",
                            "high": "High cash flow ratio value",
                            "average": "Average cash flow ratio value",
                            "client_ratio": "Client's cash flow ratio",
                            "description": "Explanation of the cash flow ratio."
                        },
                        "savings_rate": {
                            "low": "Low savings rate percentage",
                            "high": "High savings rate percentage",
                            "average": "Average savings rate percentage",
                            "client_ratio": "Client's savings rate",
                            "description": "Explanation of the client's savings rate."
                        }
                    },
                    "key_patterns": {
                        "income_sources": {
                            "category": "Income source category",
                            "sources": [
                                {
                                    "particular": "Source description",
                                    "total_amount": "Total income from this source",
                                    "frequency": "Income frequency (e.g., Monthly)",
                                    "average_amount": "Average income amount"
                                }
                            ],
                            "highest_source": "Highest source of income",
                            "description": "Description of income sources."
                        },
                        "expense_patterns": {
                            "categories": {
                                "necessities": {
                                    "total_debit": "Total expense on necessities",
                                    "percent_of_debit": "Percentage of total debit spent on necessities"
                                },
                                "luxuries": {
                                    "total_debit": "Total expense on luxuries",
                                    "percent_of_debit": "Percentage of total debit spent on luxuries"
                                },
                                "liabilities": {
                                    "total_debit": "Total liabilities payment",
                                    "percent_of_debit": "Percentage of total debit spent on liabilities"
                                },
                                "one_time_expenses": {
                                    "total_debit": "Total one-time expenses",
                                    "percent_of_debit": "Percentage of total debit spent on one-time expenses"
                                }
                            },
                            "highest_spending_category": "Category with highest spending",
                            "recurring_expenses": {
                                "details": [
                                    {
                                        "description": "Recurring expense description",
                                        "amount": "Amount of recurring expense",
                                        "frequency": "Expense frequency"
                                    }
                                ]
                            },
                            "description": "Description of expense patterns."
                        },
                        "transaction_volume_and_frequency": {
                            "total_transactions": "Total number of transactions",
                            "average_transaction_value": "Average transaction value",
                            "high_activity_periods": {
                                "daily": "Average number of daily transactions",
                                "monthly": "Average number of monthly transactions"
                            },
                            "small_transactions": {
                                "percentage": "Percentage of small transactions",
                                "description": "Description of small transactions"
                            },
                            "large_transactions": {
                                "count": "Number of large transactions",
                                "total_amount": "Total amount of large transactions",
                                "description": "Description of large transactions"
                            },
                            "description": "Description of transaction volume and frequency."
                        },
                        "balance_trends": {
                            "average_balance": "Average account balance",
                            "minimum_balance": "Minimum account balance",
                            "maximum_balance": "Maximum account balance",
                            "end_of_month_balance": "Balance at the end of the month",
                            "description": "Description of balance trends."
                        },
                        "irregular_transactions": {
                            "details": [
                                {
                                    "transaction_type": "Type of irregular transaction",
                                    "source": "Transaction source",
                                    "amount": "Amount of irregular transaction",
                                    "purpose": "Purpose of irregular transaction"
                                }
                            ],
                            "description": "Description of irregular transactions."
                        },
                        "spending_consistency": {
                            "habit_type": "Spending habit type",
                            "monthly_trends": {
                                "highest_spending_month": "Month with highest spending",
                                "lowest_spending_month": "Month with lowest spending"
                            },
                            "spikes": [
                                {
                                    "month": "Month with spending spike",
                                    "reason": "Reason for spike in spending",
                                    "amount": "Amount of spike"
                                }
                            ],
                            "description": "Description of spending consistency."
                        },
                        "risk_indicators": {
                            "overdraft_charges": "Overdraft charge frequency",
                            "low_balances": "Low balance occurrences",
                            "financial_strain": "Signs of financial strain",
                            "red_flags": [
                                "Red flag 1",
                                "Red flag 2"
                            ]
                        }
                    },
                    "rating": "Rating value from 0 to 100, where 100 is a AAA company like Apple and 0 is a bankrupt one.",
                    "overall_analysis": {
                        "summary": "A lengthy summary of all the financials of the company. Go through SPECIFIC transactions, patterns, etc. And really give a detailed analysis on the client and their financial situation.",
                        "recommendation": "Recommendation based on analysis"
                    }
                }
            }
          `,
                },
            ],
        });

        const finData = JSON.parse(completion.choices[0].message.content)

        return new Response(
            JSON.stringify({success: true, data: finData}), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({success: false, error: error}), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        )
    }
}