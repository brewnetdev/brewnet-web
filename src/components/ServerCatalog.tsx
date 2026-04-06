"use client";

import { catalogItems } from "@/data/catalog";
import { useLocale } from "@/i18n/useLocale";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function ServerCatalog() {
  const { locale } = useLocale();
  const { catalog: t } = useDictionary();

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
