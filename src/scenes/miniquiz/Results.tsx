import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { dmStack } from "../../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

export const Results: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 12], [10, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [60, 70], [1, 0], {
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
          fontSize: 56,
          fontWeight: 700,
          color: "#1B2A4A",
          letterSpacing: "-0.02em",
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        How&apos;d you do?
      </div>
    </AbsoluteFill>
  );
};
