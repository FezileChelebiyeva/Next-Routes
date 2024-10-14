import AdminContacts from "@/components/pages/admin/contacts/Contacts";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Admin | Contacts",
    description: "-",
  };

const Contacts = () => <AdminContacts />;

export default Contacts;
