import { createClient } from "@/utils/supabase/server";
import { TryAppComponent } from "./ButtonClient";

export async function TryApp() {
    const supabase = createClient();
    const user = await (await supabase).auth.getUser()

    return (
        <TryAppComponent user={user} />
    );
}