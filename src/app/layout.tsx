import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RecipeProvider } from "@/contexts/recipe-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brain Factory Calculator",
  description: "Calculator for Brain Factory game",
  metadataBase: new URL("http://rkien.eu/brain"),
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
        <RecipeProvider>{children}</RecipeProvider>
      </body>
    </html>
  );
}
