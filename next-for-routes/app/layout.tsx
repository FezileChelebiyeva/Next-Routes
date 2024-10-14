import "@/assets/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "-",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <main>{children}</main>
      </body>
    </html>
  );
}
