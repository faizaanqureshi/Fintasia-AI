import Link from "next/link"

export default function Menu({ darkLogo = false, linkText }: { darkLogo: boolean, linkText: string }) {
    return (
        <div className="flex justify-between items-baseline">
            <div>
                <h1 className={`font-bold text-2xl ${darkLogo ? 'text-black' : 'text-white'}`}>
                    Fintasia <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">AI</span>
                </h1>
            </div>
            <div className={`gap-2 hidden sm:flex ${darkLogo ? 'text-black border-black' : 'text-white border-white'}`}>
                <Link href="/" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>Home</Link>
                <Link href="#about" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>About</Link>
                <Link href="https://github.com/faizaanqureshi/Fintasia-AI" target="_blank" className={`badge ${darkLogo ? 'bg-white text-black' : 'badge-outline'}`}>GitHub</Link>
            </div>
            <div>
                <Link href="/financial-assessment" className="btn bg-white text-slate-800 hover:bg-slate-200 rounded-3xl hidden sm:flex">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                    </svg>
                </Link>
                <div className="dropdown dropdown-end sm:hidden">
                    <div tabIndex={0} role="button " className="btn bg-white text-slate-800 hover:bg-slate-200 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <rect y="4" width="24" height="2" rx="1"></rect>
                        <rect y="11" width="24" height="2" rx="1"></rect>
                        <rect y="18" width="24" height="2" rx="1"></rect>
                    </svg></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="https://github.com/faizaanqureshi/Fintasia-AI" target="_blank">GitHub</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}