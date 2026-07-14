import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles/theme';

export const SpeakerButton: React.FC<{label?: string}> = ({label = 'Listen'}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
      <div style={{width: 82, height: 82, borderRadius: 28, background: colors.navy, display: 'grid', placeItems: 'center', boxShadow: '0 12px 28px rgba(27,42,74,.22)'}}>
        <svg width="44" height="44" viewBox="0 0 48 48">
          <path d="M8 20v9h8l10 8V11l-10 9z" fill="#fff" />
        </svg>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: 6, height: 72}}>
        {[0, 1, 2].map((i) => {
          const phase = (frame - i * 5) % 30;
          const opacity = interpolate(phase, [0, 9, 24, 30], [0.15, 0.85, 0.2, 0.15]);
          return <div key={i} style={{width: 5, height: 28 + i * 15, borderRadius: 8, background: colors.red, opacity}} />;
        })}
      </div>
      <span style={{fontSize: 24, fontWeight: 700, color: colors.navy}}>{label}</span>
    </div>
  );
};
