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
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <a href="/" className="amoc-back-link">← Back to Dashboard</a>
        <h1 className="amoc-page-title">Store Scorecards</h1>
        <p className="amoc-page-subtitle">
          Review store performance by period and compare key service, labour, and food metrics.
        </p>
      </div>

      <section className="amoc-panel amoc-section-stack">
        <div className="amoc-form-grid">
          <div className="amoc-field"><label>Area</label><select className="amoc-select"><option>Mourne Area</option></select></div>
          <div className="amoc-field"><label>Store</label><select className="amoc-select"><option>Downpatrick</option><option>Kilkeel</option><option>Newcastle</option></select></div>
          <div className="amoc-field"><label>Custom From</label><input type="date" className="amoc-input" /></div>
          <div className="amoc-field"><label>Custom To</label><input type="date" className="amoc-input" /></div>
        </div>
        <div className="amoc-chip-group">
          {filterButtons.map((filter, index) => (
            <button key={filter} className={`amoc-btn amoc-chip ${index === 0 ? "amoc-chip-active" : ""}`}>{filter}</button>
          ))}
        </div>
      </section>

      <section className="amoc-grid amoc-grid-kpi">
        {scorecardMetrics.map((metric) => (
          <div key={metric.title} className="amoc-panel">
            <p className="amoc-card-title">{metric.title}</p>
            <p className="amoc-card-value amoc-card-value-sm">{metric.value}</p>
            <p className="amoc-card-subtext">{metric.subtext}</p>
          </div>
        ))}
      </section>

      <div className="amoc-grid amoc-split-analytics">
        <section className="amoc-panel">
          <h2 className="amoc-section-title">KPI Breakdown</h2>
          <div className="amoc-grid amoc-grid-two-col">
            {kpiRows.map(([label, value]) => (
              <div key={label} className="amoc-panel-soft amoc-metric-row">
                <span className="amoc-metric-label">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="amoc-panel">
          <h2 className="amoc-section-title">Notes &amp; Commentary</h2>
          <div className="amoc-panel-soft amoc-muted-copy amoc-section-gap-16">
            No commentary yet. This panel will later show period notes, risks, and coaching focus.
          </div>
          <div className="amoc-panel-soft amoc-muted-copy">
            Historical notes and trend comments will also sit here once data is connected.
          </div>
        </section>
      </div>
    </main>
  );
}
