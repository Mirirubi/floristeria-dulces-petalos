import Header from "@/components/header";
import { HeaderProvider } from "../context/headerContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Floristería Dulces Pétalos",
  description: "Tus flores más bonitas y duraderas al mejor precio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeaderProvider>
      <html lang="es">
        <body className={inter.className}>
          <Header />
          <div className="container mx-auto px-4 p-8">{children}</div>
        </body>
      </html>
    </HeaderProvider>
  );
}
