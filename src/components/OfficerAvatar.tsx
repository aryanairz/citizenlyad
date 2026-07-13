import React from 'react';
import {colors} from '../styles/theme';

export const OfficerAvatar: React.FC<{size?: number}> = ({size = 150}) => (
  <svg width={size} height={size} viewBox="0 0 160 160" aria-label="Abstract USCIS officer avatar">
    <circle cx="80" cy="80" r="78" fill="#EEF1F6" />
    <path d="M25 145c5-34 26-50 55-50s50 16 55 50" fill={colors.navy} />
    <path d="M59 93h42l-7 25-14 9-14-9z" fill="#fff" />
    <ellipse cx="80" cy="67" rx="34" ry="40" fill="#DDAF8C" />
    <path d="M46 64c0-32 18-45 38-45 25 0 36 18 34 47-8-6-16-16-20-25-11 14-29 21-52 23z" fill="#30384B" />
    <circle cx="68" cy="69" r="3" fill="#273047" />
    <circle cx="94" cy="69" r="3" fill="#273047" />
    <path d="M72 84c6 5 12 5 18 0" fill="none" stroke="#9A5A52" strokeWidth="3" strokeLinecap="round" />
    <path d="M49 126l18 19H43zM111 126l-18 19h24z" fill={colors.red} opacity=".9" />
  </svg>
);
