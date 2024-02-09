import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import React, { Suspense } from "react";
import MuiThemeProvider from "@/components/MuiThemeProvider";
import MyQueryClientProvider from "@/contexts/MyQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "열혈컷 조사기",
  description: "BJ에 대해 관련된 정보를 조회합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MuiThemeProvider>
        <body className={inter.className}>
          <div id="root">
            <React.StrictMode>
              <MyQueryClientProvider>
                <Box sx={{ width: "100%" }}>
                  <Suspense fallback={<div>loading...</div>}>
                    {children}
                  </Suspense>
                </Box>
              </MyQueryClientProvider>
            </React.StrictMode>
          </div>
        </body>
      </MuiThemeProvider>
    </html>
  );
}
