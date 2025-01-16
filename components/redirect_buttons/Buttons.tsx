import { createClient } from "@/utils/supabase/server";
import { TryAppComponent, GetStartedComponent } from "./ButtonClient";

export async function TryApp() {
    const supabase = createClient();
    const user = await (await supabase).auth.getUser()

    return (
        <TryAppComponent user={user} />
    );
}

export async function GetStarted() {
    const supabase = createClient();
    const user = await (await supabase).auth.getUser()

    return (
        <GetStartedComponent user={user} />
    );
}