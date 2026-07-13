import type {CSSProperties} from 'react';

export const colors = {
  navy: '#1B2A4A',
  red: '#C41E3A',
  white: '#FFFFFF',
  warm: '#F7F6F2',
  ink: '#15213A',
  muted: '#68738A',
  line: '#E4E7ED',
  green: '#24966D',
} as const;

export const fontFamily =
  '"DM Sans", Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const fill: CSSProperties = {position: 'absolute', inset: 0};

export const shadow =
  '0 38px 90px rgba(27,42,74,.16), 0 8px 24px rgba(27,42,74,.10)';
