import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const navSections = [
  {
    label: "Overview",
    links: [{ href: "/", text: "Dashboard" }],
  },
  {
    label: "Data Entry",
    links: [{ href: "/performance/daily-entry", text: "Daily KPI Entry" }],
  },
  {
    label: "Performance",
    links: [
      { href: "/performance/scorecards", text: "Store Scorecards" },
      { href: "/performance/trends", text: "Trends & Analysis" },
    ],
  },
  {
    label: "Reporting",
    links: [
      { href: "/reporting/daily-update", text: "Daily Update Builder" },
      { href: "/reporting/weekly-update", text: "Weekly Update Builder" },
    ],
  },
];

const upcomingItems = ["OSA", "Resources", "People & Development"];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="amoc-shell">
          <aside className="amoc-sidebar">
            <div className="amoc-brand">
              <Link href="/" className="amoc-brand-logo-link" aria-label="AMOC dashboard home">
                <Image src="/amoc-logo.png" alt="AMOC logo" width={220} height={72} className="amoc-brand-logo" priority />
              </Link>
              <p className="amoc-brand-subtitle">
                Area Manager Operations Centre
                <br />
                Performance, reporting, and leadership in one command centre.
              </p>
            </div>

            {navSections.map((section) => (
              <div className="amoc-nav-group" key={section.label}>
                <p className="amoc-nav-label">{section.label}</p>
                <div className="amoc-nav-list">
                  {section.links.map((link) => (
                    <Link key={link.href} className="amoc-nav-link" href={link.href}>
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="amoc-nav-group amoc-nav-group-last">
              <p className="amoc-nav-label">Coming Next</p>
              <div className="amoc-nav-list">
                {upcomingItems.map((item) => (
                  <span key={item} className="amoc-nav-link amoc-nav-link-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="amoc-main">
            <header className="amoc-topbar">
              <div>
                <h2 className="amoc-topbar-title">AMOC Platform</h2>
                <p className="amoc-topbar-subtitle">Structured performance management for Area Managers</p>
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
