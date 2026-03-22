import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://brewnet.dev";

export const metadata: Metadata = {
  title: "Brewnet — Your Home Server, Brewed Fresh",
  description:
    "Self-hosted home server management platform. Interactive 8-step CLI wizard and Web Dashboard for setting up and managing personal servers with 17 Docker-based services.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Brewnet — Your Home Server, Brewed Fresh",
    description:
      "Self-hosted home server management platform. Interactive 8-step CLI wizard and Web Dashboard for setting up and managing personal servers with 17 Docker-based services.",
    url: siteUrl,
    siteName: "Brewnet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brewnet — Your Home Server, Brewed Fresh",
    description:
      "Self-hosted home server management platform. Interactive 8-step CLI wizard and Web Dashboard for setting up and managing personal servers with 17 Docker-based services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
