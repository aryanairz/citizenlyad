import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { CTA } from "./scenes/miniquiz/CTA";
import { Intro } from "./scenes/miniquiz/Intro";
import { QuestionSection } from "./scenes/miniquiz/QuestionSection";
import { Results } from "./scenes/miniquiz/Results";

export const MiniQuiz: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <Sequence from={0} durationInFrames={60} layout="none">
        <Intro />
      </Sequence>
      <Sequence from={60} durationInFrames={900} layout="none">
        <QuestionSection />
      </Sequence>
      <Sequence from={960} durationInFrames={70} layout="none">
        <Results />
      </Sequence>
      <Sequence from={1030} durationInFrames={150} layout="none">
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
