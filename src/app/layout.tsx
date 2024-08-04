import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsimMahmudov | Front-end DEveloper",
  description:
    "Looking for a seasoned web developer? Explore the portfolio of Asim Mahmudov - an expert in Frontend development. Here, you'll discover a comprehensive showcase of my projects and the diverse skills that can greatly benefit your future endeavors!",
  keywords:
    "Frontend Developer, Asim Mahmudov, AsimMah, Asim, AsimMah05, AsimDev, Asim Dev, Asim Developer",
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
