import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import { NavigationProvider } from "../../NavigationContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Krea.ai",
  description: "Pixel-perfect UI clone with Next.js + Tailwind + Dark Mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false }>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
