import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {InterviewScene} from '../scenes/InterviewScene';
import {LanguageScene} from '../scenes/LanguageScene';
import {ListeningScene} from '../scenes/ListeningScene';
import {OutroScene} from '../scenes/OutroScene';
import {ResultsScene} from '../scenes/ResultsScene';
import {colors} from '../styles/theme';

export type LanguageAdConfig = {
  key: string;
  compositionId: string;
  englishName: string;
  nativeName: string;
  translationLabel: string;
  translatedQuestion: string;
};

export const languageAdConfigs: readonly LanguageAdConfig[] = [
  {
    key: 'german',
    compositionId: 'CitizenlyGermanAd',
    englishName: 'German',
    nativeName: 'Deutsch',
    translationLabel: 'DEUTSCH',
    translatedQuestion: 'Was ist die Hauptstadt der Vereinigten Staaten?',
  },
  {
    key: 'dutch',
    compositionId: 'CitizenlyDutchAd',
    englishName: 'Dutch',
    nativeName: 'Nederlands',
    translationLabel: 'NEDERLANDS',
    translatedQuestion: 'Wat is de hoofdstad van de Verenigde Staten?',
  },
  {
    key: 'swedish',
    compositionId: 'CitizenlySwedishAd',
    englishName: 'Swedish',
    nativeName: 'Svenska',
    translationLabel: 'SVENSKA',
    translatedQuestion: 'Vad är USA:s huvudstad?',
  },
  {
    key: 'norwegian',
    compositionId: 'CitizenlyNorwegianAd',
    englishName: 'Norwegian',
    nativeName: 'Norsk',
    translationLabel: 'NORSK',
    translatedQuestion: 'Hva er hovedstaden i USA?',
  },
  {
    key: 'danish',
    compositionId: 'CitizenlyDanishAd',
    englishName: 'Danish',
    nativeName: 'Dansk',
    translationLabel: 'DANSK',
    translatedQuestion: 'Hvad er hovedstaden i USA?',
  },
  {
    key: 'italian',
    compositionId: 'CitizenlyItalianAd',
    englishName: 'Italian',
    nativeName: 'Italiano',
    translationLabel: 'ITALIANO',
    translatedQuestion: 'Qual è la capitale degli Stati Uniti?',
  },
  {
    key: 'portuguese',
    compositionId: 'CitizenlyPortugueseAd',
    englishName: 'Portuguese',
    nativeName: 'Português',
    translationLabel: 'PORTUGUÊS',
    translatedQuestion: 'Qual é a capital dos Estados Unidos?',
  },
  {
    key: 'catalan',
    compositionId: 'CitizenlyCatalanAd',
    englishName: 'Catalan',
    nativeName: 'Català',
    translationLabel: 'CATALÀ',
    translatedQuestion: 'Quina és la capital dels Estats Units?',
  },
  {
    key: 'indonesian',
    compositionId: 'CitizenlyIndonesianAd',
    englishName: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    translationLabel: 'BAHASA INDONESIA',
    translatedQuestion: 'Apa ibu kota Amerika Serikat?',
  },
  {
    key: 'tagalog',
    compositionId: 'CitizenlyTagalogAd',
    englishName: 'Tagalog',
    nativeName: 'Tagalog',
    translationLabel: 'TAGALOG',
    translatedQuestion: 'Ano ang kabisera ng Estados Unidos?',
  },
  {
    key: 'finnish',
    compositionId: 'CitizenlyFinnishAd',
    englishName: 'Finnish',
    nativeName: 'Suomi',
    translationLabel: 'SUOMI',
    translatedQuestion: 'Mikä on Yhdysvaltojen pääkaupunki?',
  },
  {
    key: 'croatian',
    compositionId: 'CitizenlyCroatianAd',
    englishName: 'Croatian',
    nativeName: 'Hrvatski',
    translationLabel: 'HRVATSKI',
    translatedQuestion: 'Koji je glavni grad Sjedinjenih Američkih Država?',
  },
  {
    key: 'bosnian',
    compositionId: 'CitizenlyBosnianAd',
    englishName: 'Bosnian',
    nativeName: 'Bosanski',
    translationLabel: 'BOSANSKI',
    translatedQuestion: 'Koji je glavni grad Sjedinjenih Američkih Država?',
  },
] as const;

export const CitizenlyLanguageAd: React.FC<{languageKey?: string}> = ({languageKey = 'german'}) => {
  const config = languageAdConfigs.find((candidate) => candidate.key === languageKey) ?? languageAdConfigs[0];
  const selectorLanguages = ['English', 'Español', 'Français', config.nativeName];

  return (
    <AbsoluteFill style={{backgroundColor: colors.warm}}>
      <Sequence durationInFrames={66} premountFor={30}>
        <LanguageScene selectedLanguage={config.nativeName} languages={selectorLanguages} />
      </Sequence>
      <Sequence from={54} durationInFrames={102} premountFor={30}>
        <InterviewScene
          question="What is the capital of the United States?"
          translation={config.translatedQuestion}
          translationLabel={config.translationLabel}
        />
      </Sequence>
      <Sequence from={144} durationInFrames={74} premountFor={30}>
        <ListeningScene
          title={`Answer in ${config.englishName}`}
          firstAnswerPart="Washington,"
          secondAnswerPart="D.C."
        />
      </Sequence>
      <Sequence from={204} durationInFrames={106} premountFor={30}>
        <ResultsScene answer="Washington, D.C." />
      </Sequence>
      <Sequence from={294} durationInFrames={156} premountFor={30}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
