export default function DashboardPage() {
  const kpiCards = [
    { title: "Area Sales", value: "£0", subtext: "vs target £0" },
    { title: "Labour %", value: "0%", subtext: "target 0%" },
    { title: "DOT %", value: "0%", subtext: "target 0%" },
    { title: "ADT", value: "0 mins", subtext: "average delivery time" },
  ];

  const priorityItems = [
    "Focus on service speed through rush",
    "Keep labour tight against sales",
    "Maintain pizza quality and store standards",
  ];

  const quickLinks = [
    { label: "Daily Performance Entry", href: "/performance/daily-entry" },
    { label: "Store Scorecards", href: "/performance/scorecards" },
    { label: "Trends & Analysis", href: "/performance/trends" },
    { label: "Daily Update Builder", href: "/reporting/daily-update" },
    { label: "Weekly Update Builder", href: "/reporting/weekly-update" },
  ];

  return (
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <p className="amoc-kicker">Dashboard</p>
        <h1 className="amoc-page-title">Area Manager Overview</h1>
        <p className="amoc-page-subtitle">
          Central snapshot for performance, priorities, and reporting.
        </p>
      </div>

      <section className="amoc-grid amoc-grid-kpi">
        {kpiCards.map((card) => (
          <div key={card.title} className="amoc-panel">
            <p className="amoc-card-title">{card.title}</p>
            <p className="amoc-card-value">{card.value}</p>
            <p className="amoc-card-subtext">{card.subtext}</p>
          </div>
        ))}
      </section>

      <div className="amoc-grid amoc-grid-split">
        <section className="amoc-panel">
          <h2 className="amoc-section-title">Today&apos;s Priorities</h2>
          <ul className="amoc-list">
            {priorityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="amoc-panel">
          <h2 className="amoc-section-title">Quick Links</h2>
          <div className="amoc-grid">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="amoc-panel-soft amoc-link-card">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
