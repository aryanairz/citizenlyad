import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { dmStack } from "../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

export const TitleCard: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 5], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [25, 30], [1, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: dmStack,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#1B2A4A",
          opacity,
          letterSpacing: "-0.02em",
        }}
      >
        One question.
      </div>
    </AbsoluteFill>
  );
};
