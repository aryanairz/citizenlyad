import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Conversation } from "./scenes/mompassed/Conversation";
import { MomCTA } from "./scenes/mompassed/CTA";

export const MomPassed: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      <Sequence from={0} durationInFrames={600} layout="none">
        <Conversation />
      </Sequence>
      <Sequence from={600} durationInFrames={55} layout="none">
        <MomCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
