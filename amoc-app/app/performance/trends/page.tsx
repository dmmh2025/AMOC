export default function TrendsAnalysisPage() {
  const comparisonCards = [
    {
      title: "Today vs Same Day Last Week",
      subtitle: "Compare current day performance against the same weekday last week.",
      metrics: [["Sales", "£0 vs £0"], ["DOT %", "0% vs 0%"], ["Labour %", "0% vs 0%"], ["ADT", "0 mins vs 0 mins"], ["R&L", "0 mins vs 0 mins"]],
    },
    {
      title: "WTD vs Previous WTD",
      subtitle: "Current week-to-date performance against the same point last week.",
      metrics: [["Sales", "£0 vs £0"], ["DOT %", "0% vs 0%"], ["Labour %", "0% vs 0%"], ["Food Variance %", "0% vs 0%"], ["Extremes %", "0% vs 0%"]],
    },
    {
      title: "MTD vs Previous MTD",
      subtitle: "Current month-to-date performance against the equivalent prior month period.",
      metrics: [["Sales", "£0 vs £0"], ["DOT %", "0% vs 0%"], ["Labour %", "0% vs 0%"], ["ADT", "0 mins vs 0 mins"], ["AOF %", "0% vs 0%"]],
    },
    {
      title: "YTD vs Previous YTD",
      subtitle: "Year-to-date summary against the same point in the previous year.",
      metrics: [["Sales", "£0 vs £0"], ["DOT %", "0% vs 0%"], ["Labour %", "0% vs 0%"], ["Food Variance %", "0% vs 0%"], ["GPS Tracked %", "0% vs 0%"]],
    },
  ];

  const metricOptions = ["Sales", "DOT %", "Labour %", "Food Variance %", "ADT", "Load Time", "Rack Time", "R&L", "Extreme Lates %", "Missed Calls %", "GPS Tracked %", "AOF %"];

  return (
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <a href="/" className="amoc-back-link">← Back to Dashboard</a>
        <h1 className="amoc-page-title">Trends &amp; Analysis</h1>
        <p className="amoc-page-subtitle">Analyse period-on-period performance and compare key service, labour, and sales trends.</p>
      </div>

      <section className="amoc-panel">
        <div className="amoc-form-grid">
          <div className="amoc-field"><label>Area</label><select className="amoc-select"><option>Mourne Area</option></select></div>
          <div className="amoc-field"><label>Store</label><select className="amoc-select"><option>All Stores</option><option>Downpatrick</option><option>Kilkeel</option><option>Newcastle</option></select></div>
          <div className="amoc-field"><label>Primary Metric</label><select className="amoc-select">{metricOptions.map((metric) => <option key={metric}>{metric}</option>)}</select></div>
        </div>
      </section>

      <section className="amoc-grid amoc-grid-kpi">
        {comparisonCards.map((card) => (
          <div key={card.title} className="amoc-panel">
            <h2 className="amoc-subsection-title">{card.title}</h2>
            <p className="amoc-card-subtext amoc-mb-16">{card.subtitle}</p>
            <div className="amoc-stack-10">
              {card.metrics.map(([label, value]) => (
                <div key={label} className="amoc-panel-soft amoc-metric-row">
                  <span className="amoc-metric-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="amoc-grid amoc-split-analytics">
        <section className="amoc-panel">
          <h2 className="amoc-section-title">Trend Chart Placeholder</h2>
          <div className="amoc-dashed">Trend chart visual will be shown here once charting and data sources are connected.</div>
        </section>

        <section className="amoc-panel">
          <h2 className="amoc-section-title">Insight Notes</h2>
          <div className="amoc-panel-soft amoc-muted-copy">
            Trend summaries, performance observations, and exceptions will be captured here for leadership reporting.
          </div>
        </section>
      </div>
    </main>
  );
}
