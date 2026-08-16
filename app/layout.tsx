import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baan Homes Shimla | Boutique Homestay in the Hills",
  description: "A warm, hotel-style homestay in Shimla with mountain views, comfortable rooms and thoughtful hospitality.",
  metadataBase: new URL("https://baan-homes-shimla.kamalkatal512.chatgpt.site"),
  openGraph: {
    title: "Baan Homes Shimla",
    description: "Your quiet side of Shimla. Explore rooms, rates and direct booking options.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Baan Homes in the Shimla hills" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
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
