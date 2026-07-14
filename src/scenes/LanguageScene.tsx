import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {LanguageSelector} from '../components/LanguageSelector';
import {PhoneFrame} from '../components/PhoneFrame';
import {colors, fontFamily} from '../styles/theme';

export const LanguageScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const settle = spring({frame, fps, config: {damping: 19, stiffness: 90, mass: 0.85}});
  const opacity = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(settle, [0, 1], [1320, 292]);
  const rotation = interpolate(settle, [0, 1], [-4.5, 0]);
  const exit = interpolate(frame, [52, 66], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity: opacity * exit, overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 110, top: 250, width: 780, height: 900, borderRadius: '50%', background: 'radial-gradient(circle,rgba(27,42,74,.07),transparent 67%)'}} />
      <PhoneFrame style={{position: 'absolute', left: 200, top: y, transform: `rotate(${rotation}deg)`}}><LanguageSelector /></PhoneFrame>
    </AbsoluteFill>
  );
};
