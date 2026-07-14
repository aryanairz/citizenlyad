import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../styles/theme';
import {TapIndicator} from './TapIndicator';

const languages = ['English', 'Español', 'Français', 'हिन्दी'];

export const LanguageSelector: React.FC<{
  selectedLanguage?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  hint?: string;
}> = ({selectedLanguage = 'Français', eyebrow = 'Welcome to Citizenly', title = <>Choose your<br />language</>, hint = 'You can change this anytime in Settings.'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const selected = frame >= 32;
  const settle = spring({frame: frame - 32, fps, config: {damping: 18, stiffness: 150}});
  return (
    <div style={{padding: '145px 58px 60px'}}>
      <div style={{fontSize: 25, color: colors.red, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase'}}>{eyebrow}</div>
      <div style={{fontSize: 54, lineHeight: 1.08, color: colors.navy, fontWeight: 800, marginTop: 22, marginBottom: 46}}>{title}</div>
      <div style={{display: 'grid', gap: 18}}>
        {languages.map((language) => {
          const isSelected = language === selectedLanguage;
          const fade = selected && !isSelected ? interpolate(settle, [0, 1], [1, 0.24]) : 1;
          return (
            <div key={language} style={{height: 104, borderRadius: 28, border: `2px solid ${isSelected ? colors.red : colors.line}`, background: isSelected && selected ? '#FFF2F4' : colors.white, display: 'flex', alignItems: 'center', padding: '0 30px', boxSizing: 'border-box', position: 'relative', opacity: fade, transform: isSelected && selected ? `scale(${interpolate(settle,[0,1],[1,1.025])})` : undefined}}>
              <span style={{fontSize: 31, color: colors.navy, fontWeight: isSelected ? 800 : 650}}>{language}</span>
              {isSelected && selected ? <div style={{marginLeft: 'auto', width: 42, height: 42, borderRadius: '50%', background: colors.red, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 27, fontWeight: 900}}>✓</div> : null}
              {isSelected ? <TapIndicator startFrame={17} /> : null}
            </div>
          );
        })}
      </div>
      <div style={{fontSize: 22, color: colors.muted, marginTop: 38, lineHeight: 1.45}}>{hint}</div>
    </div>
  );
};
