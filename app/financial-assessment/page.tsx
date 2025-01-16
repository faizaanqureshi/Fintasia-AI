import AppMenu from "@/components/AppMenu";
import { AuroraBackgroundLight } from "@/components/ui/aurora-background-light";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const user = await (await supabase).auth.getUser()

  return (
    <div className="min-h-screen overflow-auto relative">
      <AuroraBackgroundLight className="absolute inset-0 h-full w-full"><></></AuroraBackgroundLight>
      <div className="relative z-50 flex h-full flex-col p-4">
        <AppMenu user={user} darkLogo />
      </div>
    </div>
  );
}
