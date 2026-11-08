import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Cloud Atlas | Build with confidence",
  description:
    "A polished guide to designing, deploying, and operating modern workloads on AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
