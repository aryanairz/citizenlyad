import React from "react";
import { AbsoluteFill, Easing, interpolate } from "remotion";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

type Props = {
  frame: number;
  label: string;
  question: string;
  fontSize: number;
  fontFamily: string;
  enterStart: number;
  enterEnd: number;
  exitStart: number;
  exitEnd: number;
};

export const QuestionSlide: React.FC<Props> = ({
  frame,
  label,
  question,
  fontSize,
  fontFamily,
  enterStart,
  enterEnd,
  exitStart,
  exitEnd,
}) => {
  const enterX = interpolate(frame, [enterStart, enterEnd], [100, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitX = interpolate(frame, [exitStart, exitEnd], [0, -100], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateX = frame < exitStart ? enterX : exitX;

  const enterOpacity = interpolate(frame, [enterStart, enterEnd], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(frame, [exitStart, exitEnd], [1, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = frame < exitStart ? enterOpacity : exitOpacity;

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        transform: `translateX(${translateX}%)`,
        opacity,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "#6B7280",
            fontFamily,
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: "#1B2A4A",
            fontFamily,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {question}
        </div>
      </div>
    </AbsoluteFill>
  );
};
