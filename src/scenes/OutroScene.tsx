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
  const copy = spring({frame: frame - 20, fps, config: {damping: 19, stiffness: 105}});
  const logo = interpolate(frame, [42, 62], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity: interpolate(frame,[0,10],[0,1],{extrapolateRight:'clamp'}), overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 90, top: 50, width: 900, height: 980, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,30,58,.085),rgba(27,42,74,.025) 43%,transparent 70%)'}} />
      <Confetti />
      <PhoneFrame width={480} height={870} style={{position: 'absolute', left: 300, top: interpolate(enter,[0,1],[520,150]), transform: `scale(${interpolate(enter,[0,1],[.9,.82])})`, transformOrigin: 'top center'}}>
        <div style={{padding: '132px 42px 54px', textAlign: 'center'}}>
          <div style={{margin: '10px auto 35px', width: 104, height: 104, borderRadius: 36, background: '#E7F7F0', display: 'grid', placeItems: 'center', boxShadow: '0 14px 34px rgba(36,150,109,.14)'}}>
            <svg width="55" height="55" viewBox="0 0 64 64"><path d="M17 33l10 10 21-25" fill="none" stroke={colors.green} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{fontSize: 22, color: colors.red, fontWeight: 850, textTransform: 'uppercase', letterSpacing: 1.8}}>Practice complete</div>
          <div style={{fontSize: 42, lineHeight: 1.12, color: colors.navy, fontWeight: 850, marginTop: 16}}>You’re making<br />real progress.</div>
          <div style={{height: 2, background: colors.line, margin: '34px 8px 28px'}} />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14}}>
            <span style={{fontSize: 31, color: colors.red, fontWeight: 880}}>96%</span>
            <span style={{fontSize: 20, color: colors.muted, fontWeight: 720}}>pronunciation</span>
          </div>
        </div>
      </PhoneFrame>
      <div style={{position: 'absolute', left: 130, right: 180, top: 930, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', opacity: copy, transform: `translateY(${interpolate(copy,[0,1],[42,0])}px)`}}>
        <div style={{width: 66, height: 7, borderRadius: 8, background: colors.red, marginBottom: 30}} />
        <div style={{fontSize: 72, lineHeight: 1.02, letterSpacing: -2.8, color: colors.navy, fontWeight: 880}}>Ready for your<br />interview.</div>
        <div style={{marginTop: 42, opacity: logo, filter: 'drop-shadow(0 10px 18px rgba(27,42,74,.08))'}}><CitizenlyLogo width={535} /></div>
        <div style={{marginTop: 10, fontSize: 27, color: colors.muted, fontWeight: 700, letterSpacing: .2}}>Study Together. Become a Citizen.</div>
      </div>
    </AbsoluteFill>
  );
};
