import React from "react";

/**
 * PUBLIC_INTERFACE
 * An accessible user icon using inline SVG.
 */
const UserIcon = ({ size = 18, title = "User icon", color = "currentColor" }) => (
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
    <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default UserIcon;
