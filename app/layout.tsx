import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import ResponsiveViewport from "./components/responsive-viewport"
import "./custom-viewport.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aarjan Tiwari - Data Analyst",
  description: "Data Analyst portfolio showcasing fintech experience, projects and skills in Power BI, Databricks & SQL",
  generator: 'v0.app',
  applicationName: "Aarjan Tiwari Portfolio",
  keywords: ["Data Analyst", "Portfolio", "Power BI", "Databricks", "SQL"],
  authors: [{ name: "Aarjan Tiwari" }],
  creator: "Aarjan Tiwari",
  publisher: "Aarjan Tiwari",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={cn("min-h-screen w-full bg-background font-sans antialiased", inter.className)}>
        <ResponsiveViewport />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

