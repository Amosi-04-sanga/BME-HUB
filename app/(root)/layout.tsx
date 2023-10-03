import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topnav from "@/components/shared/Topnav";
import Sidebar from "@/components/shared/Sidebar";
import { Bottombar } from "@/components/shared";
import { ThemeProvider } from "@/components/shared/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BME hub",
  description: "BME hub official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html suppressHydrationWarning={true} lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Topnav />
            <div className="flex">
              <Sidebar />
              <section className="bg-light-1 dark:bg-dark-3 transition duration-1000">
                {children}
              </section>
            </div>
          </ThemeProvider>
        </body>
      </html>
  );
}
