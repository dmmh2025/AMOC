export default function TrendsAnalysisPage() {
  const comparisonCards = [
    {
      title: "Today vs Same Day Last Week",
      subtitle: "Compare current day performance against the same weekday last week.",
      metrics: [
        ["Sales", "£0 vs £0"],
        ["DOT %", "0% vs 0%"],
        ["Labour %", "0% vs 0%"],
        ["ADT", "0 mins vs 0 mins"],
        ["R&L", "0 mins vs 0 mins"],
      ],
    },
    {
      title: "WTD vs Previous WTD",
      subtitle: "Current week-to-date performance against the same point last week.",
      metrics: [
        ["Sales", "£0 vs £0"],
        ["DOT %", "0% vs 0%"],
        ["Labour %", "0% vs 0%"],
        ["Food Variance %", "0% vs 0%"],
        ["Extremes %", "0% vs 0%"],
      ],
    },
    {
      title: "MTD vs Previous MTD",
      subtitle: "Current month-to-date performance against the equivalent prior month period.",
      metrics: [
        ["Sales", "£0 vs £0"],
        ["DOT %", "0% vs 0%"],
        ["Labour %", "0% vs 0%"],
        ["ADT", "0 mins vs 0 mins"],
        ["AOF %", "0% vs 0%"],
      ],
    },
    {
      title: "YTD vs Previous YTD",
      subtitle: "Year-to-date summary against the same point in the previous year.",
      metrics: [
        ["Sales", "£0 vs £0"],
        ["DOT %", "0% vs 0%"],
        ["Labour %", "0% vs 0%"],
        ["Food Variance %", "0% vs 0%"],
        ["GPS Tracked %", "0% vs 0%"],
      ],
    },
  ];

  const metricOptions = [
    "Sales",
    "DOT %",
    "Labour %",
    "Food Variance %",
    "ADT",
    "Load Time",
    "Rack Time",
    "R&L",
    "Extreme Lates %",
    "AOF %",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ marginBottom: "24px" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              marginBottom: "12px",
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: 600,
            }}
          >
            ← Back to Dashboard
          </a>

          <h1
            style={{
              margin: "0 0 8px 0",
              fontSize: "36px",
              lineHeight: 1.1,
            }}
          >
            Trends & Analysis
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              color: "#4b5563",
            }}
          >
            Review performance trends, period comparisons, and directional KPI movement.
          </p>
        </div>

        <section
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Area
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              >
                <option>Mourne Area</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Store
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              >
                <option>All Stores</option>
                <option>Downpatrick</option>
                <option>Kilkeel</option>
                <option>Newcastle</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Primary Metric
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              >
                {metricOptions.map((metric) => (
                  <option key={metric}>{metric}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {comparisonCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 8px 0", fontSize: "22px" }}>{card.title}</h2>
              <p
                style={{
                  margin: "0 0 16px 0",
                  color: "#6b7280",
                  lineHeight: 1.5,
                }}
              >
                {card.subtitle}
              </p>

              <div style={{ display: "grid", gap: "10px" }}>
                {card.metrics.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      gap: "12px",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#374151" }}>{label}</span>
                    <span style={{ fontWeight: 700 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.9fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Trend Chart Placeholder</h2>

            <div
              style={{
                minHeight: "320px",
                borderRadius: "14px",
                border: "2px dashed #d1d5db",
                background: "#f9fafb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "24px",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Chart area for selected KPI trend.
              <br />
              This will later show Today, WTD, MTD, YTD and comparison lines.
            </div>
          </section>

          <section
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Direction of Travel</h2>

            <div style={{ display: "grid", gap: "12px" }}>
              {[
                ["Sales", "No movement yet"],
                ["DOT %", "No movement yet"],
                ["Labour %", "No movement yet"],
                ["ADT", "No movement yet"],
                ["R&L", "No movement yet"],
                ["Food Variance %", "No movement yet"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: "4px" }}>{label}</div>
                  <div style={{ color: "#6b7280" }}>{value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
