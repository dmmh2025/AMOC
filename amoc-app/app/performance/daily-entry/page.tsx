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
    "Ideal Food Cost",
    "Actual Food Cost",
    "Total Calls",
    "Missed Calls",
    "Weekly AOF %",
    "GPS Tracked %",
    "Notes",
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
          Enter daily service, cost control, and KPI data by store. Weekly and WTD reporting will
          be calculated from these inputs.
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
              Submission Status
            </label>
            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
            >
              <option>Draft</option>
              <option>Submitted</option>
              <option>Final</option>
            </select>
          </div>
        </div>
      </section>

      <section className="amoc-panel" style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "1900px",
          }}
        >
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              {headings.map((heading) => (
                <th
                  key={heading}
                  style={{
                    textAlign: "left",
                    padding: "12px",
                    borderBottom: "1px solid #e5e7eb",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {stores.map((store) => (
              <tr key={store}>
                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #e5e7eb",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {store}
                </td>

                {[
                  "total_orders",
                  "total_deliveries",
                  "dot_pct",
                  "rack_time",
                  "load_time",
                ].map((field) => (
                  <td
                    key={field}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <input
                      type="number"
                      step="0.01"
                      style={{
                        width: "110px",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </td>
                ))}

                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #e5e7eb",
                    fontWeight: 700,
                    color: "#006491",
                    whiteSpace: "nowrap",
                  }}
                >
                  Auto
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
                  <td
                    key={field}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <input
                      type="number"
                      step="0.01"
                      style={{
                        width: "110px",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </td>
                ))}

                <td
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Add notes..."
                    style={{
                      width: "220px",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
            marginTop: "20px",
            flexWrap: "wrap",
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
              background: "#006491",
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
