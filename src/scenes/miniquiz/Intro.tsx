import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { dmStack } from "../../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [50, 60], [1, 0], {
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
        padding: 80,
        textAlign: "center",
      }}
    >
      <div
        style={{
          opacity,
          fontSize: 48,
          fontWeight: 700,
          color: "#1B2A4A",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        Can you pass the citizenship test?
      </div>
    </AbsoluteFill>
  );
};
