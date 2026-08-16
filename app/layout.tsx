import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baan Homes Shimla | Boutique Homestay in the Hills",
  description: "A warm, hotel-style homestay in Shimla with mountain views, comfortable rooms and thoughtful hospitality.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
