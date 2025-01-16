import Image from "next/image";
import Link from "next/link";
import { GetStarted } from "./redirect_buttons/Buttons";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 pt-16 self-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white text-center">
                AI-Powered Revolution in Financial Analysis and Credit Assessment
            </h1>
            <h2 className="text-2xl font-thin font-sans text-white text-center pt-6">
                Empowering Smarter Lending Decisions with AI-Driven Financial Metrics and Ratings
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between py-16 gap-12">
                <Image src="/abstract.png" height={400} width={400} alt="test" layout="responsive" className="max-w-[400px]"></Image>
                <div>
                    <h1 className="font-sans text-3xl font-thin text-white">
                        Powered by <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-transparent bg-clip-text">Advanced LLMs</span>
                    </h1>
                    <h2 className="font-sans text-xl font-thin text-slate-300 pt-4">
                        Experience the future of assessing loan eligibility and credit worthiness with AI-driven online finance solutions.
                    </h2>
                    <GetStarted />
                    <div className="flex flex-row text-white mt-10">
                        <div className="flex-1">
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-transparent bg-clip-text text-3xl">85%</span>
                            <h2 className="text-slate-300 font-thin">Time Saved by Automating Processes</h2>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="flex-1">
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-transparent bg-clip-text text-3xl">92%</span>
                            <h2 className="text-slate-300 font-thin">Accuracy in Eligibility Predictions</h2>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="flex-1">
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-transparent bg-clip-text text-3xl">70%</span>
                            <h2 className="text-slate-300 font-thin">Improved Decision-Making Speeds</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}