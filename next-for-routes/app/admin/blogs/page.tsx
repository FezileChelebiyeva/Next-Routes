import AdminBlog from "@/components/pages/admin/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Blogs",
  description: "-",
};

const Blogs = () => <AdminBlog />;

export default Blogs;
