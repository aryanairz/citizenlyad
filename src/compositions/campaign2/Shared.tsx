import React, { type CSSProperties, type ReactNode } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CitizenlyIcon, CitizenlyLogo } from "../../components/CitizenlyLogo";
import { colors, fontFamily } from "../../styles/theme";

export const W = 1080;
export const H = 1920;

export const clamp = (
  value: number,
  input: [number, number],
  output: [number, number],
) =>
  interpolate(value, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

export const enterSpring = (frame: number, delay = 0, stiffness = 115) =>
  spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 19, mass: 0.85, stiffness },
  });

export const exitOpacity = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const page: CSSProperties = {
  fontFamily,
  overflow: "hidden",
  color: colors.navy,
};

export const SafeFrame: React.FC<{
  children: ReactNode;
  style?: CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      position: "absolute",
      left: 96,
      right: 150,
      top: 180,
      bottom: 300,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Grain: React.FC<{ opacity?: number; color?: string }> = ({
  opacity = 0.035,
  color = colors.navy,
}) => (
  <svg
    width={W}
    height={H}
    viewBox={`0 0 ${W} ${H}`}
    style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
  >
    <filter id="citizenly-grain">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.72"
        numOctaves="3"
        seed="17"
        stitchTiles="stitch"
      />
    </filter>
    <rect
      width={W}
      height={H}
      fill={color}
      filter="url(#citizenly-grain)"
      opacity="0.42"
    />
  </svg>
);

export const Eyebrow: React.FC<{
  children: ReactNode;
  color?: string;
  dark?: boolean;
}> = ({ children, color = colors.red, dark = false }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: 2.8,
      textTransform: "uppercase",
      fontWeight: 800,
      color: dark ? "rgba(255,255,255,.72)" : color,
    }}
  >
    <span
      style={{ width: 22, height: 4, borderRadius: 4, background: color }}
    />
    {children}
  </div>
);

