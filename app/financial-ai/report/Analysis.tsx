import { OverallAnalysis } from "@/app/api/ai/FinancialDetails";

export default function Analysis({analysis}: {analysis: OverallAnalysis | undefined}) {
    return (
        <div>
            <h1 className="font-sans text-lg font-semibold">Analysis</h1>
            <div className="flex flex-col font-sans bg-white rounded-xl shadow-xl p-4">
                {analysis?.summary}
            </div>

            <div className="flex flex-col mt-7 bg-white rounded-xl shadow-xl p-4">
                {analysis?.recommendation}
            </div>
        </div>
    )
}