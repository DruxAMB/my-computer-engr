import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ background: "white", color: "rgb(6, 6, 45)", fontWeight: "600" }}
      >
        <NavBar />
        <div className="md:px-20 px-4 lg:px-32 mt-28">{children}</div>
      </body>
    </html>
  );
}
