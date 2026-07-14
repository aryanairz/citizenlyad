import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {InterviewScene} from '../scenes/InterviewScene';
import {LanguageScene} from '../scenes/LanguageScene';
import {ListeningScene} from '../scenes/ListeningScene';
import {OutroScene} from '../scenes/OutroScene';
import {ResultsScene} from '../scenes/ResultsScene';
import {colors} from '../styles/theme';

export const CitizenlySpanishAd: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: colors.warm}}>
    <Sequence durationInFrames={66} premountFor={30}>
      <LanguageScene
        selectedLanguage="Español"
        eyebrow="Bienvenido a Citizenly"
        title={<>Elige tu<br />idioma</>}
        hint="Puedes cambiarlo cuando quieras en Configuración."
      />
    </Sequence>
    <Sequence from={54} durationInFrames={102} premountFor={30}>
      <InterviewScene
        question="What is the capital of the United States?"
        translation="¿Cuál es la capital de los Estados Unidos?"
        translationLabel="ESPAÑOL"
        englishLabel="EN INGLÉS"
        officerLabel="Oficial de práctica"
        progressLabel="Pregunta 4 de 10"
        speakerLabel="Escuchar"
      />
    </Sequence>
    <Sequence from={144} durationInFrames={74} premountFor={30}>
      <ListeningScene
        eyebrow="Tu turno"
        title="Responde en español"
        status="Escuchando…"
        firstAnswerPart="Washington,"
        secondAnswerPart="D.C."
      />
    </Sequence>
    <Sequence from={204} durationInFrames={106} premountFor={30}>
      <ResultsScene
        eyebrow="Evaluación con IA"
        title="Excelente respuesta."
        answer="Washington, D.C."
        correctLabel="Respuesta correcta"
        pronunciationLabel="Pronunciación"
        clarityLabel="Clara y segura"
        confidenceLabel="Confianza"
        confidenceValue="Excelente"
        tip="Tu pronunciación fue clara. Mantén el mismo ritmo durante tu entrevista."
      />
    </Sequence>
    <Sequence from={294} durationInFrames={156} premountFor={30}>
      <OutroScene
        completeLabel="Práctica completada"
        readyLineOne="Listo para tu"
        readyLineTwo="entrevista."
      />
    </Sequence>
  </AbsoluteFill>
);
