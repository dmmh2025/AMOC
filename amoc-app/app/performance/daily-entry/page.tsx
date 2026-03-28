export default function DailyPerformanceEntryPage() {
  const stores = ["Downpatrick", "Kilkeel", "Newcastle"];

  return (
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <a href="/" className="amoc-back-link">
          ← Back to Dashboard
        </a>
        <h1 className="amoc-page-title">Daily Performance Entry</h1>
        <p className="amoc-page-subtitle">
          Enter daily KPI data by store. R&amp;L is calculated automatically from rack and load time.
        </p>
      </div>

      <section className="amoc-panel">
        <div className="amoc-form-grid">
          <div className="amoc-field">
            <label>Entry Date</label>
            <input type="date" className="amoc-input" />
          </div>

          <div className="amoc-field">
            <label>Area</label>
            <select className="amoc-select">
              <option>Mourne Area</option>
            </select>
          </div>

          <div className="amoc-field">
            <label>Submission Status</label>
            <select className="amoc-select">
              <option>Draft</option>
              <option>Submitted</option>
              <option>Final</option>
            </select>
          </div>
        </div>
      </section>

      <section className="amoc-panel">
        <div className="amoc-table-wrap">
          <table className="amoc-table">
            <thead>
              <tr>
                {[
                  "Store",
                  "Sales Actual",
                  "Sales Target",
                  "Labour %",
                  "Additional Hours",
                  "Food Variance %",
                  "DOT %",
                  "SBR %",
                  "ADT Mins",
                  "Load Time",
                  "Rack Time",
                  "R&L Mins",
                  "Extreme Lates %",
                  "Missed Calls %",
                  "GPS Tracked %",
                  "AOF %",
                  "Notes",
                ].map((heading) => (
                  <th key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {stores.map((store) => (
                <tr key={store}>
                  <td>
                    <strong>{store}</strong>
                  </td>
                  {[
                    "sales_actual",
                    "sales_target",
                    "labour_pct",
                    "additional_hours",
                    "food_variance_pct",
                    "dot_pct",
                    "sbr_pct",
                    "adt_mins",
                    "load_time",
                    "rack_time",
                  ].map((field) => (
                    <td key={field}>
                      <input type="number" step="0.01" className="amoc-input amoc-input-compact" />
                    </td>
                  ))}
                  <td>
                    <span className="amoc-highlight">Auto</span>
                  </td>
                  {["extreme_lates", "missed_calls", "gps_tracked", "aof"].map((field) => (
                    <td key={field}>
                      <input type="number" step="0.01" className="amoc-input amoc-input-compact" />
                    </td>
                  ))}
                  <td>
                    <input type="text" placeholder="Add notes..." className="amoc-input amoc-input-wide" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="amoc-actions">
          <button className="amoc-btn amoc-btn-muted">Save Draft</button>
          <button className="amoc-btn amoc-btn-primary">Submit Data</button>
        </div>
      </section>
    </main>
  );
}
