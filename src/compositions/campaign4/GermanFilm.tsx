import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  BrandMark,
  C,
  Cut,
  F,
  fade,
  Glass,
  GradientField,
  Noise,
  p,
  page,
  sp,
  TypeText,
} from "./Shared";

export const CitizenlyGermanReferenceAd: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={page}>
      <Cut from={0} to={60}>
        <AbsoluteFill>
          <GradientField colors={["#A7B4FF", "#F3A79D", "#FFE5A2"]} />
          <Noise opacity={0.025} />
          <Glass
            style={{
              position: "absolute",
              left: 160,
              top: 780,
              width: 760,
              height: 164,
              borderRadius: 34,
              padding: "0 38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `translateY(${(1 - sp(frame, 3)) * 35}px) scale(${0.96 + sp(frame, 3) * 0.04})`,
            }}
          >
            <div>
              <TypeText
                text="Deutsch"
                from={8}
                to={30}
                cursor={false}
                style={{ fontSize: 34, fontWeight: 720 }}
              />
              <div style={{ fontSize: 18, color: C.muted, marginTop: 7 }}>
                Prüfungssprache
              </div>
            </div>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: frame > 35 ? C.ink : "#EEF0F3",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontSize: 22,
                transform: `scale(${sp(frame, 35)})`,
              }}
            >
              ✓
            </div>
          </Glass>
        </AbsoluteFill>
      </Cut>

      <Cut from={60} to={135}>
        <AbsoluteFill style={{ background: "#FCFCFB" }}>
          <div
            style={{
              position: "absolute",
              left: 88,
              right: 150,
              top: 190,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <BrandMark compact />
            <span style={{ fontFamily: F.mono, fontSize: 14, color: C.muted }}>
              FRAGE 22
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              left: 92,
              right: 150,
              top: 760,
              height: 92,
              borderBottom: "2px solid #E1E3E7",
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontSize: 27,
            }}
          >
            <span style={{ fontSize: 34 }}>＋</span>
            <TypeText
              text="Wie viele Sterne hat die Flagge?"
              from={70}
              to={118}
            />
            <span style={{ marginLeft: "auto" }}>⌁</span>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={135} to={195}>
        <AbsoluteFill
          style={{ background: "white", display: "grid", placeItems: "center" }}
        >
          <div
            style={{
              fontSize: 69,
              letterSpacing: -3.2,
              fontWeight: 570,
              transform: `translateY(${(1 - sp(frame, frame < 165 ? 138 : 168)) * 30}px)`,
            }}
          >
            {frame < 165 ? (
              <>
                Hör <span style={{ color: "#7A86D9" }}>genauer.</span>
              </>
            ) : (
              <>
                Antworte <span style={{ color: C.red }}>sicherer.</span>
              </>
            )}
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={195} to={285}>
        <AbsoluteFill>
          <GradientField colors={["#4B8AF2", "#AADBF9", "#DEE8FF"]} />
          <Noise opacity={0.02} />
          <div
            style={{
              position: "absolute",
              left: 155,
              top: 480,
              width: 770,
              display: "grid",
              gap: 24,
            }}
          >
            {[
              ["128", "offizielle Fragen"],
              ["◉", "Audio auf Deutsch"],
              ["↻", "Fehler wiederholen"],
            ].map(([icon, label], i) => {
              const q = sp(frame, 198 + i * 10);
              return (
                <Glass
                  key={label}
                  style={{
                    height: 150,
                    borderRadius: 28,
                    padding: "0 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: 28,
                    opacity: q,
                    transform: `translateY(${(1 - q) * 45}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: [C.red, "#2A9B72", "#3478F6"][i],
                      color: "white",
                      display: "grid",
                      placeItems: "center",
                      fontSize: i === 0 ? 22 : 30,
                      fontWeight: 780,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 27, fontWeight: 700 }}>{label}</div>
                    <div
                      style={{
                        fontFamily: F.mono,
                        fontSize: 13,
                        color: C.muted,
                        marginTop: 8,
                      }}
                    >
                      {frame < 245 ? "WIRD GELADEN …" : "BEREIT ✓"}
                    </div>
                  </div>
                </Glass>
              );
            })}
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={285} to={360}>
        <AbsoluteFill
          style={{ background: "#FCFCFB", padding: "260px 150px 330px 92px" }}
        >
          <div style={{ fontFamily: F.mono, fontSize: 14, color: C.muted }}>
            ANTWORT GEPRÜFT
          </div>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.1,
              fontWeight: 650,
              letterSpacing: -2.4,
              marginTop: 42,
            }}
          >
            Wie viele Sterne hat die Flagge?
          </div>
          <div
            style={{
              fontSize: 118,
              lineHeight: 0.95,
              fontWeight: 760,
              letterSpacing: -7,
              color: C.red,
              marginTop: 90,
              transform: `scale(${1 + p(frame, 315, 360) * 1.15})`,
              transformOrigin: "left top",
            }}
          >
            Fünfzig.
          </div>
          <div
            style={{
              marginTop: 58,
              fontSize: 24,
              color: C.green,
              opacity: fade(frame, 310, 326),
            }}
          >
            Korrekt ✓
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={360} to={450}>
        <AbsoluteFill>
          <GradientField colors={["#A7B4FF", "#F3A79D", "#FFE5A2"]} />
          <Noise opacity={0.025} />
          <div style={{ position: "absolute", left: 92, right: 150, top: 280 }}>
            <BrandMark />
            <div
              style={{
                fontSize: 69,
                lineHeight: 1.02,
                fontWeight: 680,
                letterSpacing: -3.2,
                marginTop: 80,
              }}
            >
              Der Einbürgerungstest.
              <br />
              Auf Deutsch.
            </div>
            <Glass
              style={{
                marginTop: 90,
                width: 490,
                height: 104,
                borderRadius: 54,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 25,
                fontWeight: 720,
                transform: `scale(${sp(frame, 370)})`,
              }}
            >
              Jetzt kostenlos lernen&nbsp; ↗
            </Glass>
          </div>
        </AbsoluteFill>
      </Cut>
    </AbsoluteFill>
  );
};
