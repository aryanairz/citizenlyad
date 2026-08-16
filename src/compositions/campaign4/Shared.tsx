import React, { type CSSProperties, type ReactNode } from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const C = {
  navy: "#17233D",
  red: "#C41E3A",
  white: "#FFFFFF",
  ink: "#10141D",
  muted: "#727887",
  green: "#27956D",
  ice: "#EDF4FB",
  blue: "#2D5DB3",
  paleBlue: "#DDE8FA",
  paleRed: "#F6DCE2",
} as const;
export const F = {
  clean: "'Manrope Variable', sans-serif",
  display: "'Space Grotesk Variable', sans-serif",
  mono: "'IBM Plex Mono', monospace",
} as const;

export const p = (frame: number, a: number, b: number) =>
  interpolate(frame, [a, b], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
export const sp = (frame: number, delay = 0, stiffness = 130) =>
  spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 22, mass: 0.8, stiffness },
  });
export const fade = (frame: number, a: number, b: number) =>
  interpolate(frame, [a, b], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
export const page: CSSProperties = {
  fontFamily: F.clean,
  color: C.navy,
  overflow: "hidden",
};

export const GradientField: React.FC<{
  colors?: string[];
  strength?: number;
}> = ({ colors = [C.blue, C.red, "#F8FAFD"], strength = 1 }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(circle at 15% 18%,${colors[0]} 0,transparent 48%),radial-gradient(circle at 88% 35%,${colors[1]} 0,transparent 49%),radial-gradient(circle at 40% 95%,${colors[2]} 0,transparent 58%),#F7F8FB`,
      filter: `saturate(${strength})`,
    }}
  />
);

export const AmericanBackdrop: React.FC<{
  dark?: boolean;
  quiet?: boolean;
}> = ({ dark = false, quiet = false }) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame * 0.025) * 26;
  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: dark
          ? "radial-gradient(circle at 18% 22%,#244F9A88 0,transparent 36%),radial-gradient(circle at 88% 68%,#A516324f 0,transparent 40%),linear-gradient(155deg,#06142D,#020712 72%)"
          : "radial-gradient(circle at 10% 12%,#DCE8FC 0,transparent 34%),radial-gradient(circle at 92% 78%,#F5DCE2 0,transparent 36%),#FCFCFB",
      }}
    >
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", inset: 0, opacity: quiet ? 0.16 : 0.28 }}
      >
        <g transform={`translate(${drift} 0)`}>
          {Array.from({ length: 11 }, (_, i) => (
            <path
              key={i}
              d="M0-10 2.9-3.2 10-3.1 4.4 1.2 6.2 8-0 4.2-6.2 8-4.4 1.2-10-3.1-2.9-3.2Z"
              transform={`translate(${110 + (i % 4) * 235} ${300 + Math.floor(i / 4) * 540}) scale(${i % 3 === 0 ? 1.4 : 1})`}
              fill={i % 2 === 0 ? (dark ? "#7CA8FF" : C.blue) : C.red}
            />
          ))}
        </g>
        <path
          d="M-80 1460 C250 1310 520 1600 1160 1330"
          fill="none"
          stroke={dark ? "#7CA8FF" : C.blue}
          strokeWidth="2"
        />
        <path
          d="M-120 1510 C280 1360 550 1650 1180 1380"
          fill="none"
          stroke={C.red}
          strokeWidth="2"
        />
      </svg>
    </AbsoluteFill>
  );
};

export const Noise: React.FC<{ opacity?: number }> = ({ opacity = 0.035 }) => (
  <svg
    width="1080"
    height="1920"
    viewBox="0 0 1080 1920"
    style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
  >
    <filter id="campaign4-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".9"
        numOctaves="2"
        seed="41"
      />
    </filter>
    <rect
      width="1080"
      height="1920"
      filter="url(#campaign4-noise)"
      opacity=".55"
    />
  </svg>
);

export const BrandMark: React.FC<{ light?: boolean; compact?: boolean }> = ({
  light,
  compact,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <Img
      src={staticFile("citizenlyicon.png")}
      style={{
        width: compact ? 40 : 52,
        height: compact ? 40 : 52,
        objectFit: "contain",
      }}
    />
    <span
      style={{
        fontFamily: F.display,
        fontSize: compact ? 19 : 24,
        fontWeight: 650,
        color: light ? "white" : C.navy,
      }}
    >
      Citizenly
    </span>
  </div>
);

export const TypeText: React.FC<{
  text: string;
  from?: number;
  to?: number;
  cursor?: boolean;
  style?: CSSProperties;
}> = ({ text, from = 0, to = 40, cursor = true, style }) => {
  const frame = useCurrentFrame();
  const count = Math.floor(p(frame, from, to) * text.length);
  return (
    <span style={style}>
      {text.slice(0, count)}
      {cursor && count < text.length ? (
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "currentColor",
            marginLeft: 3,
            opacity: frame % 16 < 8 ? 1 : 0,
            verticalAlign: "-.12em",
          }}
        />
      ) : null}
    </span>
  );
};

