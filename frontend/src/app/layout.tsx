import { ThemeProvider } from "@/providers/ThemeProvider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Video and Image Editing With AI | VisionCraft",
  description: "Transform videos and images your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
