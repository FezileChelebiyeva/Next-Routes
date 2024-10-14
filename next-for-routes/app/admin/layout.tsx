import AdminLayout from "@/components/layouts/admin/AdminLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "-",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
