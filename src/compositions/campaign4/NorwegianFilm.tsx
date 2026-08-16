import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  BrandMark,
  Cut,
  F,
  Glass,
  Noise,
  Orbit,
  page,
  sp,
  Wave,
} from "./Shared";

const dark = {
  background:
    "radial-gradient(circle at 50% 48%,#0C2E64 0,#07172F 34%,#030813 72%)",
  color: "white",
} as const;
const CenterCopy: React.FC<{ children: React.ReactNode; accent?: string }> = ({
  children,
  accent,
}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        left: 100,
        right: 160,
        top: 650,
        textAlign: "center",
        fontFamily: F.display,
        fontSize: 72,
        lineHeight: 1.02,
        letterSpacing: -3.8,
        fontWeight: 520,
        transform: `translateY(${(1 - sp(frame, 0)) * 40}px)`,
        color: accent ?? "white",
      }}
    >
      {children}
    </div>
  );
};

export const CitizenlyNorwegianReferenceAd: React.FC = () => {
  const frame = useCurrentFrame();
  const word =
    frame < 185 ? "personlige" : frame < 215 ? "fleksible" : "tilpassede";
  const wordStart = frame < 185 ? 155 : frame < 215 ? 185 : 215;
  return (
    <AbsoluteFill style={page}>
      <Cut from={0} to={50}>
        <AbsoluteFill style={dark}>
          <Noise opacity={0.07} />
          <CenterCopy>
            Har du et intervju
            <br />
            <span style={{ color: "#78A9FF" }}>å bestå?</span>
          </CenterCopy>
        </AbsoluteFill>
      </Cut>
      <Cut from={50} to={95}>
        <AbsoluteFill style={dark}>
          <Noise opacity={0.07} />
          <CenterCopy>
            <span style={{ fontSize: 136, fontWeight: 640 }}>128</span>
            <br />
            spørsmål å lære?
          </CenterCopy>
        </AbsoluteFill>
      </Cut>
      <Cut from={95} to={140}>
        <AbsoluteFill style={dark}>
          <Noise opacity={0.07} />
          <CenterCopy>
            Vil du høre dem
            <br />
            <span style={{ color: "#78A9FF" }}>på norsk?</span>
          </CenterCopy>
        </AbsoluteFill>
      </Cut>

      <Cut from={140} to={155}>
        <AbsoluteFill style={dark}>
          <Orbit
            style={{
              left: 160,
              top: 545,
              transform: `scale(${sp(frame, 140)})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              paddingBottom: 40,
            }}
          >
            <div
              style={{
                fontFamily: F.display,
                fontSize: 96,
                fontWeight: 540,
                letterSpacing: -5,
              }}
            >
              Møt
            </div>
          </div>
        </AbsoluteFill>
      </Cut>
      <Cut from={155} to={245}>
        <AbsoluteFill style={dark}>
          <Orbit style={{ left: 160, top: 545 }} />
          <div
            style={{
              position: "absolute",
              left: 100,
              right: 160,
              top: 760,
              textAlign: "center",
            }}
          >
            <BrandMark light />
            <div style={{ fontSize: 36, color: "#ffffffa5", marginTop: 45 }}>
              den mest
            </div>
            <div
              style={{
                fontFamily: F.display,
                fontSize: 82,
                fontWeight: 560,
                color: "#78A9FF",
                letterSpacing: -4,
                marginTop: 8,
                filter: `blur(${(1 - sp(frame, wordStart)) * 14}px)`,
                transform: `scale(${0.88 + sp(frame, wordStart) * 0.12})`,
              }}
            >
              {word}
            </div>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={245} to={345}>
        <AbsoluteFill style={dark}>
          <Noise opacity={0.05} />
          <div
            style={{ position: "absolute", left: 105, right: 165, top: 250 }}
          >
            <div
              style={{
                fontFamily: F.mono,
                fontSize: 14,
                color: "#78A9FF",
                letterSpacing: 1.6,
              }}
            >
              CITIZENLY / PRAKSIS
            </div>
            <div
              style={{
                fontSize: 49,
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: -2,
                marginTop: 25,
              }}
            >
              Hva er den høyeste domstolen i USA?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: 115,
              right: 175,
              top: 650,
              display: "grid",
              gap: 18,
            }}
          >
            {[
              ["Lytt", "▶", "Spørsmål og svar med lyd"],
              ["Øv", "●", "Svar med din egen stemme"],
              ["Repeter", "↻", "Få feilene tilbake"],
            ].map(([title, icon, note], i) => {
              const q = sp(frame, 248 + i * 12);
              return (
                <Glass
                  dark
                  key={title}
                  style={{
                    height: 170,
                    borderRadius: 30,
                    padding: "0 30px",
                    display: "grid",
                    gridTemplateColumns: "78px 1fr",
                    alignItems: "center",
                    opacity: q,
                    transform: `translateX(${(1 - q) * 90}px)`,
                  }}
                >
                  <div style={{ fontSize: 37, color: "#78A9FF" }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 27, fontWeight: 680 }}>{title}</div>
                    <div
                      style={{ fontSize: 17, color: "#ffffff78", marginTop: 7 }}
                    >
                      {note}
                    </div>
                  </div>
                </Glass>
              );
            })}
          </div>
          <div style={{ position: "absolute", left: 325, top: 1300 }}>
            <Wave color="#78A9FF" width={430} height={100} />
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={345} to={390}>
        <AbsoluteFill style={dark}>
          <div
            style={{
              position: "absolute",
              left: 95,
              right: 155,
              top: 650,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: F.display,
                fontSize: 83,
                fontWeight: 560,
                letterSpacing: -4,
              }}
            >
              Gratis.
            </div>
            <div
              style={{
                fontFamily: F.display,
                fontSize: 83,
                fontWeight: 560,
                letterSpacing: -4,
                color: "#78A9FF",
                marginTop: 10,
              }}
            >
              Uten reklame.
            </div>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={390} to={450}>
        <AbsoluteFill style={dark}>
          <Orbit
            size={800}
            style={{
              left: 140,
              top: 510,
              transform: `scale(${0.9 + Math.sin(frame * 0.04) * 0.03})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingBottom: 20,
            }}
          >
            <BrandMark light />
            <div style={{ fontSize: 22, color: "#ffffff91", marginTop: 28 }}>
              Øv på norsk. Bli klar for intervjuet.
            </div>
            <div
              style={{
                fontFamily: F.mono,
                fontSize: 15,
                color: "#78A9FF",
                marginTop: 48,
              }}
            >
              citizenly.app
            </div>
          </div>
        </AbsoluteFill>
      </Cut>
    </AbsoluteFill>
  );
};
