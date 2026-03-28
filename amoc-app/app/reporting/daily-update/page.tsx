export default function DailyUpdateBuilderPage() {
  const areaSummary = [["Area Sales", "£0 vs £0 target"], ["Area Labour", "0%"], ["Area DOT", "0%"], ["Area ADT", "0 mins"], ["Area Food Variance", "0%"], ["Area R&L", "0 mins"]];

  const storeBreakdown = [
    { store: "Downpatrick", metrics: ["Sales £0", "DOT 0%", "Labour 0%", "ADT 0 mins", "Food 0%"] },
    { store: "Kilkeel", metrics: ["Sales £0", "DOT 0%", "Labour 0%", "ADT 0 mins", "Food 0%"] },
    { store: "Newcastle", metrics: ["Sales £0", "DOT 0%", "Labour 0%", "ADT 0 mins", "Food 0%"] },
  ];

  const suggestedTalkingPoints = [
    "Recognise strongest performing store",
    "Call out any labour or service risks",
    "Highlight food control concerns",
    "Set the next operational focus clearly",
  ];

  const draftText = `@channel Daily Area Update

Here is yesterday's area review.

Area sales finished at £0 versus a target of £0.
Area labour sat at 0% and DOT finished at 0%.
ADT closed at 0 minutes, with R&L at 0 minutes.

Downpatrick: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%
Kilkeel: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%
Newcastle: Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%

Main focus for today:
- Improve service speed
- Keep labour controlled
- Maintain food quality and standards`;

  return (
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <a href="/" className="amoc-back-link">← Back to Dashboard</a>
        <h1 className="amoc-page-title">Daily Update Builder</h1>
        <p className="amoc-page-subtitle">Build the official daily area update using store performance data and AM priorities.</p>
      </div>

      <section className="amoc-panel">
        <div className="amoc-form-grid">
          <div className="amoc-field"><label>Review Date</label><input type="date" className="amoc-input" /></div>
          <div className="amoc-field"><label>Area</label><select className="amoc-select"><option>Mourne Area</option></select></div>
          <div className="amoc-field"><label>Status</label><select className="amoc-select"><option>Draft</option><option>Final</option></select></div>
        </div>
      </section>

      <div className="amoc-grid-reporting">
        <section className="amoc-stack-20">
          <div className="amoc-panel">
            <h2 className="amoc-section-title">Area Summary</h2>
            <div className="amoc-stack-10">
              {areaSummary.map(([label, value]) => (
                <div key={label} className="amoc-panel-soft amoc-metric-row">
                  <span className="amoc-metric-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="amoc-panel">
            <h2 className="amoc-section-title">Store Breakdown</h2>
            <div className="amoc-stack-12">
              {storeBreakdown.map((store) => (
                <div key={store.store} className="amoc-panel-soft">
                  <div className="amoc-store-name">{store.store}</div>
                  <div className="amoc-muted-copy">{store.metrics.join(" | ")}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="amoc-panel">
            <h2 className="amoc-section-title">Suggested Talking Points</h2>
            <ul className="amoc-list">
              {suggestedTalkingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="amoc-panel">
          <h2 className="amoc-section-title">Update Draft</h2>
          <div className="amoc-field amoc-section-gap-16">
            <label>Title</label>
            <input type="text" defaultValue="Daily Area Update" className="amoc-input" />
          </div>
          <div className="amoc-field">
            <label>Content</label>
            <textarea defaultValue={draftText} className="amoc-textarea amoc-textarea-tall" />
          </div>
          <div className="amoc-actions">
            <button className="amoc-btn amoc-btn-muted">Generate Draft</button>
            <button className="amoc-btn amoc-btn-secondary">Save Draft</button>
            <button className="amoc-btn amoc-btn-primary">Mark Final</button>
          </div>
        </section>
      </div>
    </main>
  );
}
