import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Anh & Diego — Lễ Ăn Hỏi",
  description:
    "Join Anh & Diego for their Lễ Ăn Hỏi celebration on 12 September 2026 in Drnovice, Czech Republic.",
  openGraph: {
    title: "Anh & Diego — Lễ Ăn Hỏi",
    description:
      "Join Anh & Diego for their Lễ Ăn Hỏi celebration on 12 September 2026 in Drnovice, Czech Republic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}