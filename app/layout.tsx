import type React from "react"
import "@/app/globals.css"
import { Outfit, Roboto } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import GrainOverlay from "@/components/grain-overlay"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Portfolio | Dhruv Padhiar",
  description: "Software Engineer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(outfit.variable, roboto.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <GrainOverlay />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'