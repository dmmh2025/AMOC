import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="amoc-shell">
          <aside className="amoc-sidebar">
            <div className="amoc-brand">
              <p className="amoc-brand-kicker">AMOC</p>
              <h1 className="amoc-brand-title">Area Manager Operations Centre</h1>
              <p className="amoc-brand-subtitle">
                Performance, reporting, planning, and operational leadership in one place.
              </p>
            </div>

            <div className="amoc-nav-group">
              <p className="amoc-nav-label">Overview</p>
              <div className="amoc-nav-list">
                <a className="amoc-nav-link" href="/">
                  Dashboard
                </a>
              </div>
            </div>

            <div className="amoc-nav-group">
              <p className="amoc-nav-label">Data Entry</p>
              <div className="amoc-nav-list">
                <a className="amoc-nav-link" href="/performance/daily-entry">
                  Daily KPI Entry
                </a>
              </div>
            </div>

            <div className="amoc-nav-group">
              <p className="amoc-nav-label">Performance</p>
              <div className="amoc-nav-list">
                <a className="amoc-nav-link" href="/performance/scorecards">
                  Store Scorecards
                </a>
                <a className="amoc-nav-link" href="/performance/trends">
                  Trends & Analysis
                </a>
              </div>
            </div>

            <div className="amoc-nav-group">
              <p className="amoc-nav-label">Reporting</p>
              <div className="amoc-nav-list">
                <a className="amoc-nav-link" href="/reporting/daily-update">
                  Daily Update Builder
                </a>
                <a className="amoc-nav-link" href="/reporting/weekly-update">
                  Weekly Update Builder
                </a>
              </div>
            </div>

            <div className="amoc-nav-group">
              <p className="amoc-nav-label">Coming Next</p>
              <div className="amoc-nav-list">
                <span className="amoc-nav-link" style={{ opacity: 0.6, cursor: "default" }}>
                  OSA
                </span>
                <span className="amoc-nav-link" style={{ opacity: 0.6, cursor: "default" }}>
                  Resources
                </span>
                <span className="amoc-nav-link" style={{ opacity: 0.6, cursor: "default" }}>
                  People & Development
                </span>
              </div>
            </div>
          </aside>

          <div className="amoc-main">
            <header className="amoc-topbar">
              <div>
                <h2 className="amoc-topbar-title">AMOC Platform</h2>
                <p className="amoc-topbar-subtitle">
                  Structured performance management for Area Managers
                </p>
              </div>

              <div className="amoc-topbar-badge">Phase 1 Build</div>
            </header>

            <div className="amoc-page">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
