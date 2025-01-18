import Link from "next/link"
import { TryApp } from "./redirect_buttons/Buttons"

export default function Menu({ darkLogo = false }: { darkLogo: boolean }) {
    return (
        <div className="flex justify-between items-baseline">
            <div>
                <h1 className={`font-bold text-2xl ${darkLogo ? 'text-black' : 'text-white'}`}>
                    Fintasia <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">AI</span>
                </h1>
            </div>
            <div className={`gap-2 hidden sm:flex ${darkLogo ? 'text-black border-black' : 'text-white border-white'}`}>
                <Link href="/" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>Home</Link>
                <Link href="/about" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>About</Link>
                <Link href="https://github.com/faizaanqureshi/Fintasia-AI" target="_blank" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>GitHub</Link>
            </div>
            <div>
                <TryApp />
                <div className="dropdown dropdown-end sm:hidden">
                    <div tabIndex={0} role="button " className="btn bg-white text-slate-800 hover:bg-slate-200 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <rect y="4" width="24" height="2" rx="1"></rect>
                        <rect y="11" width="24" height="2" rx="1"></rect>
                        <rect y="18" width="24" height="2" rx="1"></rect>
                    </svg></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="https://github.com/faizaanqureshi/Fintasia-AI" target="_blank">GitHub</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}