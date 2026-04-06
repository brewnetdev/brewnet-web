import type { Metadata } from "next";
import type { Locale } from "@/i18n/types";
import { LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.privacy;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        en: "/en/privacy",
        ko: "/ko/privacy",
        ja: "/ja/privacy",
        zh: "/zh/privacy",
        "x-default": "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
  const dictionary = await getDictionary(lang);
  const t = dictionary.privacy;

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "100px 24px 60px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--text-heading)", marginBottom: 32 }}>
        {t.title}
      </h1>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          {t.overviewHeading}
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          {t.overviewContent}
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          {t.dataHeading}
        </h2>
        <ul style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: 15, paddingLeft: 20 }}>
          <li>
            <strong style={{ color: "var(--text-heading)" }}>{t.dataContactLabel}</strong> {t.dataContactContent}
          </li>
          <li>
            <strong style={{ color: "var(--text-heading)" }}>{t.dataNewsletterLabel}</strong> {t.dataNewsletterContent}
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          {t.selfHostedHeading}
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          {t.selfHostedContent}
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          {t.thirdPartyHeading}
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          {t.thirdPartyContent}
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          {t.contactHeading}
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          {t.contactContentBefore}
          <a href="https://github.com/claude-code-expert/brewnet/issues" style={{ color: "var(--primary)" }}>
            {t.contactLinkText}
          </a>
          {t.contactContentAfter}
        </p>
      </section>

      <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 40, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
        {t.lastUpdated}
      </p>
    </main>
  );
}
