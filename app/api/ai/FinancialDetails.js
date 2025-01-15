import { z } from "zod";

const financialDetailsSchema = z.object({
  opening_balance: z.number(),
  total_debit: z.number(),
  total_credit: z.number(),
  closing_balance: z.number(),
  average_monthly_balance: z.number(),
  account_age_months: z.number(),
  credit_to_debit_ratio: z.number(),
  description: z.string(),
});

const ratioSchema = z.object({
  low: z.number(),
  high: z.number(),
  average: z.number(),
  client_ratio: z.number(),
  description: z.string(),
});

const financialRatiosSchema = z.object({
  liquidity_ratio: ratioSchema,
  debt_to_income_ratio: ratioSchema,
  cash_flow_ratio: ratioSchema,
  savings_rate: ratioSchema,
});

const sourceSchema = z.object({
  particular: z.string(),
  total_amount: z.number(),
  frequency: z.string().optional(),
  average_amount: z.number().optional(),
});

const recurringExpenseSchema = z.object({
  description: z.string(),
  amount: z.number(),
  frequency: z.string(),
});

const incomeSourcesSchema = z.object({
  category: z.string(),
  sources: z.array(sourceSchema),
  highest_source: z.string(),
  description: z.string(),
});

const expensePatternsSchema = z.object({
  categories: z.object({
    necessities: z.object({
      total_debit: z.number(),
      percent_of_debit: z.number(),
    }),
    luxuries: z.object({
      total_debit: z.number(),
      percent_of_debit: z.number(),
    }),
    liabilities: z.object({
      total_debit: z.number(),
      percent_of_debit: z.number(),
    }),
    one_time_expenses: z.object({
      total_debit: z.number(),
      percent_of_debit: z.number(),
    }),
  }),
  highest_spending_category: z.string(),
  recurring_expenses: z.object({
    details: z.array(recurringExpenseSchema),
  }),
  description: z.string(),
});

const transactionVolumeSchema = z.object({
  total_transactions: z.number(),
  average_transaction_value: z.number(),
  high_activity_periods: z.object({
    daily: z.number(),
    monthly: z.number(),
  }),
  small_transactions: z.object({
    percentage: z.number(),
    description: z.string(),
  }),
  large_transactions: z.object({
    count: z.number(),
    total_amount: z.number(),
    description: z.string(),
  }),
  description: z.string(),
});

const balanceTrendsSchema = z.object({
  average_balance: z.number(),
  minimum_balance: z.number(),
  maximum_balance: z.number(),
  end_of_month_balance: z.number(),
  description: z.string(),
});

const irregularTransactionsSchema = z.object({
  details: z.array(
    z.object({
      transaction_type: z.string(),
      source: z.string(),
      amount: z.number(),
      purpose: z.string().optional(),
    })
  ),
  description: z.string(),
});

const spendingConsistencySchema = z.object({
  habit_type: z.string(),
  monthly_trends: z.object({
    highest_spending_month: z.string(),
    lowest_spending_month: z.string(),
  }),
  spikes: z.array(
    z.object({
      month: z.string(),
      reason: z.string(),
      amount: z.number(),
    })
  ),
  description: z.string(),
});

const riskIndicatorsSchema = z.object({
  overdraft_charges: z.string(),
  low_balances: z.string(),
  financial_strain: z.string(),
  red_flags: z.array(z.string()),
});

const keyPatternsSchema = z.object({
  income_sources: incomeSourcesSchema,
  expense_patterns: expensePatternsSchema,
  transaction_volume_and_frequency: transactionVolumeSchema,
  balance_trends: balanceTrendsSchema,
  irregular_transactions: irregularTransactionsSchema,
  spending_consistency: spendingConsistencySchema,
  risk_indicators: riskIndicatorsSchema,
});

const overallAnalysisSchema = z.object({
  summary: z.string(),
  recommendation: z.string(),
});

const clientDetailsSchema = z.object({
  full_name: z.string(),
  email: z.string(),
  phone_number: z.string(),
});

const responseDataSchema = z.object({
  client_details: clientDetailsSchema,
  financial_details: financialDetailsSchema,
  financial_ratios: financialRatiosSchema,
  key_patterns: keyPatternsSchema,
  rating: z.number(),
  overall_analysis: overallAnalysisSchema,
});

export default responseDataSchema;
