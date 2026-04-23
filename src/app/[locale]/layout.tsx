import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import Providers from "../Providers";
import { LOCALES, type Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.brewnet.dev";

const descriptions: Record<Locale, string> = {
  en: "Open-source self-hosted home server platform. One CLI command to deploy 17 Docker services — Gitea, Nginx, Jellyfin, PostgreSQL, Nextcloud, Grafana and more. Free, no cloud subscription.",
  ko: "오픈소스 셀프호스팅 홈서버 플랫폼. CLI 명령어 하나로 17개 Docker 서비스 배포 — Gitea, Nginx, Jellyfin, PostgreSQL, Nextcloud, Grafana 등. 무료, 클라우드 구독 없음.",
  ja: "オープンソースのセルフホスティング型ホームサーバープラットフォーム。CLIコマンド1つで17のDockerサービスをデプロイ — Gitea、Nginx、Jellyfin、PostgreSQL、Nextcloud、Grafanaなど。無料、クラウドサブスクリプション不要。",
  zh: "开源自托管家庭服务器平台。一条CLI命令部署17个Docker服务 — Gitea、Nginx、Jellyfin、PostgreSQL、Nextcloud、Grafana等。免费，无需云订阅。",
};

const titles: Record<Locale, string> = {
  en: "Brewnet — Open Source Home Server Management CLI",
  ko: "Brewnet — 오픈소스 홈서버 관리 CLI",
  ja: "Brewnet — オープンソース ホームサーバー管理CLI",
  zh: "Brewnet — 开源家庭服务器管理CLI",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
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
      "ホームサーバー",
      "セルフホスティング",
      "家庭服务器",
      "自托管",
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
        ja: "/ja",
        zh: "/zh",
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
    verification: {
      google: "QAqo-cKwoLn-xs7apsE4GPPvMHQJzTppdTge8_9f340",
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}`,
      siteName: "Brewnet",
      type: "website",
      locale: ({ en: "en_US", ko: "ko_KR", ja: "ja_JP", zh: "zh_CN" } as const)[lang],
      alternateLocale: (["en_US", "ko_KR", "ja_JP", "zh_CN"] as const).filter(
        (l) => l !== ({ en: "en_US", ko: "ko_KR", ja: "ja_JP", zh: "zh_CN" } as const)[lang]
      ),
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
  const lang = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
  const dictionary = await getDictionary(lang);

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
        <Providers locale={lang} dictionary={dictionary}>{children}</Providers>
      </body>
    </html>
  );
}
