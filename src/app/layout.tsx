import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "蛯名哲也 | Webエンジニア・個人事業主",
  description:
    "Webエンジニア・蛯名哲也のプロフィールサイト。Laravel、Vue.js、MySQL、AWSを用いた業務システムの開発・運用と、エンジニア講師としての活動を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
