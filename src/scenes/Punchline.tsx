import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { dmStack } from "../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

const LINES = [
  { text: "One app.", color: "#1B2A4A", start: 0 },
  { text: "Every question.", color: "#1B2A4A", start: 20 },
  { text: "Free.", color: "#C41E3A", start: 40 },
];

export const Punchline: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeOut = interpolate(frame, [80, 90], [1, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: dmStack,
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        {LINES.map((line, i) => {
          const opacity = interpolate(
            frame,
            [line.start, line.start + 15],
            [0, 1],
            {
              easing: ENTER,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          const translateY = interpolate(
            frame,
            [line.start, line.start + 15],
            [12, 0],
            {
              easing: ENTER,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );
          return (
            <div
              key={i}
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: line.color,
                opacity,
                transform: `translateY(${translateY}px)`,
                letterSpacing: "-0.02em",
              }}
            >
              {line.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
