import React from "react";

/**
 * PUBLIC_INTERFACE
 * An accessible cloud icon using inline SVG.
 */
const CloudIcon = ({ size = 18, title = "Cloud icon", color = "currentColor" }) => (
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
    <path d="M20 17a4 4 0 0 0-3.5-3.96A5.5 5.5 0 0 0 6 11.5 4.5 4.5 0 0 0 6.5 20h11A3.5 3.5 0 0 0 20 17z" />
  </svg>
);

export default CloudIcon;
