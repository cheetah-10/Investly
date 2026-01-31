import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { DataContextProvider } from "../context/DataContext";
import SearchContextProvider from "../context/SearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real-Time Assets Dashboard",
  description: "Investment portfolio dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <DataContextProvider>
            <SearchContextProvider>
            < Navbar />
            <div className="mt-17.5">
              {children}

            </div>
            </SearchContextProvider>
          </DataContextProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
