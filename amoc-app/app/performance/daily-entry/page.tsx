export default function DailyKpiEntryPage() {
  const stores = ["Downpatrick", "Kilkeel", "Newcastle"];

  const headings = [
    "Store",
    "Total Orders",
    "Total Deliveries",
    "DOT %",
    "Rack Time",
    "Load Time",
    "R&L",
    "ADT",
    "Extreme Late %",
    "Sales",
    "Labour Cost",
    "Additional Hours",
    "Ideal Food Cost",
    "Actual Food Cost",
    "Total Calls",
    "Missed Calls",
    "Weekly AOF %",
    "GPS Tracked %",
    "Notes",
  ];

  return (
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <p className="amoc-kicker">Data Entry</p>
        <h1 className="amoc-page-title">Daily KPI Entry</h1>
        <p className="amoc-page-subtitle">
          Enter daily service, cost control, and KPI data by store. Weekly and WTD reporting will
          be calculated from these inputs.
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
          <table className="amoc-table amoc-table-daily">
            <thead>
              <tr>
                {headings.map((heading) => (
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

                  {["total_orders", "total_deliveries", "dot_pct", "rack_time", "load_time"].map(
                    (field) => (
                      <td key={field}>
                        <input type="number" step="0.01" className="amoc-input amoc-input-compact" />
                      </td>
                    )
                  )}

                  <td>
                    <span className="amoc-highlight">Auto</span>
                  </td>

                  {[
                    "adt",
                    "extreme_late_pct",
                    "sales",
                    "labour_cost",
                    "ideal_food_cost",
                    "actual_food_cost",
                    "total_calls",
                    "missed_calls",
                    "weekly_aof",
                    "gps_tracked_pct",
                  ].map((field) => (
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
