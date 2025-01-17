'use server'

import { createClient } from "@/utils/supabase/server"

export async function uploadDocument(json) {
    const supabase = createClient()
    const userId = (await (await supabase).auth.getUser()).data.user.id
    console.log('attempting upload to supabase')
    console.log('for user: ' + userId)

    const { data, error } = await (await supabase).from('Reports').insert({ report_json: json, user_id_fk: userId })
    
    if (error) {
        console.error('Erorr occurred during Supabase upload: ' + error.message)
    } 

    return data
}