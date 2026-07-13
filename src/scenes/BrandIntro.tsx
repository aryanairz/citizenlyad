import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CitizenlyIcon, CitizenlyLogo} from '../components/CitizenlyLogo';
import {colors, fontFamily} from '../styles/theme';

export const BrandIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 18, stiffness: 105, mass: 0.8}});
  const logoReveal = interpolate(frame, [16, 33], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const exit = interpolate(frame, [44, 58], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity: exit, alignItems: 'center', justifyContent: 'center'}}>
      <div style={{position: 'absolute', width: 650, height: 650, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,30,58,.09),rgba(255,255,255,0) 68%)'}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateY(${interpolate(enter,[0,1],[28,0])}px) scale(${interpolate(enter,[0,1],[.88,1])})`, opacity: enter}}>
        <div style={{filter: 'drop-shadow(0 22px 28px rgba(27,42,74,.14))'}}><CitizenlyIcon size={228} /></div>
        <div style={{marginTop: 38, clipPath: `inset(0 ${100-logoReveal*100}% 0 0)`, opacity: logoReveal}}><CitizenlyLogo width={505} /></div>
      </div>
    </AbsoluteFill>
  );
};
