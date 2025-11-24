import React from "react";

/**
 * PUBLIC_INTERFACE
 * An accessible blockchain icon using inline SVG (linked cubes).
 */
const BlockchainIcon = ({ size = 18, title = "Blockchain icon", color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>{title}</title>
    <path d="M7.5 3.5l4.5 2.5 4.5-2.5M7.5 3.5v5l4.5 2.5m4.5-7.5v5l-4.5 2.5M12 11v5" />
    <rect x="3" y="14" width="8" height="7" rx="1.5" />
    <rect x="13" y="14" width="8" height="7" rx="1.5" />
  </svg>
);

export default BlockchainIcon;
