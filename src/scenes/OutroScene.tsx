import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CitizenlyLogo} from '../components/CitizenlyLogo';
import {Confetti} from '../components/Confetti';
import {PhoneFrame} from '../components/PhoneFrame';
import {colors, fontFamily} from '../styles/theme';

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const move = interpolate(frame, [0, 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  const logo = spring({frame: frame - 18, fps, config: {damping: 19, stiffness: 105}});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 90, top: 220, width: 900, height: 1120, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,30,58,.085),rgba(27,42,74,.025) 43%,transparent 70%)'}} />
      <Confetti />
      <div style={{position: 'absolute', left: 130, right: 170, top: 180, display: 'flex', justifyContent: 'center', opacity: logo, transform: `translateY(${interpolate(logo,[0,1],[-28,0])}px)`, filter: 'drop-shadow(0 12px 22px rgba(27,42,74,.09))'}}>
        <CitizenlyLogo width={600} />
      </div>
      <PhoneFrame width={680} height={1260} style={{position: 'absolute', left: 200, top: interpolate(move,[0,1],[292,560]), transform: `scale(${interpolate(move,[0,1],[1,.72])})`, transformOrigin: 'top center'}}>
        <div style={{padding: '176px 62px 72px', textAlign: 'center'}}>
          <div style={{margin: '12px auto 43px', width: 138, height: 138, borderRadius: 46, background: '#E7F7F0', display: 'grid', placeItems: 'center', boxShadow: '0 16px 38px rgba(36,150,109,.14)'}}>
            <svg width="72" height="72" viewBox="0 0 64 64"><path d="M17 33l10 10 21-25" fill="none" stroke={colors.green} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{fontSize: 28, color: colors.red, fontWeight: 850, textTransform: 'uppercase', letterSpacing: 2.3}}>Practice complete</div>
          <div style={{fontSize: 61, lineHeight: 1.06, letterSpacing: -1.8, color: colors.navy, fontWeight: 860, marginTop: 24}}>Ready for your<br />interview.</div>
          <div style={{height: 2, background: colors.line, margin: '48px 12px 38px'}} />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18}}>
            <span style={{fontSize: 42, color: colors.red, fontWeight: 880}}>96%</span>
            <span style={{fontSize: 27, color: colors.muted, fontWeight: 720}}>pronunciation</span>
          </div>
        </div>
      </PhoneFrame>
    </AbsoluteFill>
  );
};
