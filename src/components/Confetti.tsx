import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles/theme';

const particles = [
  [86,18,9,0],[196,4,7,8],[304,24,10,3],[426,7,8,11],[555,20,10,5],[672,2,7,14],[788,25,9,7],[914,8,8,2],
  [134,42,8,12],[252,28,10,1],[369,48,7,9],[493,31,9,4],[615,51,8,13],[742,35,10,6],[860,46,7,10],[978,29,9,0],
] as const;
const palette = [colors.red, colors.navy, '#D7A82B', colors.green];

export const Confetti: React.FC = () => {
  const frame = useCurrentFrame();
  return <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>{particles.map(([x, delay, size, phase], index) => {
    const local = frame - delay;
    const y = interpolate(local, [0, 54], [-120, 980 + phase * 9], {extrapolateLeft: 'clamp', extrapolateRight: 'extend'});
    const opacity = interpolate(local, [0, 5, 42, 58], [0, 1, 0.84, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
    const sway = Math.sin((local + phase) * 0.15) * 42;
    return <div key={index} style={{position: 'absolute', left: x + sway, top: y, width: size * 1.35, height: size * 3.4, borderRadius: index % 3 === 0 ? '50%' : 3, background: palette[index % palette.length], transform: `rotate(${local * (4 + index % 6)}deg)`, opacity}} />;
  })}</div>;
};
