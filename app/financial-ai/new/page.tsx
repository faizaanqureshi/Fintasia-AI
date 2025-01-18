import AppMenu from "@/components/AppMenu";
import { AuroraBackgroundLight } from "@/components/ui/aurora-background-light";
import { createClient } from "@/utils/supabase/server";
import { PanelRightOpen } from "lucide-react";
import { Plus } from "lucide-react";
import { NewReport } from "./NewReport";
import { redirect } from "next/navigation";
import UserReports from "../UserReports";

export default async function NewReportPage() {
  const supabase = createClient();
  const user = await (await supabase).auth.getUser()
  const userReports = (await (await supabase).from('Reports').select('id, client_name, email, phone').eq('user_id_fk', user.data.user?.id)).data

  return (
    <div className="min-h-screen overflow-auto relative">
      <div className="drawer w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col w-full">
          <div className="min-h-screen w-full relative">
            <AuroraBackgroundLight className="absolute inset-0 h-full w-full"><></></AuroraBackgroundLight>
            <div className="relative z-50 flex h-full flex-col p-4">
              <AppMenu user={user} darkLogo />
              <NewReport />
            </div>
          </div>
        </div>

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu bg-white text-black text-md min-h-full w-80 p-4 active:bg-gray-200 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-white">
            <div className="flex flex-start px-2 justify-between">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost p-2"
              >
                <PanelRightOpen strokeWidth={1.5} />
              </label>
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost p-2"
              >
                <Plus strokeWidth={1.5} />
              </label>
            </div>
            <li className="p-4 text-sans text-md font-bold">Reports</li>
            <UserReports userReports={userReports} />
          </ul>
        </div>
      </div>
    </div>
  );
}
