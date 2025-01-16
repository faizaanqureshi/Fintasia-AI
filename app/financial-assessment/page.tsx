import AppMenu from "@/components/AppMenu";
import { AuroraBackgroundLight } from "@/components/ui/aurora-background-light";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const user = await (await supabase).auth.getUser()

  return (
    <div className="min-h-screen overflow-auto relative">
      <div className="drawer w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col w-full">
          {/* Main content with Aurora background */}
          <div className="min-h-screen w-full relative">
            <AuroraBackgroundLight className="absolute inset-0 h-full w-full" />
            <div className="relative z-50 flex h-full flex-col p-4">
              {/* Drawer toggle button */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button mb-4"
              >
                Open Menu
              </label>

          
              <AppMenu user={user} darkLogo />
            </div>
          </div>
        </div>

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
