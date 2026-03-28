export default function WeeklyUpdateBuilderPage() {
  const weeklySummary = [["Week Sales", "£0 vs £0 target"], ["Week Labour", "0%"], ["Week DOT", "0%"], ["Week ADT", "0 mins"], ["Week Food Variance", "0%"], ["Week R&L", "0 mins"]];

  const storeReview = [
    { store: "Downpatrick", summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%" },
    { store: "Kilkeel", summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%" },
    { store: "Newcastle", summary: "Sales £0 | DOT 0% | Labour 0% | ADT 0 mins | Food 0%" },
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
    <main className="amoc-page-wrap amoc-section-stack">
      <div className="amoc-page-header">
        <a href="/" className="amoc-back-link">← Back to Dashboard</a>
        <h1 className="amoc-page-title">Weekly Update Builder</h1>
        <p className="amoc-page-subtitle">Build the official weekly area review using aggregated store performance data.</p>
      </div>

      <section className="amoc-panel">
        <div className="amoc-form-grid">
          <div className="amoc-field"><label>Week Commencing</label><input type="date" className="amoc-input" /></div>
          <div className="amoc-field"><label>Area</label><select className="amoc-select"><option>Mourne Area</option></select></div>
          <div className="amoc-field"><label>Status</label><select className="amoc-select"><option>Draft</option><option>Final</option></select></div>
        </div>
      </section>

      <div className="amoc-grid-reporting">
        <section className="amoc-stack-20">
          <div className="amoc-panel">
            <h2 className="amoc-section-title">Weekly Summary</h2>
            <div className="amoc-stack-10">
              {weeklySummary.map(([label, value]) => (
                <div key={label} className="amoc-panel-soft amoc-metric-row">
                  <span className="amoc-metric-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="amoc-panel">
            <h2 className="amoc-section-title">Store Review</h2>
            <div className="amoc-stack-12">
              {storeReview.map((store) => (
                <div key={store.store} className="amoc-panel-soft">
                  <div className="amoc-store-name">{store.store}</div>
                  <div className="amoc-muted-copy">{store.summary}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="amoc-panel">
            <h2 className="amoc-section-title">Weekly Prompt Guide</h2>
            <ul className="amoc-list">
              {weeklyPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="amoc-panel">
          <h2 className="amoc-section-title">Weekly Draft</h2>
          <div className="amoc-field amoc-section-gap-16">
            <label>Title</label>
            <input type="text" defaultValue="Weekly Area Update" className="amoc-input" />
          </div>
          <div className="amoc-field">
            <label>Content</label>
            <textarea defaultValue={weeklyDraft} className="amoc-textarea amoc-textarea-taller" />
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
