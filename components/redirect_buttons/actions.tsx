'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function googleOAuth() {
    const supabase = createClient()

    const { data, error } = await (await supabase).auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `https://fintasia.app/auth/callback`,
            queryParams: {
                access_type: 'offline',
                prompt: 'select_account',
            },
        },
    });

    if (data.url) {
        redirect(data.url ?? '')
    } else {
        throw new Error(error?.message)
    }
}

export async function logout() {
    const supabase = createClient()
    await (await supabase).auth.signOut();

    redirect('/')
}