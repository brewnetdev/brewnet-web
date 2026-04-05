import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import Providers from "../Providers";
import { LOCALES, type Locale } from "@/i18n/types";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.brewnet.dev";

const descriptions = {
  en: "Open-source self-hosted home server platform. One CLI command to deploy 17 Docker services — Gitea, Nginx, Jellyfin, PostgreSQL, Nextcloud, Grafana and more. Free, no cloud subscription.",
  ko: "오픈소스 셀프호스팅 홈서버 플랫폼. CLI 명령어 하나로 17개 Docker 서비스 배포 — Gitea, Nginx, Jellyfin, PostgreSQL, Nextcloud, Grafana 등. 무료, 클라우드 구독 없음.",
};

const titles = {
  en: "Brewnet — Open Source Home Server Management CLI",
  ko: "Brewnet — 오픈소스 홈서버 관리 CLI",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "ko" ? "ko" : "en") as Locale;
  const title = titles[lang];
  const description = descriptions[lang];

  return {
    title,
    description,
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
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ko: "/ko",
        "x-default": "/en",
      },
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
      title,
      description,
      url: `${siteUrl}/${lang}`,
      siteName: "Brewnet",
      type: "website",
      locale: lang === "ko" ? "ko_KR" : "en_US",
      alternateLocale: lang === "ko" ? "en_US" : "ko_KR",
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Brewnet — Your Home Server, Brewed Fresh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Brewnet",
  url: siteUrl,
  description: descriptions.en,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brewnet",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Open-source self-hosted home server platform. Deploy 17 Docker services with one CLI command.",
  sameAs: ["https://github.com/claude-code-expert/brewnet"],
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "technical support",
    url: `${siteUrl}/#contact`,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "ko" ? "ko" : "en") as Locale;

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
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
        <Providers locale={lang}>{children}</Providers>
      </body>
    </html>
  );
}
