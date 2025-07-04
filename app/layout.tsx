import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tanya Yadav - Portfolio",
  description:
    "Personal portfolio of Tanya Yadav",
  keywords: "portfolio, developer, full-stack, web development, react, next.js, UI/UX design",
  authors: [{ name: "Tanya Yadav" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf3dd" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
