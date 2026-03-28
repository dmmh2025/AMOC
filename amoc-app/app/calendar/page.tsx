export default function CalendarPage() {
  const days = [
    { day: "Mon", date: "1", events: ["Area Meeting"] },
    { day: "Tue", date: "2", events: [] },
    { day: "Wed", date: "3", events: ["Store Visit - Downpatrick"] },
    { day: "Thu", date: "4", events: ["Holiday - Alex"] },
    { day: "Fri", date: "5", events: ["Training - Kilkeel"] },
    { day: "Sat", date: "6", events: [] },
    { day: "Sun", date: "7", events: [] },

    { day: "Mon", date: "8", events: ["Probation Review"] },
    { day: "Tue", date: "9", events: [] },
    { day: "Wed", date: "10", events: ["Support Shift - Newcastle"] },
    { day: "Thu", date: "11", events: [] },
    { day: "Fri", date: "12", events: ["Annual Leave - Damien"] },
    { day: "Sat", date: "13", events: [] },
    { day: "Sun", date: "14", events: [] },

    { day: "Mon", date: "15", events: [] },
    { day: "Tue", date: "16", events: ["OSA Visit Placeholder"] },
    { day: "Wed", date: "17", events: [] },
    { day: "Thu", date: "18", events: ["Store Audit"] },
    { day: "Fri", date: "19", events: [] },
    { day: "Sat", date: "20", events: [] },
    { day: "Sun", date: "21", events: [] },

    { day: "Mon", date: "22", events: ["Manager 1:1"] },
    { day: "Tue", date: "23", events: [] },
    { day: "Wed", date: "24", events: [] },
    { day: "Thu", date: "25", events: ["Training Follow-up"] },
    { day: "Fri", date: "26", events: [] },
    { day: "Sat", date: "27", events: [] },
    { day: "Sun", date: "28", events: [] },

    { day: "Mon", date: "29", events: [] },
    { day: "Tue", date: "30", events: ["Area Review"] },
  ];

  const upcomingEvents = [
    {
      title: "Store Visit - Downpatrick",
      type: "Visit",
      when: "Wednesday, 3 April · 10:00",
      detail: "Planned support and performance review visit.",
    },
    {
      title: "Holiday - Alex",
      type: "Holiday",
      when: "Thursday, 4 April · All Day",
      detail: "Annual leave recorded for Newcastle ASM.",
    },
    {
      title: "Training - Kilkeel",
      type: "Training",
      when: "Friday, 5 April · 14:00",
      detail: "Shift runner development session.",
    },
    {
      title: "Support Shift - Newcastle",
      type: "Support",
      when: "Wednesday, 10 April · 17:00",
      detail: "Cross-store support planned for evening peak.",
    },
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
          Calendar
        </p>
        <h1
          style={{
            margin: "8px 0 0 0",
            fontSize: "38px",
            lineHeight: 1.1,
          }}
        >
          Shared Planning Calendar
        </h1>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          Visibility for holidays, visits, training, meetings, support shifts, and key deadlines.
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
              View
            </label>
            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
            >
              <option>Month</option>
              <option>Agenda</option>
              <option>Week</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              Event Type
            </label>
            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
            >
              <option>All Events</option>
              <option>Holiday</option>
              <option>Visit</option>
              <option>Training</option>
              <option>Support</option>
              <option>Meeting</option>
              <option>Probation</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>
              Month
            </label>
            <input
              type="month"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>
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
        <section className="amoc-panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px" }}>April 2026</h2>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                style={{
                  background: "#e5e7eb",
                  color: "#111827",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ← Previous
              </button>
              <button
                style={{
                  background: "#00164d",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Today
              </button>
              <button
                style={{
                  background: "#e5e7eb",
                  color: "#111827",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Next →
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            {days.map((item, index) => (
              <div
                key={`${item.day}-${item.date}-${index}`}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "12px",
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.day}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#111827",
                      marginTop: "4px",
                    }}
                  >
                    {item.date}
                  </div>
                </div>

                <div style={{ display: "grid", gap: "6px" }}>
                  {item.events.length === 0 ? (
                    <span style={{ fontSize: "13px", color: "#9ca3af" }}>No events</span>
                  ) : (
                    item.events.map((event) => (
                      <div
                        key={event}
                        style={{
                          background: "rgba(31, 142, 216, 0.10)",
                          color: "#00164d",
                          border: "1px solid rgba(31, 142, 216, 0.25)",
                          borderRadius: "10px",
                          padding: "8px 10px",
                          fontSize: "12px",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {event}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <div className="amoc-panel">
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Upcoming Events</h2>

            <div style={{ display: "grid", gap: "12px" }}>
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="amoc-panel-soft"
                  style={{
                    display: "grid",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "start",
                    }}
                  >
                    <div style={{ fontWeight: 800 }}>{event.title}</div>
                    <span
                      style={{
                        background: "rgba(31, 142, 216, 0.12)",
                        color: "#00164d",
                        borderRadius: "999px",
                        padding: "6px 10px",
                        fontSize: "12px",
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {event.type}
                    </span>
                  </div>

                  <div style={{ color: "#4b5563", fontWeight: 600 }}>{event.when}</div>
                  <div style={{ color: "#6b7280", lineHeight: 1.5 }}>{event.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="amoc-panel">
            <h2 style={{ margin: "0 0 18px 0", fontSize: "24px" }}>Quick Actions</h2>

            <div style={{ display: "grid", gap: "12px" }}>
              <button
                style={{
                  background: "#00164d",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                + Add Calendar Event
              </button>

              <button
                style={{
                  background: "#f3f4f6",
                  color: "#111827",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                View Agenda Mode
              </button>

              <button
                style={{
                  background: "#f3f4f6",
                  color: "#111827",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                Export Calendar View
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
