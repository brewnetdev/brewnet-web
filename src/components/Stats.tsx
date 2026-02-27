export default function Stats() {
  const stats = [
    { value: "17", label: "Docker Services" },
    { value: "7", label: "Backend Languages" },
    { value: "7", label: "Wizard Steps" },
    { value: "100%", label: "Open Source CLI" },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
