import Link from "next/link"
import { logout } from "./redirect_buttons/actions"

export default async function AppMenu({ darkLogo = false, user }: { darkLogo: boolean, user: any }) {
    return (
        <div className="flex justify-between items-center">
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
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.data.user?.user_metadata.avatar_url} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow active:bg-gray-200 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-white">
                        <div className="sm:hidden">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="https://github.com/faizaanqureshi/Fintasia-AI" target="_blank">GitHub</Link></li>
                        </div>
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}