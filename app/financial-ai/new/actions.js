'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function uploadDocument(json) {
    const supabase = createClient()
    const userId = (await (await supabase).auth.getUser()).data.user.id
    console.log('attempting upload to supabase')
    console.log('for user: ' + userId)

    const { data, error } = await (await supabase).from('Reports').insert({ report_json: json, user_id_fk: userId, client_name: json.data.client_details.full_name, email: json.data.client_details.email, phone: json.data.client_details.phone_number}).select()
    
    if (error) {
        console.error('Erorr occurred during Supabase upload: ' + error.message)
        return new Error('Unable to open report')
    }

    if (data) {
        const id = data[0].id
        redirect(`/financial-ai/report?id=${id}`)
    } else {
        return new Error('Unable to open report')
    }
}

export async function deleteReport(id) {
    const supabase = createClient()

    const response = await (await supabase).from('Reports').delete().eq('id', id)

    return response
}

export async function editReportDetails(id, name, phone, email) {
    const supabase = createClient()

    const { error } = await (await supabase).from('Reports').update({ client_name: name, phone: phone, email: email }).eq('id', id)

    console.log(error)
    console.log('LETS SEE')
    
    return error
}