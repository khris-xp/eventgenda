import Header from "@/components/Header";
import TanstackProvider from "@/providers/tanstack.provider";
import theme from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <TanstackProvider>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </TanstackProvider>
      </ThemeProvider>
    </html>
  );
}
