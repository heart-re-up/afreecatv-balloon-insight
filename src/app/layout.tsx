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
          {/* 100dvh 단위로 사파리 주소창 UI 크기 변경 대응 */}
          <main id="root" className="h-full">
            <React.StrictMode>
              <MyQueryClientProvider>
                <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
              </MyQueryClientProvider>
            </React.StrictMode>
          </main>
        </body>
      </MuiThemeProvider>
    </html>
  );
}
