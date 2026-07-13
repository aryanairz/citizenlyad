import React from 'react';
import {colors, shadow} from '../styles/theme';

export const PhoneFrame: React.FC<{
  children: React.ReactNode;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}> = ({children, width = 680, height = 1260, style}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 88,
      padding: 13,
      boxSizing: 'border-box',
      background: 'linear-gradient(145deg,#596071 0%,#171B25 36%,#3C4250 100%)',
      boxShadow: shadow,
      position: 'relative',
      ...style,
    }}
  >
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 76,
        overflow: 'hidden',
        position: 'relative',
        background: colors.white,
        border: '4px solid #10131B',
        boxSizing: 'border-box',
      }}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          zIndex: 20,
          top: 17,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 194,
          height: 54,
          borderRadius: 30,
          background: '#11131A',
          boxShadow: 'inset 0 -2px 4px rgba(255,255,255,.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          zIndex: 20,
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 220,
          height: 9,
          borderRadius: 8,
          background: colors.navy,
          opacity: 0.72,
        }}
      />
    </div>
    <div style={{position: 'absolute', right: -5, top: 245, width: 5, height: 160, borderRadius: 4, background: '#303643'}} />
  </div>
);
