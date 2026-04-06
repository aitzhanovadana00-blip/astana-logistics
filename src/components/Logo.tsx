export default function Logo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.7)}
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-main" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A2463" />
          <stop offset="100%" stopColor="#3E92CC" />
        </linearGradient>
        <linearGradient id="logo-letters" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E92CC" />
          <stop offset="100%" stopColor="#6BB5E0" />
        </linearGradient>
      </defs>

      {/* === КУЗОВ === */}
      <rect x="8" y="22" width="85" height="52" rx="4" stroke="url(#logo-main)" strokeWidth="3.5" fill="none" />

      {/* === КАБИНА === */}
      <path
        d="M93 38 L125 38 Q135 38, 135 48 L135 74 L93 74 Z"
        stroke="url(#logo-main)" strokeWidth="3.5" fill="none" strokeLinejoin="round"
      />

      {/* Окно кабины */}
      <path
        d="M99 43 L118 43 Q127 43, 127 52 L127 62 L99 62 Z"
        stroke="url(#logo-letters)" strokeWidth="2" fill="none" opacity="0.5"
      />

      {/* === КОЛЁСА === */}
      <circle cx="38" cy="80" r="12" stroke="url(#logo-main)" strokeWidth="3.5" fill="none" />
      <circle cx="38" cy="80" r="4" fill="#3E92CC" />
      <circle cx="118" cy="80" r="12" stroke="url(#logo-main)" strokeWidth="3.5" fill="none" />
      <circle cx="118" cy="80" r="4" fill="#3E92CC" />

      {/* === Шасси между колёсами === */}
      <line x1="50" y1="74" x2="106" y2="74" stroke="url(#logo-main)" strokeWidth="2" />

      {/* === БУКВА A на кузове === */}
      <line x1="30" y1="65" x2="42" y2="32" stroke="#3E92CC" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="42" y1="32" x2="54" y2="65" stroke="#3E92CC" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="34" y1="53" x2="50" y2="53" stroke="#3E92CC" strokeWidth="2.5" strokeLinecap="round" />

      {/* === БУКВА L на кузове === */}
      <line x1="62" y1="32" x2="62" y2="65" stroke="#3E92CC" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="62" y1="65" x2="80" y2="65" stroke="#3E92CC" strokeWidth="3.5" strokeLinecap="round" />

      {/* === Линии скорости === */}
      <line x1="0" y1="35" x2="6" y2="35" stroke="url(#logo-letters)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="0" y1="48" x2="6" y2="48" stroke="url(#logo-letters)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <line x1="0" y1="61" x2="6" y2="61" stroke="url(#logo-letters)" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}
