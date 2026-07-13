import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AnimatedWaveform} from '../components/AnimatedWaveform';
import {PhoneFrame} from '../components/PhoneFrame';
import {colors, fontFamily} from '../styles/theme';

export const ListeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const answer = spring({frame: frame - 22, fps, config: {damping: 18, stiffness: 110}});
  const opacity = interpolate(frame, [0, 9, 69, 86], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  const pulse = 1 + Math.sin(frame * 0.24) * 0.04;
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity}}>
      <PhoneFrame style={{position: 'absolute', left: 160, top: 292}}>
        <div style={{padding: '145px 54px 60px', textAlign: 'center'}}>
          <div style={{fontSize: 24, color: colors.red, fontWeight: 850, letterSpacing: 1.4, textTransform: 'uppercase'}}>Your turn</div>
          <div style={{fontSize: 44, color: colors.navy, fontWeight: 830, marginTop: 20}}>Answer in French</div>
          <div style={{margin: '85px auto 60px', width: 154, height: 154, borderRadius: '50%', background: colors.red, display: 'grid', placeItems: 'center', transform: `scale(${pulse})`, boxShadow: `0 0 0 ${20 + Math.sin(frame*.2)*7}px rgba(196,30,58,.10), 0 18px 45px rgba(196,30,58,.28)`}}>
            <svg width="68" height="68" viewBox="0 0 64 64"><rect x="23" y="8" width="18" height="34" rx="9" fill="#fff"/><path d="M15 31c0 12 7 19 17 19s17-7 17-19M32 50v8M23 58h18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></svg>
          </div>
          <div style={{fontSize: 25, color: colors.muted, fontWeight: 750}}>Listening…</div>
          <AnimatedWaveform />
          <div style={{marginTop: 28, opacity: answer, transform: `translateY(${interpolate(answer,[0,1],[24,0])}px)`, fontSize: 43, color: colors.navy, fontWeight: 830}}>La Constitution.</div>
        </div>
      </PhoneFrame>
    </AbsoluteFill>
  );
};
