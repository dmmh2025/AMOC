export default function DailyPerformanceEntryPage() {
  const stores = ["Downpatrick", "Kilkeel", "Newcastle"];

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
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
            Daily Performance Entry
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              color: "#4b5563",
            }}
          >
            Enter daily KPI data by store. R&amp;L is calculated automatically from rack and load time.
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

        <section
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1700px",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb" }}>
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
                      color: "#2563eb",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Auto
                  </td>

                  {["extreme_lates", "missed_calls", "gps_tracked", "aof"].map((field) => (
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
                background: "#2563eb",
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
      </div>
    </main>
  );
}
