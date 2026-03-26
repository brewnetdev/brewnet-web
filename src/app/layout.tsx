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

const seoDescription =
  "Open-source self-hosted home server platform. One CLI command to deploy 17 Docker services — Gitea, Nginx, Jellyfin, PostgreSQL, Nextcloud, Grafana and more. Free, no cloud subscription.";

export const metadata: Metadata = {
  title: "Brewnet — Open Source Home Server Management CLI",
  description: seoDescription,
  keywords: [
    "home server",
    "self-hosted",
    "docker",
    "server management",
    "CLI",
    "open source",
    "homelab",
    "NAS",
    "media server",
    "git server",
    "brewnet",
    "홈서버",
    "셀프호스팅",
    "도커",
    "서버 관리",
  ],
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Brewnet — Open Source Home Server Management CLI",
    description: seoDescription,
    url: siteUrl,
    siteName: "Brewnet",
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brewnet — Open Source Home Server Management CLI",
    description: seoDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Brewnet",
  url: siteUrl,
  description: seoDescription,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Brewnet",
    url: siteUrl,
  },
  license: "https://github.com/claude-code-expert/brewnet/blob/main/LICENSE",
  programmingLanguage: "TypeScript",
  softwareVersion: "1.0",
  isAccessibleForFree: true,
  keywords:
    "home server, self-hosted, docker, server management, CLI, homelab, NAS, open source",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
