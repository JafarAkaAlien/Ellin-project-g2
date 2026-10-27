// Kiçik SVG ikonlar. Hər biri ayrıca komponentdir, rəngi CSS-dən (currentColor) alır.
const props = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
}

export const TargetIcon = () => (
  <svg {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

export const EyeIcon = () => (
  <svg {...props}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const AwardIcon = () => (
  <svg {...props}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
  </svg>
)

export const UsersIcon = () => (
  <svg {...props}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
    <path d="M16 4.5a4 4 0 0 1 0 7" />
    <path d="M22 21v-1a6 6 0 0 0-4-5.6" />
  </svg>
)
