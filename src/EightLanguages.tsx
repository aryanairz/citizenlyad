import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { LanguageRapidFire } from "./scenes/LanguageRapidFire";
import { LogoCTA } from "./scenes/LogoCTA";
import { Punchline } from "./scenes/Punchline";
import { TitleCard } from "./scenes/TitleCard";

export const EightLanguages: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <Sequence from={0} durationInFrames={30} layout="none">
        <TitleCard />
      </Sequence>
      <Sequence from={30} durationInFrames={240} layout="none">
        <LanguageRapidFire />
      </Sequence>
      <Sequence from={270} durationInFrames={90} layout="none">
        <Punchline />
      </Sequence>
      <Sequence from={350} durationInFrames={90} layout="none">
        <LogoCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
