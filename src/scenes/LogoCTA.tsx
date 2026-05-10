import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { dmStack } from "../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

export const LogoCTA: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoY = interpolate(frame, [0, 20], [12, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaOpacity = interpolate(frame, [15, 35], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaY = interpolate(frame, [15, 35], [12, 0], {
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
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Img
          src={staticFile("CitizenlyFull.png")}
          style={{
            width: 600,
            height: "auto",
            opacity: logoOpacity,
            transform: `translateY(${logoY}px)`,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#C41E3A",
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            letterSpacing: "-0.01em",
          }}
        >
          citizenly.app
        </div>
      </div>
    </AbsoluteFill>
  );
};
