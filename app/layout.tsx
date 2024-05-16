import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myComputerENGR | Your trusted IT partner",
  description: "Developed by @druxamb | social handle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=" scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${inter.className} scroll-smooth`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
