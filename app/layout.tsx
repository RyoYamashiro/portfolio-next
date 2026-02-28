import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryo Yamashiro | Full-Stack Engineer",
  description: "Full-stack web engineer based in Tokyo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-[#F7F5F2] text-slate-800">{children}</body>
    </html>
  );
}
