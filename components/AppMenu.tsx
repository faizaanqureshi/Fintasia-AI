import Link from "next/link"
import { logout } from "./redirect_buttons/actions"
import { PanelRightClose } from "lucide-react"
import Image from "next/image"

export default async function AppMenu({ darkLogo = false, user }: { darkLogo: boolean, user: any }) {
    return (
        <div className="flex justify-between items-center">
            <label
                htmlFor="my-drawer"
                className="btn btn-ghost p-2"
            >
                <PanelRightClose strokeWidth={1.5} />
            </label>

            <Link href="/">
                <h1 className={`font-bold text-2xl ${darkLogo ? 'text-black' : 'text-white'} hidden sm:inline`}>
                    Fintasia <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">AI</span>
                </h1>
            </Link>

            <div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.data.user?.user_metadata.picture} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 font-sans shadow active:bg-gray-200 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-white">
                        <div className="px-4 py-2 font-semibold font-sans text-base">{user.data.user?.user_metadata.name}</div>
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