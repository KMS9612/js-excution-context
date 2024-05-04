import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS-Excution-Context",
  description: "자바스크립트의 실행컨텍스트를 눈으로 확인할 수 있는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className} style={{ backgroundColor: "#4a4a46" }}>
        {children}
      </body>
    </html>
  );
}
