import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles/theme';

const amplitudes = [0.42,0.68,0.51,0.88,0.6,0.75,0.95,0.48,0.72,0.56,0.9,0.64,0.82,0.5,0.76,0.93,0.58,0.84,0.45,0.7];

export const AnimatedWaveform: React.FC<{collapse?: number}> = ({collapse = 1}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{height: 145, display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center', transform: `scaleY(${collapse})`}}>
      {amplitudes.map((amplitude, index) => {
        const movement = (Math.sin(frame * 0.27 + index * 0.78) + 1) / 2;
        const height = interpolate(movement, [0, 1], [26, 126 * amplitude]);
        return <div key={index} style={{width: 13, height, borderRadius: 20, background: index % 5 === 0 ? colors.red : colors.navy, opacity: 0.92}} />;
      })}
    </div>
  );
};
