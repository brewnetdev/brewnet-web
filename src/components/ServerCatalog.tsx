import { catalogItems } from "@/data/catalog";

export default function ServerCatalog() {
  return (
    <div className="commands-section" style={{ marginTop: 48 }}>
      <h3 className="commands-title">Complete Service Catalog</h3>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        All 17 Docker services with images, ports, and resource requirements.
      </p>
      <div className="catalog-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Service</th>
              <th>Docker Image</th>
              <th>Ports</th>
              <th>RAM</th>
            </tr>
          </thead>
          <tbody>
            {catalogItems.map((item) => (
              <tr key={item.service}>
                <td>{item.category}</td>
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
        Note: SQLite is an embedded DB (no Docker container). pgAdmin is shown
        only when PostgreSQL is selected.
      </p>
    </div>
  );
}
