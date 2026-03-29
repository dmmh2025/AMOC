export default function DailyKpiEntryPage() {
  const stores: string[] = [];

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  } as const;

  const thStyle = {
    textAlign: "left" as const,
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
    whiteSpace: "nowrap" as const,
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    verticalAlign: "middle" as const,
  };

  const emptyState = (
    <div
      style={{
        padding: "18px",
        borderRadius: "12px",
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        color: "#6b7280",
        lineHeight: 1.6,
      }}
    >
      No stores loaded yet.
      <br />
      Once Supabase is connected, this page will load active stores from the selected area.
    </div>
  );

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
          Data Entry
        </p>
        <h1
          style={{
            margin: "8px 0 0 0",
            fontSize: "38px",
            lineHeight: 1.1,
          }}
        >
          Daily KPI Entry
        </h1>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          Enter daily service, cost control, and KPI data by area. Stores should load dynamically
          based on the selected area and the logged-in user’s access.
        </p>
      </div>

      <section className="amoc-panel" style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              Entry Date
            </label>
            <input type="date" style={inputStyle} />
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>Area</label>
            <select style={inputStyle}>
              <option>Select Area</option>
              <option>Area Placeholder 1</option>
              <option>Area Placeholder 2</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              Submission Status
            </label>
            <select style={inputStyle}>
              <option>Draft</option>
              <option>Submitted</option>
              <option>Final</option>
            </select>
          </div>
        </div>
      </section>

      <section className="amoc-panel" style={{ marginBottom: "24px", overflowX: "auto" }}>
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "24px" }}>Service</h2>
          <p style={{ margin: "6px 0 0 0", color: "#6b7280" }}>
            Daily service inputs used to calculate WTD and weekly service performance.
          </p>
        </div>

        {stores.length === 0 ? (
          emptyState
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1100px",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={thStyle}>Store</th>
                <th style={thStyle}>Total Orders</th>
                <th style={thStyle}>Total Deliveries</th>
                <th style={thStyle}>DOT %</th>
                <th style={thStyle}>Rack Time (mins)</th>
                <th style={thStyle}>Load Time (mins)</th>
                <th style={thStyle}>R&amp;L (auto)</th>
                <th style={thStyle}>ADT (mins)</th>
                <th style={thStyle}>Extreme Lates %</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store}>
                  <td style={{ ...tdStyle, fontWeight: 700 }}>{store}</td>
                  <td style={tdStyle}>
                    <input type="number" step="1" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="1" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 700, color: "#00164d" }}>Auto</td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="amoc-panel" style={{ marginBottom: "24px", overflowX: "auto" }}>
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "24px" }}>Cost Control</h2>
          <p style={{ margin: "6px 0 0 0", color: "#6b7280" }}>
            Daily sales and cost inputs used to calculate labour and food control properly.
          </p>
        </div>

        {stores.length === 0 ? (
          emptyState
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={thStyle}>Store</th>
                <th style={thStyle}>Sales</th>
                <th style={thStyle}>Labour Cost</th>
                <th style={thStyle}>Additional Hours</th>
                <th style={thStyle}>Ideal Food Cost</th>
                <th style={thStyle}>Actual Food Cost</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store}>
                  <td style={{ ...tdStyle, fontWeight: 700 }}>{store}</td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.25" placeholder="+/- hrs" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="amoc-panel" style={{ marginBottom: "24px", overflowX: "auto" }}>
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "24px" }}>Other KPI</h2>
          <p style={{ margin: "6px 0 0 0", color: "#6b7280" }}>
            Supporting measures used for calls, quality, and tracked delivery performance.
          </p>
        </div>

        {stores.length === 0 ? (
          emptyState
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb" }}>
                <th style={thStyle}>Store</th>
                <th style={thStyle}>Total Calls</th>
                <th style={thStyle}>Missed Calls</th>
                <th style={thStyle}>Weekly AOF %</th>
                <th style={thStyle}>GPS Tracked %</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store}>
                  <td style={{ ...tdStyle, fontWeight: 700 }}>{store}</td>
                  <td style={tdStyle}>
                    <input type="number" step="1" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="1" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                  <td style={tdStyle}>
                    <input type="number" step="0.01" style={inputStyle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="amoc-panel">
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "24px" }}>Daily Notes</h2>
          <p style={{ margin: "6px 0 0 0", color: "#6b7280" }}>
            Add any context that will help explain performance or support reporting later.
          </p>
        </div>

        {stores.length === 0 ? (
          emptyState
        ) : (
          <div
            style={{
              display: "grid",
              gap: "14px",
              marginBottom: "18px",
            }}
          >
            {stores.map((store) => (
              <div key={store}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                  {store} Notes
                </label>
                <textarea
                  placeholder={`Add notes for ${store}...`}
                  style={{
                    width: "100%",
                    minHeight: "90px",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    fontSize: "14px",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            marginTop: "18px",
          }}
        >
          <button
            style={{
              background: "#e5e7eb",
              color: "#111827",
              border: "none",
              borderRadius: "10px",
              padding: "12px 18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Save Draft
          </button>

          <button
            style={{
              background: "#00164d",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Submit Data
          </button>
        </div>
      </section>
    </main>
  );
}
