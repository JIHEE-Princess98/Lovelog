import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "../lib/react-query/provider";

export const metadata: Metadata = {
  title: "LoveLog",
  description: "커플 기록 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
