import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { FavoritesProvider } from "./components/favorites-provider";
import { Navbar } from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Labs | Find experiences worth remembering",
  description: "Discover and save memorable local experiences around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body>
        <FavoritesProvider>
          <Suspense fallback={<div className="header-fallback" aria-hidden="true" />}>
            <Navbar />
          </Suspense>
          <main className="page-main">{children}</main>
          <footer className="site-footer">
            <Link href="/" className="footer-brand">wanderlust labs</Link>
            <span>Collect moments, not checklists.</span>
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
