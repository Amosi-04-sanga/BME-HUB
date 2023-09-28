import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";
import "../globals.css"
import CommunityTopnavbar from "@/components/shared/CommunityTopnavbar";
import CommunitySidebar from "@/components/shared/CommunitySidebar";


export const metadata = {
    title: "BME hub",
    description: "BME hub official website"
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
        <html lang='en' >
            <body className={`dark:bg-dark-1 bg-light-3`} >
                <CommunityTopnavbar/>
                <div className="flex">
                    <CommunitySidebar/>
                    {children}
                </div>
            </body>
        </html>
        </ClerkProvider>
    )
}