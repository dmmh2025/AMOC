export default function WeeklyUpdateBuilderPage() {
  const weeklySummary = [
    ["Week Sales", "£0 vs £0 target"],
    ["Week Labour", "0%"],
    ["Week DOT", "0%"],
    ["Week ADT", "0 mins"],
    ["Week Food Variance", "0%"],
    ["Week R&L", "0 mins"],
  ];

  const storeReview = [
    {
      store: "Downpatrick",
      summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%",
    },
    {
      store: "Kilkeel",
      summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%",
    },
    {
      store: "Newcastle",
      summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%",
    },
  ];

  const weeklyPrompts = [
    "Call out the strongest store of the week",
    "Highlight the biggest operational risk",
    "Summarise labour and service performance",
    "Set 2–3 clear priorities for the week ahead",
  ];

  const weeklyDraft = `Weekly Area Update

Here is the review for the week.

Area sales closed at £0 versus a target of £0.
Area labour finished at 0%, with DOT at 0%.
ADT closed at 0 minutes and R&L at 0 minutes.
Food variance ended the week at 0%.

Store review:
Downpatrick: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%
Kilkeel: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%
Newcastle: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%

Priorities for next week:
- Improve service execution
- Control labour against sales
- Maintain food quality and operational standards`;

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
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
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
            Weekly Update Builder
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              color: "#4b5563",
            }}
          >
            Build the official weekly area review using aggregated store performance data.
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
                Week Commencing
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
                Status
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
                <option>Final</option>
              </select>
            </div>
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Weekly Summary</h2>

              <div style={{ display: "grid", gap: "10px" }}>
                {weeklySummary.map(([label, value]) => (
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
                    <span style={{ fontWeight: 600, color: "#374151" }}>{label}</span>
                    <span style={{ fontWeight: 700 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Store Review</h2>

              <div style={{ display: "grid", gap: "12px" }}>
                {storeReview.map((store) => (
                  <div
                    key={store.store}
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>
                      {store.store}
                    </div>
                    <div style={{ color: "#4b5563", lineHeight: 1.6 }}>{store.summary}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Weekly Prompt Guide</h2>

              <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151" }}>
                {weeklyPrompts.map((prompt) => (
                  <li key={prompt} style={{ marginBottom: "10px", lineHeight: 1.5 }}>
                    {prompt}
                  </li>
                ))}
              </ul>
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
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Weekly Draft</h2>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Title
              </label>
              <input
                type="text"
                defaultValue="Weekly Area Update"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
                Content
              </label>
              <textarea
                defaultValue={weeklyDraft}
                style={{
                  width: "100%",
                  minHeight: "440px",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  resize: "vertical",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
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
                Generate Draft
              </button>

              <button
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
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
                Mark Final
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
