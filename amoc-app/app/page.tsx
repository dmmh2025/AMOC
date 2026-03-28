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
    <main>
      <div style={{ marginBottom: "28px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          Dashboard
        </p>
        <h1
          style={{
            margin: "8px 0 0 0",
            fontSize: "38px",
            lineHeight: 1.1,
          }}
        >
          Area Manager Overview
        </h1>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          Central snapshot for performance, priorities, and reporting.
        </p>
      </div>

      <section style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {kpiCards.map((card) => (
            <div key={card.title} className="amoc-panel">
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  margin: "10px 0 6px 0",
                  fontSize: "34px",
                  fontWeight: 700,
                }}
              >
                {card.value}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                {card.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          alignItems: "start",
        }}
      >
        <section className="amoc-panel">
          <h2
            style={{
              margin: "0 0 16px 0",
              fontSize: "24px",
            }}
          >
            Today&apos;s Priorities
          </h2>

          <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151" }}>
            {priorityItems.map((item) => (
              <li key={item} style={{ marginBottom: "12px", fontSize: "16px" }}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="amoc-panel">
          <h2
            style={{
              margin: "0 0 16px 0",
              fontSize: "24px",
            }}
          >
            Quick Links
          </h2>

          <div style={{ display: "grid", gap: "12px" }}>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="amoc-panel-soft"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
