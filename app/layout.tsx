import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sertaç Çetinkaya | Uzman Klinik Psikolog",
  description: "Uzman Klinik Psikolog Sertaç Çetinkaya'nın kişisel web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
