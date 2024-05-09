import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Navbar} from "@/components/navBar"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arjunbhujel.com.np"),
  title: {
    default: "Arjun Bhujel",
    template: "%s | Arjun Bhujel",
  },
  description: "Developer | Designer | Econ Student",
  openGraph: {
    title: "Arjun Bhujel",
    description: "Developer, Designer & Economics Student",
    url: "https://arjunbhujel.com.np",
    siteName: "Arjun Bhujel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arjunbhujel.com.np/logo.svg",
        width: 1200,
        height: 630,
        alt: "Arjun Bhujel",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Arjun Bhujel",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
