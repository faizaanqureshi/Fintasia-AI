import AppMenu from "@/components/AppMenu";
import { AuroraBackgroundLight } from "@/components/ui/aurora-background-light";
import { createClient } from "@/utils/supabase/server";
import { PanelRightOpen } from "lucide-react";
import { Plus } from "lucide-react";
import ExistingReport from "./ExistingReport";
import { redirect } from "next/navigation";
import { ResponseData } from "@/app/api/ai/FinancialDetails";
import UserReports, { PlusButton } from "../UserReports";

export default async function ReportPage({
    searchParams
}: {
    searchParams: any
}) {
    const { id } = searchParams

    if (!id) {
        redirect('/financial-ai/new')
    }
    const supabase = createClient();
    const user = await (await supabase).auth.getUser()
    const userReports = (await (await supabase).from('Reports').select('id, client_name').eq('user_id_fk', user.data.user?.id)).data

    const { data, error } = await (await supabase).from('Reports').select().eq('id', parseInt(id))

    if (error) {
        redirect('/financial-ai/new')
    }

    let report: ResponseData | undefined = undefined;
    if (data) {
        report = data[0].report_json.data
    } else {
        redirect('/financial-ai/new')
    }

    return (
        <div className="min-h-screen overflow-auto relative">
            <div className="drawer w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col w-full">
                    <div className="min-h-screen w-full relative">
                        <AuroraBackgroundLight className="absolute inset-0 h-full w-full"><></></AuroraBackgroundLight>
                        <div className="relative z-50 flex h-full flex-col sm:p-4">
                            <AppMenu user={user} darkLogo />
                            <ExistingReport report={report} date={data[0].created_at} />
                        </div>
                    </div>
                </div>

                <div className="drawer-side z-50">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    />
                    <ul className="menu bg-white text-black text-md min-h-full w-80 p-4">
                        <div className="flex flex-start px-2 justify-between">
                            <label
                                htmlFor="my-drawer"
                                className="btn btn-ghost p-2"
                            >
                                <PanelRightOpen strokeWidth={1.5} />
                            </label>
                            <PlusButton />
                        </div>
                        <li className="p-4 text-sans text-md font-bold">Reports</li>
                        <UserReports userReports={userReports} />
                    </ul>
                </div>
            </div>
        </div>
    );
}
