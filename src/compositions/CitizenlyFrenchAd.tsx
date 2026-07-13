import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {InterviewScene} from '../scenes/InterviewScene';
import {LanguageScene} from '../scenes/LanguageScene';
import {ListeningScene} from '../scenes/ListeningScene';
import {OutroScene} from '../scenes/OutroScene';
import {ResultsScene} from '../scenes/ResultsScene';
import {colors} from '../styles/theme';

export const CitizenlyFrenchAd: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: colors.warm}}>
    <Sequence durationInFrames={66} premountFor={30}><LanguageScene /></Sequence>
    <Sequence from={54} durationInFrames={102} premountFor={30}><InterviewScene /></Sequence>
    <Sequence from={144} durationInFrames={86} premountFor={30}><ListeningScene /></Sequence>
    <Sequence from={218} durationInFrames={106} premountFor={30}><ResultsScene /></Sequence>
    <Sequence from={308} durationInFrames={142} premountFor={30}><OutroScene /></Sequence>
  </AbsoluteFill>
);
