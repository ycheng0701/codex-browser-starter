import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codex Browser Starter",
  description: "A small starter project for browser-based Codex development."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
