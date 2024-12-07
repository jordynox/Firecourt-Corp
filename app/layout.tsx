import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AIChat } from "@/app/ai-chat/ai-chat"
import "./globals.css"  

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Firecourt Corp",
    description: "The leading technology company providing comprehensive suite of hardware, software, and community resources.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative flex min-h-screen flex-col">
                        <SiteHeader />
                        <main className="flex-1">{children}</main>
                        <SiteFooter />
                        <AIChat />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}