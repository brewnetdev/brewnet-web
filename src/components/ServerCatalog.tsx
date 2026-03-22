"use client";

import { catalogItems } from "@/data/catalog";
import { useLocale } from "@/i18n/useLocale";

const catalogDict = {
  en: {
    title: "Complete Service Catalog",
    desc: "All 17 Docker services with images, ports, and resource requirements.",
    thCategory: "Category",
    thService: "Service",
    thImage: "Docker Image",
    thPorts: "Ports",
    thRam: "RAM",
    note: "Note: SQLite is an embedded DB (no Docker container). pgAdmin is shown only when PostgreSQL is selected.",
  },
  ko: {
    title: "전체 서비스 카탈로그",
    desc: "17개 Docker 서비스의 이미지, 포트, 리소스 요구사항 전체 목록입니다.",
    thCategory: "카테고리",
    thService: "서비스",
    thImage: "Docker 이미지",
    thPorts: "포트",
    thRam: "RAM",
    note: "참고: SQLite는 내장 DB입니다 (Docker 컨테이너 없음). pgAdmin은 PostgreSQL 선택 시에만 표시됩니다.",
  },
} as const;

export default function ServerCatalog() {
  const { locale } = useLocale();
  const t = catalogDict[locale];

  return (
    <div className="commands-section" style={{ marginTop: 48 }}>
      <h3 className="commands-title">{t.title}</h3>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        {t.desc}
      </p>
      <div className="catalog-table">
        <table>
          <thead>
            <tr>
              <th>{t.thCategory}</th>
              <th>{t.thService}</th>
              <th>{t.thImage}</th>
              <th>{t.thPorts}</th>
              <th>{t.thRam}</th>
            </tr>
          </thead>
          <tbody>
            {catalogItems.map((item) => (
              <tr key={item.service}>
                <td>{item.category[locale]}</td>
                <td>{item.service}</td>
                <td>
                  <code>{item.image}</code>
                </td>
                <td>{item.ports}</td>
                <td>{item.ram}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: 12,
          marginTop: 12,
          fontStyle: "italic",
        }}
      >
        {t.note}
      </p>
    </div>
  );
}