export const Wave: React.FC<{
  color?: string;
  width?: number;
  height?: number;
  bars?: number;
  offset?: number;
}> = ({ color = C.red, width = 600, height = 120, bars = 29, offset = 0 }) => {
  const frame = useCurrentFrame() + offset;
  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {Array.from({ length: bars }, (_, i) => {
        const env = Math.sin(((i + 1) / (bars + 1)) * Math.PI);
        const h =
          10 +
          env *
            (18 + Math.abs(Math.sin(frame * 0.2 + i * 0.71)) * (height - 28));
        return (
          <span
            key={i}
            style={{
              width: Math.max(5, (width / bars) * 0.34),
              height: h,
              borderRadius: 20,
              background: color,
            }}
          />
        );
      })}
    </div>
  );
};

export const Glass: React.FC<{
  children: ReactNode;
  style?: CSSProperties;
  dark?: boolean;
}> = ({ children, style, dark }) => (
  <div
    style={{
      background: dark
        ? "linear-gradient(145deg,rgba(27,38,65,.82),rgba(9,15,29,.66))"
        : "rgba(255,255,255,.82)",
      border: `1px solid ${dark ? "#ffffff25" : "#ffffffcc"}`,
      boxShadow: dark
        ? "0 35px 90px #0008, inset 0 1px #ffffff2b"
        : "0 30px 80px #18233d24, inset 0 1px white",
      backdropFilter: "blur(24px)",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Phone: React.FC<{
  children: ReactNode;
  style?: CSSProperties;
  screen?: string;
  glow?: string;
}> = ({
  children,
  style,
  screen = "#FAFAFA",
  glow = "rgba(37,76,130,.22)",
}) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const light = interpolate(Math.sin(frame * 0.035), [-1, 1], [0.18, 0.42]);
  return (
    <div
      style={{
        position: "absolute",
        width: 650,
        height: 1270,
        left: (width - 650) / 2,
        padding: 13,
        borderRadius: 92,
        background:
          "linear-gradient(145deg,#788091 0%,#1A202D 28%,#0A0D14 65%,#616979 100%)",
        boxShadow: `0 80px 150px ${glow},0 18px 45px #10182845,inset 0 1px rgba(255,255,255,${light})`,
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 79,
          overflow: "hidden",
          background: screen,
          border: "2px solid #ffffff55",
        }}
      >
        {children}
        <div
          style={{
            position: "absolute",
            top: 19,
            left: "50%",
            transform: "translateX(-50%)",
            width: 164,
            height: 46,
            borderRadius: 28,
            background: "#080B11",
            zIndex: 30,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 17,
            left: "50%",
            transform: "translateX(-50%)",
            width: 175,
            height: 7,
            borderRadius: 8,
            background: "#56607599",
            zIndex: 30,
          }}
        />
      </div>
    </div>
  );
};

export const AppHeader: React.FC<{ language: string; dark?: boolean }> = ({
  language,
  dark,
}) => (
  <div
    style={{
      height: 132,
      padding: "72px 36px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `1px solid ${dark ? "#ffffff1c" : "#E4E6EA"}`,
    }}
  >
    <BrandMark light={dark} compact />
    <span style={{ fontSize: 16, color: dark ? "#ffffff88" : C.muted }}>
      {language}
    </span>
  </div>
);

export const QuestionCard: React.FC<{
  question: string;
  answer?: string;
  dark?: boolean;
  progress?: number;
}> = ({ question, answer, dark, progress = 0.45 }) => (
  <div style={{ padding: "45px 38px", color: dark ? "white" : C.navy }}>
    <div
      style={{
        fontFamily: F.mono,
        fontSize: 13,
        letterSpacing: 1.5,
        color: dark ? "#8CB9FF" : C.red,
      }}
    >
      CIVICS · 22 / 128
    </div>
    <div
      style={{
        fontSize: 38,
        lineHeight: 1.16,
        letterSpacing: -1.5,
        fontWeight: 680,
        marginTop: 25,
      }}
    >
      {question}
    </div>
    <div
      style={{
        height: 5,
        borderRadius: 5,
        background: dark ? "#ffffff1d" : "#E8EAF0",
        marginTop: 38,
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 5,
          background: C.red,
          width: `${progress * 100}%`,
        }}
      />
    </div>
    {answer ? (
      <div
        style={{
          marginTop: 52,
          paddingTop: 35,
          borderTop: `1px solid ${dark ? "#ffffff22" : "#E1E4E9"}`,
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: dark ? "#ffffff72" : C.muted,
            textTransform: "uppercase",
            letterSpacing: 1.4,
          }}
        >
          Svar
        </div>
        <div style={{ fontSize: 44, fontWeight: 740, marginTop: 14 }}>
          {answer}
        </div>
      </div>
    ) : null}
  </div>
);

export const Orbit: React.FC<{
  color?: string;
  size?: number;
  style?: CSSProperties;
}> = ({ color = "#3478F6", size = 760, style }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${color}55`,
        boxShadow: `0 0 90px ${color}66,inset 0 0 85px ${color}35`,
        transform: `rotate(${frame * 0.18}deg)`,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "white",
          boxShadow: `0 0 30px ${color}`,
          left: "50%",
          top: -9,
        }}
      />
    </div>
  );
};

export const Cut: React.FC<{
  from: number;
  to: number;
  children: ReactNode;
}> = ({ from, to, children }) => {
  const frame = useCurrentFrame();
  return frame >= from && frame < to ? <>{children}</> : null;
};
