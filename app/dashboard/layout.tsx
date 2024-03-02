import { is_admin } from "@/lib/fetchers/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({children}:{children:ReactNode}) => {

    const admin = await is_admin();

				if (!admin) {
					redirect("/");
				}

				return <div>{children}</div>;
};
export default DashboardLayout;
