import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

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
    <html lang="en">
      <ClerkProvider
      // appearance={{
      //   elements: {
      //     f,
      //   },
      // }}
      >
        <ThemeProvider>
          <body className={`${inter.variable} ${SPaceGrotesk.variable}`}>
            {children}
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
