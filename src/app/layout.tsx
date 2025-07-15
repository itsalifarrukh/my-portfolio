import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "MERN Stack Developer Portfolio",
  description: "Portfolio of a MERN Stack Developer with premium UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gradient-to-b from-slate-900 to-slate-800 text-foreground">
      <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
