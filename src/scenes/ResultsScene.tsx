import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {PhoneFrame} from '../components/PhoneFrame';
import {ResultsCard} from '../components/ResultsCard';
import {colors, fontFamily} from '../styles/theme';

export const ResultsScene: React.FC<{
  eyebrow?: string;
  title?: string;
  answer?: string;
  correctLabel?: string;
  pronunciationLabel?: string;
  clarityLabel?: string;
  confidenceLabel?: string;
  confidenceValue?: string;
  tip?: string;
}> = ({eyebrow = 'AI feedback', title = 'Great answer.', answer, correctLabel, pronunciationLabel, clarityLabel, confidenceLabel, confidenceValue, tip = 'Your pronunciation was clear. Keep the same pace during your interview.'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rise = spring({frame, fps, config: {damping: 19, stiffness: 100, mass: .85}});
  const opacity = interpolate(frame, [0, 10, 91, 106], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity}}>
      <PhoneFrame style={{position: 'absolute', left: 200, top: 292}}>
        <div style={{padding: '132px 42px 50px'}}>
          <div style={{fontSize: 23, color: colors.red, fontWeight: 850, letterSpacing: 1.4, textTransform: 'uppercase'}}>{eyebrow}</div>
          <div style={{fontSize: 46, color: colors.navy, fontWeight: 850, margin: '14px 0 34px'}}>{title}</div>
          <div style={{transform: `translateY(${interpolate(rise,[0,1],[120,0])}px)`, opacity: rise}}><ResultsCard answer={answer} correctLabel={correctLabel} pronunciationLabel={pronunciationLabel} clarityLabel={clarityLabel} confidenceLabel={confidenceLabel} confidenceValue={confidenceValue} /></div>
          <div style={{marginTop: 32, borderRadius: 28, background: '#F2F4F8', color: colors.muted, padding: '24px 26px', fontSize: 22, lineHeight: 1.45}}>{tip}</div>
        </div>
      </PhoneFrame>
    </AbsoluteFill>
  );
};
