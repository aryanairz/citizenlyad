import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles/theme';

export const TapIndicator: React.FC<{startFrame?: number}> = ({startFrame = 0}) => {
  const frame = useCurrentFrame() - startFrame;
  const scale = interpolate(frame, [0, 8, 18, 30], [0.4, 1, 1.45, 1.8], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const opacity = interpolate(frame, [0, 7, 20, 30], [0, 0.75, 0.35, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  if (frame < 0) return null;
  return <div style={{position: 'absolute', right: 50, top: '50%', width: 48, height: 48, marginTop: -24, borderRadius: '50%', border: `4px solid ${colors.red}`, transform: `scale(${scale})`, opacity}} />;
};
