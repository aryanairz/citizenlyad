import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  AppHeader,
  BrandMark,
  C,
  Cut,
  F,
  Glass,
  page,
  Phone,
  QuestionCard,
  sp,
  Wave,
} from "./Shared";

const studio = {
  background:
    "radial-gradient(circle at 75% 18%,#D7D5FF 0,transparent 34%),radial-gradient(circle at 22% 88%,#C8E8FA 0,transparent 42%),#F5F4F1",
} as const;

export const CitizenlySwedishReferenceAd: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={page}>
      <Cut from={0} to={75}>
        <AbsoluteFill style={studio}>
          <Phone
            style={{
              top: 330,
              transform: `perspective(1700px) rotateX(${12 * (1 - sp(frame, 0))}deg) rotateY(${-21 + sp(frame, 0) * 21}deg) rotateZ(${-8 + sp(frame, 0) * 8}deg) translateY(${(1 - sp(frame, 0)) * 280}px) scale(${0.83 + sp(frame, 0) * 0.17})`,
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  "linear-gradient(155deg,#17223B,#203D66 52%,#6B294D)",
                padding: "150px 30px 60px",
              }}
            >
              <div style={{ fontSize: 18, color: "#ffffff9a" }}>
                Ons 8 april
              </div>
              <div
                style={{
                  fontSize: 68,
                  color: "white",
                  fontWeight: 640,
                  letterSpacing: -4,
                  marginTop: 8,
                }}
              >
                9:42
              </div>
              <Glass
                dark
                style={{
                  marginTop: 135,
                  height: 270,
                  borderRadius: 38,
                  padding: 28,
                  color: "white",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: 18,
                      background: C.red,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    C
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 700 }}>
                      Dagens fråga
                    </div>
                    <div
                      style={{ fontSize: 16, color: "#ffffff86", marginTop: 4 }}
                    >
                      Tryck för att öva
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 27,
                    lineHeight: 1.2,
                    fontWeight: 620,
                    marginTop: 30,
                  }}
                >
                  Hur många stjärnor finns på flaggan?
                </div>
              </Glass>
            </div>
          </Phone>
        </AbsoluteFill>
      </Cut>

      <Cut from={75} to={150}>
        <AbsoluteFill style={studio}>
          <Phone
            style={{
              top: 310,
              transform: `perspective(1700px) scale(${1 + pulse(frame, 75, 150) * 0.11}) translateY(${-pulse(frame, 75, 150) * 55}px)`,
            }}
          >
            <AppHeader language="Svenska" />
            <QuestionCard
              question="Hur många stjärnor finns på flaggan?"
              progress={0.42}
            />
            <div
              style={{
                position: "absolute",
                left: 48,
                right: 48,
                bottom: 210,
                height: 132,
                borderRadius: 32,
                background: C.navy,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              <span style={{ fontSize: 34 }}>▶</span> Lyssna på frågan
            </div>
          </Phone>
        </AbsoluteFill>
      </Cut>

      <Cut from={150} to={215}>
        <AbsoluteFill style={studio}>
          <Phone
            style={{
              top: 355,
              transform: "scale(.84)",
              filter: "blur(2px)",
              opacity: 0.42,
            }}
          >
            <AppHeader language="Svenska" />
            <QuestionCard question="Hur många stjärnor finns på flaggan?" />
          </Phone>
          <Glass
            style={{
              position: "absolute",
              left: 115,
              top: 700,
              width: 850,
              height: 310,
              borderRadius: 52,
              padding: "38px 44px",
              transform: `scale(${0.7 + sp(frame, 150) * 0.3})`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b style={{ fontSize: 25 }}>Frågan läses upp</b>
              <span
                style={{ fontFamily: F.mono, fontSize: 15, color: C.muted }}
              >
                0:08
              </span>
            </div>
            <Wave color="#3478F6" width={760} height={150} />
          </Glass>
        </AbsoluteFill>
      </Cut>

      <Cut from={215} to={280}>
        <AbsoluteFill style={studio}>
          <div
            style={{
              position: "absolute",
              left: 540,
              top: 625,
              width: 170,
              height: 170,
              borderRadius: "50%",
              background: C.red,
              transform: `translateX(-50%) scale(${0.94 + Math.sin(frame * 0.18) * 0.06})`,
              boxShadow: "0 0 0 35px #C41E3A18,0 35px 75px #C41E3A42",
              color: "white",
              display: "grid",
              placeItems: "center",
              fontSize: 58,
            }}
          >
            ●
          </div>
          <div
            style={{
              position: "absolute",
              top: 860,
              left: 150,
              right: 200,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: F.mono, fontSize: 15, color: C.muted }}>
              LYSSNAR …
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 680,
                letterSpacing: -3,
                marginTop: 28,
              }}
            >
              {frame < 240 ? "Femt…" : "Femtio."}
            </div>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Wave color={C.red} width={620} height={110} />
            </div>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={280} to={350}>
        <AbsoluteFill style={studio}>
          <Phone
            style={{
              top: 330,
              transform: `perspective(1700px) rotateY(${(frame - 280) * 0.12}deg) scale(.9)`,
            }}
          >
            <AppHeader language="Svenska" />
            <QuestionCard
              question="Hur många stjärnor finns på flaggan?"
              answer="Femtio. ✓"
              progress={0.58}
            />
            <div
              style={{
                margin: "25px 42px",
                height: 96,
                borderRadius: 28,
                background: "#E7F5EF",
                color: C.green,
                display: "grid",
                placeItems: "center",
                fontSize: 22,
                fontWeight: 730,
              }}
            >
              Rätt svar
            </div>
          </Phone>
          <div
            style={{
              position: "absolute",
              left: 540,
              top: 1040,
              width: 250,
              height: 250,
              borderRadius: "50%",
              border: "3px solid #2A9B7266",
              transform: `translate(-50%,-50%) scale(${sp(frame, 290) * 3})`,
              opacity: 1 - sp(frame, 310),
            }}
          />
        </AbsoluteFill>
      </Cut>

      <Cut from={350} to={450}>
        <AbsoluteFill style={studio}>
          <Phone
            screen="#090D15"
            style={{
              top: 365,
              transform: `perspective(1700px) rotateY(${-10 + sp(frame, 350) * 10}deg) rotateZ(${4 - sp(frame, 350) * 4}deg) scale(.88)`,
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <BrandMark light />
              <div style={{ fontSize: 20, color: "#ffffff8a", marginTop: 22 }}>
                Öva på svenska. Helt gratis.
              </div>
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 15,
                  color: "#8CB9FF",
                  marginTop: 55,
                }}
              >
                citizenly.app
              </div>
            </div>
          </Phone>
        </AbsoluteFill>
      </Cut>
    </AbsoluteFill>
  );
};

const pulse = (frame: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (frame - a) / (b - a)));
