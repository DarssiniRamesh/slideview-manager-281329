import React from "react";

/**
 * PUBLIC_INTERFACE
 * An accessible lock icon using inline SVG.
 */
const LockIcon = ({ size = 18, title = "Security lock icon", color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>{title}</title>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1.6" />
  </svg>
);

export default LockIcon;
