import React from "react";
import "../styles/architecture.css";
import UserIcon from "./icons/UserIcon";
import DashboardIcon from "./icons/DashboardIcon";
import BlockchainIcon from "./icons/BlockchainIcon";
import LockIcon from "./icons/LockIcon";
import CloudIcon from "./icons/CloudIcon";

/**
 * PUBLIC_INTERFACE
 * ArchitectureDiagram renders a horizontally layered architecture with color-coded rows
 * and a single, clear left-to-right arrow per layer. It is presentation-ready and responsive.
 *
 * How to modify:
 * - Update the 'layers' configuration below to adjust labels/callouts.
 * - Colors and typography are defined in src/styles/architecture.css.
 */
const ArchitectureDiagram = () => {
  // Data-driven configuration of layers and callouts for easy tweaks
  const layers = [
    {
      key: "frontend",
      label: "Frontend",
      callouts: [
        {
          title: "Widget & CMS Plugins",
          body: "Embed widgets, headless CMS integrations, plugin SDKs",
          icon: <DashboardIcon title="Dashboard" />,
        },
        {
          title: "KYC/2FA",
          body: "Identity verification and two-factor authentication",
          icon: <UserIcon title="User" />,
        },
        {
          title: "Dashboards",
          body: "Merchant portal, end-user portal, admin",
          icon: <DashboardIcon title="Dashboards" />,
        },
        {
          title: "Partner & Support",
          body: "Product/Scrum/QA, UAT, business reviews",
          icon: <UserIcon title="Partner & Support" />,
        },
      ],
    },
    {
      key: "middleware",
      label: "Middleware",
      callouts: [
        {
          title: "Compliance & Audit (AML)",
          body: "Rules engine, sanctions screening, transaction reviews",
          icon: <LockIcon title="Compliance" />,
        },
        {
          title: "Payment Engine",
          body: "Multi-chain BTC, ETH, Tron, BSC, Solana, Polygon, USDT, USDC",
          icon: <BlockchainIcon title="Payment Engine" />,
        },
      ],
    },
    {
      key: "backend",
      label: "Backend",
      callouts: [
        {
          title: "Vault/HSM",
          body: "Key custody, signing, secure enclave operations",
          icon: <LockIcon title="Vault/HSM" />,
        },
      ],
    },
    {
      key: "blockchain",
      label: "Blockchain",
      callouts: [
        {
          title: "Node Connectors",
          body: "RPC providers, managed nodes, rate limiting",
          icon: <BlockchainIcon title="Node connectors" />,
        },
      ],
    },
    {
      key: "infrastructure",
      label: "Infrastructure",
      callouts: [
        {
          title: "Cloud Ops",
          body: "Monitoring, metrics, logs, reliability",
          icon: <CloudIcon title="Cloud operations" />,
        },
      ],
    },
  ];

  // Single subtle arrow used once per layer to indicate left-to-right flow
  const LayerArrow = ({ color = "#6b7280" /* slate-500 */ }) => (
    <svg
      className="arch-arrow"
      width="96"
      height="28"
      role="img"
      aria-label="Directional arrow"
      viewBox="0 0 96 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 14h76M70 6l16 8-16 8"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="arch-container" aria-label="Architecture diagram">
      <header className="arch-header">
        <h1 className="arch-title">Platform Architecture</h1>
        <p className="arch-subtitle" aria-label="single-slide-info">
          Horizontal layered view with directional flow and key modules
        </p>
      </header>

      <div
        className="arch-board"
        role="img"
        aria-label="Horizontally layered architecture with five layers and callouts"
      >
        {layers.map((layer) => (
          <div
            className={`arch-row ${layer.key}`}
            key={layer.key}
            aria-label={`${layer.label} layer`}
          >
            <div className={`layer-label ${layer.key}`}>
              <span className="chip" aria-label={`${layer.label} label`}>
                {layer.label}
              </span>
            </div>

            <div className="arch-cards">
              {layer.callouts.map((c) => (
                <div
                  className="arch-card"
                  key={`${layer.key}-${c.title}`}
                  aria-label={`${c.title} callout`}
                >
                  <div className="title">
                    {c.icon}
                    <span>{c.title}</span>
                  </div>
                  {c.body && <div className="body">{c.body}</div>}
                </div>
              ))}
            </div>

            {/* Single arrow per layer to indicate flow; no per-card arrows */}
            <LayerArrow />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
