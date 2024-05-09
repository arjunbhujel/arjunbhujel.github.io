import { Inter } from "next/font/google"

import "@/styles/globals.css"
import Navbar from "@/components/ui/navBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arjun Bhujel",
  description: "Web Developer, Econ Enthusiast & Student",
  openGraph: {
    title: "Arjun Bhujel",
    description: "Web Developer, Econ Enthusiast & Student",
    url: "https://arjunbhujel.com.np/",
    siteName: "Arjun Bhujel",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
