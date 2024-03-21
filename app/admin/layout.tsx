import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./component/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex h-screen">
            <SideBar/>
            <div className="flex-1 p-8">
              {children}
            </div>
          </div>
    </body>
    </html>
  );
}
