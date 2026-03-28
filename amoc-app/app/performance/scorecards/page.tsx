export default function StoreScorecardsPage() {
  const scorecardMetrics = [
    { title: "Sales vs Target", value: "£0 / £0", subtext: "0% to target" },
    { title: "DOT %", value: "0%", subtext: "on-time delivery" },
    { title: "Labour %", value: "0%", subtext: "vs labour target" },
    { title: "Food Variance %", value: "0%", subtext: "food control" },
    { title: "ADT", value: "0 mins", subtext: "average delivery time" },
    { title: "R&L", value: "0 mins", subtext: "rack + load time" },
  ];

  const kpiRows = [
    ["Sales Actual", "£0"],
    ["Sales Target", "£0"],
    ["Additional Hours", "0"],
    ["DOT %", "0%"],
    ["SBR %", "0%"],
    ["ADT", "0 mins"],
    ["Load Time", "0 mins"],
    ["Rack Time", "0 mins"],
    ["R&L", "0 mins"],
    ["Extreme Lates %", "0%"],
    ["Missed Calls %", "0%"],
    ["GPS Tracked %", "0%"],
    ["AOF %", "0%"],
    ["Labour %", "0%"],
    ["Food Variance %", "0%"],
  ];

  const filterButtons = ["Yesterday", "WTD", "MTD", "YTD", "Custom"];

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
            Store Scorecards
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              color: "#4b5563",
            }}
          >
            Review store performance by period and compare key service, labour, and food metrics.
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
              marginBottom: "18px",
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
                <option>Downpatrick</option>
                <option>Kilkeel</option>
                <option>Newcastle</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Custom From
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Custom To
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {filterButtons.map((filter, index) => (
              <button
                key={filter}
                style={{
                  background: index === 0 ? "#2563eb" : "#e5e7eb",
                  color: index === 0 ? "#ffffff" : "#111827",
                  border: "none",
                  borderRadius: "999px",
                  padding: "10px 16px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {scorecardMetrics.map((metric) => (
              <div
                key={metric.title}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
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
                  {metric.title}
                </p>
                <p
                  style={{
                    margin: "10px 0 6px 0",
                    fontSize: "30px",
                    fontWeight: 700,
                  }}
                >
                  {metric.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.9fr",
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
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>KPI Breakdown</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {kpiRows.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "#374151", fontWeight: 600 }}>{label}</span>
                  <span style={{ fontWeight: 700 }}>{value}</span>
                </div>
              ))}
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
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Notes & Commentary</h2>

            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
                color: "#4b5563",
                lineHeight: 1.6,
                marginBottom: "14px",
              }}
            >
              No commentary yet. This panel will later show period notes, risks, and coaching focus.
            </div>

            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
                color: "#4b5563",
                lineHeight: 1.6,
              }}
            >
              Historical notes and trend comments will also sit here once data is connected.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
