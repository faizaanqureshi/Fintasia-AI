import { OverallAnalysis } from "@/app/api/ai/FinancialDetails";

export default function Analysis({analysis}: {analysis: OverallAnalysis | undefined}) {
    return (
        <div>
            <div className="flex flex-col">
                {analysis?.summary}
            </div>

            <div className="flex flex-col">
                {analysis?.recommendation}
            </div>
        </div>
    )
}