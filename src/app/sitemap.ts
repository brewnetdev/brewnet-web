import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/types";

const BASE_URL = "https://brewnet.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/#features", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/#services", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/#how-it-works", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/#install-guide", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/#faq", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/#contact", changeFrequency: "yearly" as const, priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return pages.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
        ),
      },
    }))
  );
}
