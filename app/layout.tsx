import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Travel",
   description: "Travel UI/UX App For Camping",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
         </body>
      </html>
   );
}
