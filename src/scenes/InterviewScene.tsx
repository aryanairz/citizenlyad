import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {OfficerAvatar} from '../components/OfficerAvatar';
import {PhoneFrame} from '../components/PhoneFrame';
import {SpeakerButton} from '../components/SpeakerButton';
import {colors, fontFamily} from '../styles/theme';

export const InterviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 20, stiffness: 120}});
  const opacity = interpolate(frame, [0, 10, 88, 102], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  return (
    <AbsoluteFill style={{background: colors.warm, fontFamily, opacity}}>
      <PhoneFrame style={{position: 'absolute', left: 200, top: 292, transform: `translateY(${interpolate(enter,[0,1],[35,0])}px)`}}>
        <div style={{padding: '120px 54px 60px'}}>
          <div style={{margin: '18px 0 28px', display: 'flex', alignItems: 'center', gap: 24}}><OfficerAvatar size={142} /><div><div style={{fontSize: 22, color: colors.muted, fontWeight: 650}}>Practice officer</div><div style={{fontSize: 31, color: colors.navy, fontWeight: 820, marginTop: 5}}>Question 4 of 10</div></div></div>
          <div style={{background: '#F5F6F9', borderRadius: 34, padding: '32px 32px 28px', border: `2px solid ${colors.line}`}}>
            <div style={{fontSize: 22, color: colors.muted, fontWeight: 750, marginBottom: 14}}>IN ENGLISH</div>
            <div style={{fontSize: 43, lineHeight: 1.14, letterSpacing: -1.2, color: colors.navy, fontWeight: 820}}>What is the supreme law of the land?</div>
          </div>
          <div style={{padding: '28px 16px 0'}}><div style={{fontSize: 22, color: colors.red, fontWeight: 750, marginBottom: 11}}>FRANÇAIS</div><div style={{fontSize: 34, lineHeight: 1.28, color: colors.navy, fontWeight: 680}}>Quelle est la loi suprême du pays&nbsp;?</div></div>
          <div style={{height: 2, background: colors.line, margin: '33px 0 30px'}} />
          <SpeakerButton />
        </div>
      </PhoneFrame>
    </AbsoluteFill>
  );
};
