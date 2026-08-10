import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {InterviewScene} from '../scenes/InterviewScene';
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
  englishQuestion: string;
  translatedQuestion: string;
  answer: string;
  firstAnswerPart: string;
  secondAnswerPart?: string;
  splitDelayFrames?: number;
};

export const languageAdConfigs: readonly LanguageAdConfig[] = [
  {
    key: 'german',
    compositionId: 'CitizenlyGermanAd',
    englishName: 'German',
    nativeName: 'Deutsch',
    translationLabel: 'DEUTSCH',
    englishQuestion: 'Who is the President of the United States now?',
    translatedQuestion: 'Wer ist derzeit Präsident der Vereinigten Staaten?',
    answer: 'Donald Trump',
    firstAnswerPart: 'Donald',
    secondAnswerPart: 'Trump',
  },
  {
    key: 'dutch',
    compositionId: 'CitizenlyDutchAd',
    englishName: 'Dutch',
    nativeName: 'Nederlands',
    translationLabel: 'NEDERLANDS',
    englishQuestion: 'How many stars are on the flag?',
    translatedQuestion: 'Hoeveel sterren staan er op de vlag?',
    answer: 'Fifty',
    firstAnswerPart: 'Fifty',
  },
  {
    key: 'swedish',
    compositionId: 'CitizenlySwedishAd',
    englishName: 'Swedish',
    nativeName: 'Svenska',
    translationLabel: 'SVENSKA',
    englishQuestion: 'Who was the first President?',
    translatedQuestion: 'Vem var den första presidenten?',
    answer: 'George Washington',
    firstAnswerPart: 'George',
    secondAnswerPart: 'Washington',
  },
  {
    key: 'norwegian',
    compositionId: 'CitizenlyNorwegianAd',
    englishName: 'Norwegian',
    nativeName: 'Norsk',
    translationLabel: 'NORSK',
    englishQuestion: 'How many U.S. senators are there?',
    translatedQuestion: 'Hvor mange senatorer er det i USA?',
    answer: 'One hundred',
    firstAnswerPart: 'One hundred',
  },
  {
    key: 'danish',
    compositionId: 'CitizenlyDanishAd',
    englishName: 'Danish',
    nativeName: 'Dansk',
    translationLabel: 'DANSK',
    englishQuestion: 'How many amendments does the Constitution have?',
    translatedQuestion: "Hvor mange forfatningstillæg har USA's forfatning?",
    answer: 'Twenty-seven',
    firstAnswerPart: 'Twenty-seven',
  },
  {
    key: 'italian',
    compositionId: 'CitizenlyItalianAd',
    englishName: 'Italian',
    nativeName: 'Italiano',
    translationLabel: 'ITALIANO',
    englishQuestion: 'When do we celebrate Independence Day?',
    translatedQuestion: "Quando celebriamo il Giorno dell'Indipendenza?",
    answer: 'July 4',
    firstAnswerPart: 'July 4',
  },
  {
    key: 'portuguese',
    compositionId: 'CitizenlyPortugueseAd',
    englishName: 'Portuguese',
    nativeName: 'Português',
    translationLabel: 'PORTUGUÊS',
    englishQuestion: 'What is the highest court in the United States?',
    translatedQuestion: 'Qual é a mais alta corte dos Estados Unidos?',
    answer: 'Supreme Court',
    firstAnswerPart: 'Supreme Court',
  },
  {
    key: 'catalan',
    compositionId: 'CitizenlyCatalanAd',
    englishName: 'Catalan',
    nativeName: 'Català',
    translationLabel: 'CATALÀ',
    englishQuestion: 'How long is a term for a President?',
    translatedQuestion: "Quant dura el mandat d'un president?",
    answer: 'Four years',
    firstAnswerPart: 'Four',
    secondAnswerPart: 'years',
  },
  {
    key: 'indonesian',
    compositionId: 'CitizenlyIndonesianAd',
    englishName: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    translationLabel: 'BAHASA INDONESIA',
    englishQuestion: 'What ocean is on the East Coast?',
    translatedQuestion: 'Samudra apa yang berada di Pantai Timur?',
    answer: 'Atlantic Ocean',
    firstAnswerPart: 'Atlantic',
    secondAnswerPart: 'Ocean',
    splitDelayFrames: 6,
  },
  {
    key: 'tagalog',
    compositionId: 'CitizenlyTagalogAd',
    englishName: 'Tagalog',
    nativeName: 'Tagalog',
    translationLabel: 'TAGALOG',
    englishQuestion: 'How many stripes are on the flag?',
    translatedQuestion: 'Ilang guhit ang nasa bandila?',
    answer: 'Thirteen',
    firstAnswerPart: 'Thirteen',
  },
  {
    key: 'finnish',
    compositionId: 'CitizenlyFinnishAd',
    englishName: 'Finnish',
    nativeName: 'Suomi',
    translationLabel: 'SUOMI',
    englishQuestion: 'Who is the President of the United States now?',
    translatedQuestion: 'Kuka on Yhdysvaltain nykyinen presidentti?',
    answer: 'Donald Trump',
    firstAnswerPart: 'Donald',
    secondAnswerPart: 'Trump',
  },
  {
    key: 'croatian',
    compositionId: 'CitizenlyCroatianAd',
    englishName: 'Croatian',
    nativeName: 'Hrvatski',
    translationLabel: 'HRVATSKI',
    englishQuestion: 'How many stars are on the flag?',
    translatedQuestion: 'Koliko zvijezda ima na zastavi?',
    answer: 'Fifty',
    firstAnswerPart: 'Fifty',
  },
  {
    key: 'bosnian',
    compositionId: 'CitizenlyBosnianAd',
    englishName: 'Bosnian',
    nativeName: 'Bosanski',
    translationLabel: 'BOSANSKI',
    englishQuestion: 'Who was the first President?',
    translatedQuestion: 'Ko je bio prvi predsjednik?',
    answer: 'George Washington',
    firstAnswerPart: 'George',
    secondAnswerPart: 'Washington',
  },
] as const;

export const CitizenlyLanguageAd: React.FC<{languageKey?: string}> = ({languageKey = 'german'}) => {
  const config = languageAdConfigs.find((candidate) => candidate.key === languageKey) ?? languageAdConfigs[0];

  return (
    <AbsoluteFill style={{backgroundColor: colors.warm}}>
      <Sequence durationInFrames={102} premountFor={30}>
        <InterviewScene
          question={config.englishQuestion}
          translation={config.translatedQuestion}
          translationLabel={config.translationLabel}
        />
      </Sequence>
      <Sequence from={90} durationInFrames={74} premountFor={30}>
        <ListeningScene
          title={`Answer in ${config.englishName}`}
          firstAnswerPart={config.firstAnswerPart}
          secondAnswerPart={config.secondAnswerPart ?? ''}
          secondAnswerDelayFrames={config.splitDelayFrames}
        />
      </Sequence>
      <Sequence from={150} durationInFrames={106} premountFor={30}>
        <ResultsScene answer={config.answer} />
      </Sequence>
      <Sequence from={240} durationInFrames={210} premountFor={30}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
