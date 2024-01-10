import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// component
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// theme provider
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio for job between",
  icons: {
    icon: "/public/icons.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
