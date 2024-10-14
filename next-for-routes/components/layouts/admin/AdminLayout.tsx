import AdminFooter from "./footer/AdminFooter";
import AdminHeader from "./header/AdminHeader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <AdminHeader />
    <main>{children}</main>
    <AdminFooter />
  </div>
);
export default AdminLayout;
