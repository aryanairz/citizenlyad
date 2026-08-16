import React, { type CSSProperties, type ReactNode } from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "../../styles/theme";

export const navy = "#1B2A4A";
export const red = "#C41E3A";
export const paper = "#F7F6F2";
export const muted = "#6D7689";
export const fonts = {
  grotesk: "'Space Grotesk Variable', sans-serif",
  editorial: "'Newsreader Variable', Georgia, serif",
  mono: "'IBM Plex Mono', monospace",
  archivo: "'Archivo Variable', sans-serif",
  human: "'Manrope Variable', sans-serif",
} as const;

export const progress = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const ease = (frame: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 22, stiffness: 135, mass: 0.8 },
  });

export const base: CSSProperties = {
  fontFamily,
  color: navy,
  overflow: "hidden",
};

export const Mark: React.FC<{ light?: boolean; label?: string }> = ({
  light,
  label,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <Img
      src={staticFile("citizenlyicon.png")}
      style={{ width: 46, height: 46, objectFit: "contain" }}
    />
    <span
      style={{ fontSize: 21, fontWeight: 780, color: light ? "white" : navy }}
    >
      Citizenly
    </span>
    {label ? (
      <span style={{ fontSize: 17, color: light ? "#ffffff99" : muted }}>
        · {label}
      </span>
    ) : null}
  </div>
);

export const TopBar: React.FC<{
  language: string;
  dark?: boolean;
  section?: string;
  variant?: "line" | "quiet" | "index";
}> = ({ language, dark, section, variant = "line" }) => (
  <div
    style={{
      height: 92,
      padding: variant === "index" ? "0 38px" : "0 72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom:
        variant === "line"
          ? `1px solid ${dark ? "#ffffff18" : "#DDE1E7"}`
          : undefined,
      background:
        variant === "index" ? (dark ? "#ffffff08" : "#EEEDE8") : undefined,
    }}
  >
    {variant === "index" ? (
      <span
        style={{
          fontSize: 14,
          letterSpacing: 2.2,
          color: dark ? "#ffffff99" : muted,
        }}
      >
        CITIZENLY / {language.toUpperCase()}
      </span>
    ) : (
      <Mark light={dark} label={variant === "quiet" ? undefined : language} />
    )}
    <span
      style={{
        fontSize: variant === "index" ? 13 : 17,
        letterSpacing: variant === "index" ? 1.5 : undefined,
        fontWeight: 670,
        color: dark ? "#ffffff8d" : muted,
      }}
    >
      {section ?? "Practice"}
    </span>
  </div>
);

export const FullApp: React.FC<{
  children: ReactNode;
  language: string;
  dark?: boolean;
  section?: string;
  background?: string;
  font?: string;
  header?: "line" | "quiet" | "index";
}> = ({ children, language, dark, section, background, font, header }) => (
  <AbsoluteFill
    style={{
      ...base,
      fontFamily: font ?? base.fontFamily,
      background: background ?? (dark ? "#101727" : "#FBFBFA"),
    }}
  >
    <TopBar
      language={language}
      dark={dark}
      section={section}
      variant={header}
    />
    {children}
  </AbsoluteFill>
);

export const Cut: React.FC<{
  children: ReactNode;
  from: number;
  to: number;
}> = ({ children, from, to }) => {
  const frame = useCurrentFrame();
  return frame >= from && frame < to ? <>{children}</> : null;
};

export const Reveal: React.FC<{
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  distance?: number;
}> = ({ children, delay = 0, style, distance = 24 }) => {
  const frame = useCurrentFrame();
  const p = ease(frame, delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * distance}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Cursor: React.FC<{
  x: number;
  y: number;
  click?: number;
  light?: boolean;
}> = ({ x, y, click = 0, light }) => (
  <div style={{ position: "absolute", left: x, top: y, zIndex: 20 }}>
    {click > 0 ? (
      <div
        style={{
          position: "absolute",
          width: 70 + click * 30,
          height: 70 + click * 30,
          left: -31 - click * 15,
          top: -31 - click * 15,
          borderRadius: "50%",
          border: `3px solid ${red}`,
          opacity: 1 - click,
        }}
      />
    ) : null}
    <svg width="38" height="44" viewBox="0 0 38 44">
      <path
        d="M3 2 34 27l-14 1 8 12-7 3-8-13-10 9Z"
        fill={light ? "#fff" : navy}
        stroke={light ? navy : "#fff"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const Wave: React.FC<{
  frame: number;
  color?: string;
  width?: number;
  bars?: number;
}> = ({ frame, color = red, width = 680, bars = 31 }) => (
  <div
    style={{
      width,
      height: 190,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    {Array.from({ length: bars }, (_, i) => {
      const envelope = Math.sin(((i + 1) / (bars + 1)) * Math.PI);
      const height =
        12 +
        envelope * (30 + 110 * Math.abs(Math.sin(frame * 0.17 + i * 0.61)));
      return (
        <span
          key={i}
          style={{ width: 8, height, borderRadius: 8, background: color }}
        />
      );
    })}
  </div>
);

export const CTA: React.FC<{
  language: string;
  title: string;
  note: string;
  dark?: boolean;
  accent?: string;
  align?: "left" | "center";
}> = ({ language, title, note, dark, accent = red, align = "left" }) => {
  const frame = useCurrentFrame();
  const p = ease(frame, 4);
  return (
    <AbsoluteFill
      style={{
        ...base,
        background: dark ? "#111827" : paper,
        color: dark ? "white" : navy,
        padding: "210px 150px 330px 92px",
        justifyContent: "center",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
      }}
    >
      <div style={{ opacity: p, transform: `translateY(${(1 - p) * 30}px)` }}>
        <Mark light={dark} label={language} />
      </div>
      <div
        style={{
          fontSize: 79,
          maxWidth: 810,
          lineHeight: 0.98,
          letterSpacing: -4.3,
          fontWeight: 840,
          marginTop: 74,
          opacity: p,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 27,
          lineHeight: 1.35,
          color: dark ? "#ffffffa8" : muted,
          marginTop: 29,
          maxWidth: 700,
          fontWeight: 580,
          opacity: p,
        }}
      >
        {note}
      </div>
      <div
        style={{
          marginTop: 68,
          display: "flex",
          alignItems: "center",
          gap: 20,
          opacity: p,
        }}
      >
        <div
          style={{
            height: 76,
            padding: "0 31px",
            display: "flex",
            alignItems: "center",
            borderRadius: 8,
            background: accent,
            color: "white",
            fontSize: 25,
            fontWeight: 790,
          }}
        >
          citizenly.app
        </div>
        <span style={{ fontSize: 17, color: dark ? "#ffffff79" : muted }}>
          Free · No ads
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const BigHook: React.FC<{
  kicker: string;
  lines: string[];
  dark?: boolean;
  accent?: string;
  background?: string;
  font?: string;
}> = ({ kicker, lines, dark, accent = red, background, font }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: font ?? base.fontFamily,
        background: background ?? (dark ? "#101727" : paper),
        color: dark ? "white" : navy,
        padding: "260px 150px 340px 92px",
        justifyContent: "center",
      }}
    >
      <Reveal
        style={{
          fontSize: 18,
          textTransform: "uppercase",
          letterSpacing: 2.5,
          color: accent,
          fontWeight: 800,
        }}
      >
        {kicker}
      </Reveal>
      <div style={{ marginTop: 44 }}>
        {lines.map((line, i) => (
          <Reveal
            key={line}
            delay={i * 7}
            distance={70}
            style={{
              fontSize: 95,
              lineHeight: 0.93,
              letterSpacing: -5.5,
              fontWeight: 850,
              color: i === lines.length - 1 ? accent : undefined,
            }}
          >
            {line}
          </Reveal>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 92,
          bottom: 340,
          width: 200 + progress(frame, 18, 70) * 600,
          height: 3,
          background: dark ? "#ffffff33" : "#1b2a4a24",
        }}
      />
    </AbsoluteFill>
  );
};
