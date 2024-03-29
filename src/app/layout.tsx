import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/styles/globals.scss"
import { ContextProvider } from "@/contexts/MainContext"
import { HeroProvider } from "@/contexts/HeroContext"
import Header from "@/components/Header"
import Navigation from "@/navigation"
import { metaTags } from "@/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = metaTags

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ContextProvider>
          <HeroProvider>
            <Navigation />
            <Header />
            {children}
          </HeroProvider>
        </ContextProvider>
      </body>
    </html>
  )
}
