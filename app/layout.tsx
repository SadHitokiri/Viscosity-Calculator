import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viscosity Calculator",
  description: "Production time correction and viscosity calculator for the 5th Production Department.",
  applicationName: "Viscosity Calculator",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Viscosity",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f8f9",
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
