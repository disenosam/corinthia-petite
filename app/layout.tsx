import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Corinthia Petite - Vestidos que cuentan historias",
  description: "Vestidos únicos hechos a mano para niñas especiales",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}
