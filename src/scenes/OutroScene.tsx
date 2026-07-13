import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CitizenlyLogo} from '../components/CitizenlyLogo';
import {Confetti} from '../components/Confetti';
import {PhoneFrame} from '../components/PhoneFrame';
import {colors, fontFamily} from '../styles/theme';

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 20, stiffness: 90}});
  const copy = spring({frame: frame - 24, fps, config: {damping: 19, stiffness: 105}});
  const logo = interpolate(frame, [48, 67], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity: interpolate(frame,[0,10],[0,1],{extrapolateRight:'clamp'}), overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 120, top: 120, width: 840, height: 900, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,30,58,.075),transparent 68%)'}} />
      <Confetti />
      <PhoneFrame width={520} height={960} style={{position: 'absolute', left: 280, top: interpolate(enter,[0,1],[570,215]), transform: `scale(${interpolate(enter,[0,1],[.94,.88])})`, transformOrigin: 'top center'}}>
        <div style={{padding: '145px 48px', textAlign: 'center'}}>
          <div style={{margin: '20px auto 48px', width: 112, height: 112, borderRadius: 38, background: '#E7F7F0', display: 'grid', placeItems: 'center', color: colors.green, fontSize: 62, fontWeight: 900}}>✓</div>
          <div style={{fontSize: 25, color: colors.red, fontWeight: 850, textTransform: 'uppercase', letterSpacing: 1.5}}>Practice complete</div>
          <div style={{fontSize: 46, lineHeight: 1.12, color: colors.navy, fontWeight: 850, marginTop: 18}}>You’re making<br />real progress.</div>
        </div>
      </PhoneFrame>
      <div style={{position: 'absolute', left: 110, right: 170, top: 1180, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', opacity: copy, transform: `translateY(${interpolate(copy,[0,1],[40,0])}px)`}}>
        <div style={{fontSize: 60, lineHeight: 1.08, letterSpacing: -2, color: colors.navy, fontWeight: 880}}>Ready for your interview.</div>
        <div style={{marginTop: 46, opacity: logo}}><CitizenlyLogo width={420} /></div>
        <div style={{marginTop: 22, fontSize: 28, color: colors.muted, fontWeight: 700, letterSpacing: .2}}>Study Together. Become a Citizen.</div>
      </div>
    </AbsoluteFill>
  );
};
