'use client';

import { useRouter } from 'next/navigation'
import { googleOAuth } from './actions';

export function TryAppComponent({ user }: { user: any }) {
    const router = useRouter()

    const handleTryPress = () => {
        if (user && !user.error) {
            router.push('/financial-ai/new')
        } else {
            googleOAuth()
        }
    }

    return (
        <button className="btn bg-white text-slate-800 hover:bg-slate-200 rounded-3xl hidden sm:flex" onClick={handleTryPress}>
            Try our app
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
        </button>
    )
};

export function GetStartedComponent({ user }: { user: any }) {
    const router = useRouter()

    const handleGetStartedPress = () => {
        if (user && !user.error) {
            router.push('/financial-ai/new')
        } else {
            googleOAuth()
        }
    }

    return (
        <button onClick={handleGetStartedPress} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-800 hover:bg-slate-200 rounded-3xl text-white font-thin text-base mt-6">
            Get Started
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="text-white"
            >
                <path
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                    fill="currentColor"
                />
            </svg>
        </button>
    )
};