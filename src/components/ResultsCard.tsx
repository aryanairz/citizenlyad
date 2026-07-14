import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../styles/theme';

export const ResultsCard: React.FC<{
  answer?: string;
  correctLabel?: string;
  pronunciationLabel?: string;
  clarityLabel?: string;
  confidenceLabel?: string;
  confidenceValue?: string;
}> = ({answer = 'La Constitution', correctLabel = 'Correct answer', pronunciationLabel = 'Pronunciation', clarityLabel = 'Clear & confident', confidenceLabel = 'Confidence', confidenceValue = 'Excellent'}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [12, 58], [0, 0.96], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const score = Math.round(progress * 100);
  const circumference = 2 * Math.PI * 70;
  return (
    <div style={{background: '#fff', border: `2px solid ${colors.line}`, borderRadius: 42, padding: '38px 38px 34px', boxShadow: '0 24px 60px rgba(27,42,74,.13)', position: 'relative'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        <div style={{width: 62, height: 62, borderRadius: 22, background: '#E8F7F1', display: 'grid', placeItems: 'center', color: colors.green, fontSize: 36, fontWeight: 900}}>✓</div>
        <div><div style={{fontSize: 22, color: colors.green, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.6}}>{correctLabel}</div><div style={{fontSize: 39, color: colors.navy, fontWeight: 800, marginTop: 4}}>{answer}</div></div>
      </div>
      <div style={{height: 2, background: colors.line, margin: '30px 0'}} />
      <div style={{display: 'flex', alignItems: 'center', gap: 30}}>
        <div style={{width: 166, height: 166, position: 'relative'}}>
          <svg width="166" height="166" viewBox="0 0 166 166" style={{transform: 'rotate(-90deg)'}}>
            <circle cx="83" cy="83" r="70" fill="none" stroke="#EEF0F4" strokeWidth="14" />
            <circle cx="83" cy="83" r="70" fill="none" stroke={colors.red} strokeWidth="14" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference * (1-progress)} />
          </svg>
          <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: colors.navy, fontWeight: 850, fontSize: 40}}>{score}%</div>
        </div>
        <div style={{flex: 1}}>
          <div style={{fontSize: 22, color: colors.muted, fontWeight: 650}}>{pronunciationLabel}</div>
          <div style={{fontSize: 32, color: colors.navy, fontWeight: 800, marginTop: 5}}>{clarityLabel}</div>
          <div style={{fontSize: 22, color: colors.muted, fontWeight: 650, marginTop: 22}}>{confidenceLabel}</div>
          <div style={{fontSize: 31, color: colors.green, fontWeight: 850, marginTop: 5}}>{confidenceValue}</div>
        </div>
      </div>
    </div>
  );
};
