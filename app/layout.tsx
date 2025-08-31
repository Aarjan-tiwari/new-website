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
    icon: '/favicon.ico',
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
  const base = process.env.NODE_ENV === 'production' ? '/new-website' : ''
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Explicit favicon links to ensure reliable loading across browsers */}
        <link rel="icon" href={`${base}/favicon.ico`} sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${base}/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${base}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="48x48" href={`${base}/favicon-48x48.png`} />
        <link rel="icon" type="image/png" sizes="64x64" href={`${base}/favicon-64x64.png`} />
        <link rel="apple-touch-icon" href={`${base}/apple-touch-icon.png`} />
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

