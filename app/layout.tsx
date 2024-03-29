import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devflow",
  description: "A site to ask programming question.",
  icons: {
    icon: "../../favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "700", "800"],
  variable: "--font-inter",
});

const SPaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          f,
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${SPaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