export const KineticLine: React.FC<{
  children: ReactNode;
  delay?: number;
  color?: string;
  size?: number;
  direction?: "up" | "left" | "right";
  style?: CSSProperties;
}> = ({
  children,
  delay = 0,
  color = colors.navy,
  size = 76,
  direction = "up",
  style,
}) => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, delay, 125);
  const x =
    direction === "left"
      ? (1 - p) * -90
      : direction === "right"
        ? (1 - p) * 90
        : 0;
  const y = direction === "up" ? (1 - p) * 56 : 0;
  return (
    <div style={{ overflow: "hidden", padding: "0 0 8px" }}>
      <div
        style={{
          fontSize: size,
          lineHeight: 0.98,
          letterSpacing: -size * 0.045,
          fontWeight: 830,
          color,
          opacity: p,
          transform: `translate3d(${x}px, ${y}px, 0)`,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const BrandBug: React.FC<{
  light?: boolean;
  language?: string;
  align?: "left" | "right";
}> = ({ light = false, language, align = "left" }) => (
  <div
    style={{
      position: "absolute",
      top: 92,
      left: align === "left" ? 92 : undefined,
      right: align === "right" ? 160 : undefined,
      display: "flex",
      alignItems: "center",
      gap: 16,
      zIndex: 30,
    }}
  >
    <CitizenlyIcon size={48} />
    <span
      style={{
        fontFamily,
        fontSize: 21,
        fontWeight: 760,
        color: light ? "white" : colors.navy,
        letterSpacing: -0.3,
      }}
    >
      Citizenly
    </span>
    {language ? (
      <>
        <span
          style={{
            height: 20,
            width: 1,
            background: light ? "#ffffff45" : "#1b2a4a28",
          }}
        />
        <span
          style={{
            fontFamily,
            fontSize: 17,
            fontWeight: 680,
            color: light ? "#ffffffa8" : colors.muted,
          }}
        >
          {language}
        </span>
      </>
    ) : null}
  </div>
);

export const Phone: React.FC<{
  children: ReactNode;
  width?: number;
  height?: number;
  style?: CSSProperties;
  dark?: boolean;
}> = ({ children, width = 580, height = 1040, style, dark = false }) => (
  <div
    style={{
      width,
      height,
      borderRadius: 76,
      padding: 13,
      background: dark
        ? "linear-gradient(145deg,#576073,#161c29 48%,#3a4352)"
        : "linear-gradient(145deg,#677083,#1d2330 48%,#485164)",
      boxShadow:
        "0 52px 110px rgba(17,25,43,.24), 0 10px 28px rgba(17,25,43,.18)",
      position: "relative",
      ...style,
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 64,
        overflow: "hidden",
        background: dark ? "#111827" : "#FCFCFB",
        position: "relative",
        border: "2px solid rgba(255,255,255,.36)",
      }}
    >
      {children}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          width: 142,
          height: 40,
          borderRadius: 30,
          background: "#0C111B",
          zIndex: 20,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 150,
          height: 7,
          borderRadius: 8,
          background: dark ? "#ffffff72" : "#26334f8c",
          zIndex: 20,
        }}
      />
    </div>
  </div>
);

export const AppTop: React.FC<{
  language: string;
  progress?: number;
  dark?: boolean;
}> = ({ language, progress = 0.56, dark = false }) => (
  <div
    style={{
      padding: "84px 38px 22px",
      borderBottom: `1px solid ${dark ? "#ffffff18" : colors.line}`,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CitizenlyIcon size={36} />
        <span
          style={{
            fontSize: 17,
            fontWeight: 780,
            color: dark ? "white" : colors.navy,
          }}
        >
          {language}
        </span>
      </div>
      <span
        style={{
          fontSize: 15,
          fontWeight: 720,
          color: dark ? "#ffffff8f" : colors.muted,
        }}
      >
        Practice
      </span>
    </div>
    <div
      style={{
        height: 5,
        borderRadius: 5,
        marginTop: 18,
        background: dark ? "#ffffff18" : "#E8EAF0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: "100%",
          background: colors.red,
          borderRadius: 5,
        }}
      />
    </div>
  </div>
);

export const Browser: React.FC<{
  children: ReactNode;
  width?: number;
  height?: number;
  style?: CSSProperties;
  dark?: boolean;
}> = ({ children, width = 820, height = 900, style, dark = false }) => (
  <div
    style={{
      width,
      height,
      borderRadius: 34,
      overflow: "hidden",
      background: dark ? "#111827" : "white",
      border: `1px solid ${dark ? "#ffffff24" : "#DDE1E8"}`,
      boxShadow:
        "0 44px 100px rgba(16,27,48,.18), 0 8px 20px rgba(16,27,48,.08)",
      ...style,
    }}
  >
    <div
      style={{
        height: 58,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 22px",
        borderBottom: `1px solid ${dark ? "#ffffff1d" : "#E7E9EE"}`,
        background: dark ? "#151D2B" : "#FAFAFB",
      }}
    >
      {["#FF605C", "#FFBD44", "#00CA4E"].map((c) => (
        <span
          key={c}
          style={{ width: 12, height: 12, borderRadius: "50%", background: c }}
        />
      ))}
      <div
        style={{
          height: 28,
          width: 310,
          borderRadius: 10,
          background: dark ? "#ffffff10" : "#EEF0F4",
          marginLeft: 18,
        }}
      />
    </div>
    <div style={{ height: `calc(100% - 58px)`, position: "relative" }}>
      {children}
    </div>
  </div>
);

export const Cursor: React.FC<{
  x: number;
  y: number;
  click?: number;
  color?: string;
}> = ({ x, y, click = 0, color = colors.red }) => (
  <div style={{ position: "absolute", left: x, top: y, zIndex: 50 }}>
    <div
      style={{
        position: "absolute",
        width: 58 + click * 30,
        height: 58 + click * 30,
        left: -22 - click * 15,
        top: -22 - click * 15,
        borderRadius: "50%",
        border: `3px solid ${color}`,
        opacity: 0.6 * (1 - click),
      }}
    />
    <svg width="34" height="40" viewBox="0 0 34 40">
      <path
        d="M3 2L29 25l-12 1 7 11-6 3-7-12-8 8z"
        fill="#fff"
        stroke="#17233D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const MetricPill: React.FC<{
  label: string;
  value: string;
  accent?: string;
  dark?: boolean;
}> = ({ label, value, accent = colors.red, dark = false }) => (
  <div
    style={{
      borderRadius: 22,
      padding: "19px 22px",
      background: dark ? "#ffffff0d" : "white",
      border: `1px solid ${dark ? "#ffffff20" : "#E1E4EA"}`,
      minWidth: 150,
    }}
  >
    <div
      style={{
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: 760,
        color: dark ? "#ffffff74" : colors.muted,
      }}
    >
      {label}
    </div>
    <div style={{ fontSize: 30, fontWeight: 830, color: accent, marginTop: 5 }}>
      {value}
    </div>
  </div>
);

export const Waveform: React.FC<{
  color?: string;
  bars?: number;
  width?: number;
  height?: number;
  frameOffset?: number;
}> = ({
  color = colors.red,
  bars = 27,
  width = 500,
  height = 150,
  frameOffset = 0,
}) => {
  const frame = useCurrentFrame() + frameOffset;
  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: Math.max(5, width / bars / 3),
      }}
    >
      {Array.from({ length: bars }, (_, i) => {
        const envelope = Math.sin(((i + 1) / (bars + 1)) * Math.PI);
        const motion =
          0.34 + Math.abs(Math.sin(frame * 0.18 + i * 0.73)) * 0.66;
        const h = 12 + envelope * motion * (height - 20);
        return (
          <div
            key={i}
            style={{
              width: Math.max(5, width / bars / 2.2),
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

export const Outro: React.FC<{
  title: string;
  subtitle: string;
  background?: string;
  foreground?: string;
  accent?: string;
  align?: "center" | "left";
  compactLogo?: boolean;
}> = ({
  title,
  subtitle,
  background = "#F8F7F3",
  foreground = colors.navy,
  accent = colors.red,
  align = "center",
  compactLogo = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logo = spring({
    frame: frame - 4,
    fps,
    config: { damping: 20, stiffness: 110 },
  });
  const copy = spring({
    frame: frame - 14,
    fps,
    config: { damping: 20, stiffness: 110 },
  });
  const cta = spring({
    frame: frame - 29,
    fps,
    config: { damping: 18, stiffness: 120 },
  });
  return (
    <AbsoluteFill style={{ ...page, background }}>
      <Grain
        opacity={background === "#17233D" ? 0.08 : 0.022}
        color={foreground}
      />
      <SafeFrame
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: align === "center" ? "center" : "flex-start",
          textAlign: align,
        }}
      >
        <div
          style={{
            opacity: logo,
            transform: `translateY(${(1 - logo) * -24}px)`,
            background:
              foreground === "#fff" && !compactLogo ? "#fff" : "transparent",
            padding: foreground === "#fff" && !compactLogo ? "28px 34px" : 0,
            borderRadius: foreground === "#fff" && !compactLogo ? 30 : 0,
            boxShadow:
              foreground === "#fff" && !compactLogo
                ? "0 18px 50px rgba(0,0,0,.18)"
                : "none",
          }}
        >
          {compactLogo ? (
            <CitizenlyIcon size={116} />
          ) : (
            <CitizenlyLogo width={530} />
          )}
        </div>
        <div
          style={{
            fontSize: 66,
            lineHeight: 1.02,
            letterSpacing: -3,
            fontWeight: 840,
            color: foreground,
            marginTop: 92,
            maxWidth: 790,
            opacity: copy,
            transform: `translateY(${(1 - copy) * 35}px)`,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 27,
            lineHeight: 1.35,
            fontWeight: 620,
            color: foreground,
            opacity: copy * 0.68,
            marginTop: 24,
            maxWidth: 700,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 74,
            width: align === "center" ? 600 : 560,
            height: 112,
            borderRadius: 30,
            background: accent,
            display: "grid",
            placeItems: "center",
            color: "white",
            fontSize: 35,
            fontWeight: 820,
            boxShadow: `0 26px 60px ${accent}3d`,
            transform: `scale(${cta})`,
          }}
        >
          citizenly.app
        </div>
      </SafeFrame>
    </AbsoluteFill>
  );
};

export const SceneWipe: React.FC<{
  frame: number;
  at: number;
  color: string;
  reverse?: boolean;
}> = ({ frame, at, color, reverse = false }) => {
  const p = clamp(frame, [at, at + 20], [0, 1]);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: color,
        transformOrigin: reverse ? "right center" : "left center",
        transform: `scaleX(${p})`,
        zIndex: 90,
        pointerEvents: "none",
      }}
    />
  );
};
