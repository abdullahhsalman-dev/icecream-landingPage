import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SweetScoops Ice Cream",
  description:
    "Indulge in delicious ice cream flavors at SweetScoops, your go-to shop for sweet treats!",
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
