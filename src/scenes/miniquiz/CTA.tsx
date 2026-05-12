import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { dmStack } from "../../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [0, 18], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoY = interpolate(frame, [0, 18], [16, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headlineOpacity = interpolate(frame, [14, 30], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [14, 30], [12, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const brandOpacity = interpolate(frame, [26, 42], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandY = interpolate(frame, [26, 42], [12, 0], {
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
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `translateY(${logoY}px)`,
          }}
        >
          <Img
            src={staticFile("CitizenlyFull.png")}
            style={{
              width: 600,
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 60,
            fontSize: 36,
            fontWeight: 500,
            color: "#1B2A4A",
            opacity: headlineOpacity,
            transform: `translateY(${headlineY}px)`,
            letterSpacing: "-0.01em",
          }}
        >
          Practice more at
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 56,
            fontWeight: 700,
            color: "#C41E3A",
            opacity: brandOpacity,
            transform: `translateY(${brandY}px)`,
            letterSpacing: "-0.02em",
          }}
        >
          citizenly.app
        </div>
      </div>
    </AbsoluteFill>
  );
};
