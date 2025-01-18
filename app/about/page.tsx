import Menu from "@/components/Menu";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function About() {
    return (
        <div className="min-h-screen overflow-auto relative">
            <AuroraBackground className="absolute inset-0 h-full w-full"><></></AuroraBackground>
            <div className="relative z-50 flex h-full flex-col p-4">
                <Menu darkLogo={false} />
                <div className="font-sans flex flex-col justify-center w-full sm:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-9/12 p-4 md:p-8 self-center gap-3 bg-black/30 shadow rounded-xl mt-8">
                    <h1 className="text-2xl font-bold text-white">About Fintasia AI</h1>
                    <p className="text-white">
                        Fintasia AI is an advanced financial analysis platform that helps assess creditworthiness and provides actionable insights by analyzing client bank statements. Our mission is to empower users with tools to make informed lending decisions for your business/institution.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-6">Privacy Policy</h2>
                    <p className="text-white">
                        Your privacy is of utmost importance to us. We collect and store your data securely to generate detailed financial reports. We do not share, sell, or distribute your personal information to third parties. Once you delete your reports, all associated data is permanently removed from our system, and we no longer have access to it.
                    </p>
                    <p className="text-white mt-4">
                        For transparency, Fintasia AI uses Google’s Document AI API and GPT APIs to analyze and process your data. These technologies help enhance our platform’s functionality and ensure that your financial insights are accurate. We ensure that all data processed through these APIs is anonymized and handled securely, with no personal information retained once processing is complete.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-6">Terms of Service</h2>
                    <p className="text-white">
                        By using Fintasia AI, you agree to the following terms:
                    </p>
                    <ul className="list-disc list-inside text-white">
                        <li>You are responsible for the accuracy of the data you provide.</li>
                        <li>The insights and recommendations generated are for informational purposes only and should not be considered financial advice.</li>
                        <li>We reserve the right to update or modify the platform and these terms at any time.</li>
                        <li>Once a report is deleted, it cannot be recovered, and all associated data is permanently removed from our systems.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}