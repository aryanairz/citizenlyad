import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  AmericanBackdrop,
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
          <GradientField />
          <Noise opacity={0.025} />
          <div
            style={{
              position: "absolute",
              left: 100,
              right: 160,
              top: 560,
              textAlign: "center",
              fontFamily: F.mono,
              fontSize: 16,
              letterSpacing: 2.2,
              color: "#ffffffd4",
            }}
          >
            WÄHLE DEINE PRÜFUNGSSPRACHE
          </div>
          <Glass
            style={{
              position: "absolute",
              left: 160,
              top: 735,
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
        <AbsoluteFill>
          <AmericanBackdrop quiet />
          <div
            style={{
              position: "absolute",
              left: 88,
              right: 150,
              top: 220,
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
              left: 100,
              right: 160,
              top: 555,
              textAlign: "center",
              fontSize: 58,
              lineHeight: 1.02,
              letterSpacing: -2.7,
              fontWeight: 650,
            }}
          >
            Eine echte Prüfungsfrage.
            <div
              style={{
                fontSize: 20,
                lineHeight: 1.4,
                letterSpacing: 0,
                fontWeight: 520,
                color: C.muted,
                marginTop: 20,
              }}
            >
              Tippe. Höre. Antworte.
            </div>
          </div>
          <Glass
            style={{
              position: "absolute",
              left: 115,
              top: 820,
              width: 850,
              height: 112,
              borderRadius: 56,
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
              gap: 20,
              fontSize: 25,
            }}
          >
            <span style={{ fontSize: 34 }}>＋</span>
            <TypeText
              text="Wie viele Sterne hat die Flagge?"
              from={70}
              to={118}
            />
            <span style={{ marginLeft: "auto" }}>⌁</span>
          </Glass>
        </AbsoluteFill>
      </Cut>

      <Cut from={135} to={195}>
        <AbsoluteFill
          style={{ display: "grid", placeItems: "center" }}
        >
          <AmericanBackdrop quiet />
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              border: `1px solid ${frame < 165 ? C.blue : C.red}30`,
              transform: `scale(${0.8 + sp(frame, frame < 165 ? 138 : 168) * 0.2})`,
            }}
          />
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
                Hör <span style={{ color: C.blue }}>genauer.</span>
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
          <GradientField />
          <Noise opacity={0.02} />
          <div
            style={{
              position: "absolute",
              left: 155,
              top: 610,
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
                      background: [C.red, C.blue, C.navy][i],
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "180px 150px 300px 90px",
          }}
        >
          <AmericanBackdrop quiet />
          <div style={{ fontFamily: F.mono, fontSize: 14, color: C.blue }}>
            ANTWORT GEPRÜFT
          </div>
          <div
            style={{
              fontSize: 51,
              lineHeight: 1.1,
              fontWeight: 650,
              letterSpacing: -2.4,
              marginTop: 32,
              maxWidth: 780,
            }}
          >
            Wie viele Sterne hat die Flagge?
          </div>
          <div
            style={{
              fontSize: 142,
              lineHeight: 0.95,
              fontWeight: 760,
              letterSpacing: -7,
              color: C.red,
              marginTop: 72,
              transform: `scale(${0.92 + p(frame, 295, 320) * 0.08})`,
            }}
          >
            Fünfzig.
          </div>
          <div
            style={{
              marginTop: 42,
              fontSize: 21,
              color: C.green,
              opacity: fade(frame, 310, 326),
              background: "#E7F5EF",
              padding: "13px 21px",
              borderRadius: 30,
            }}
          >
            Korrekt ✓
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={360} to={450}>
        <AbsoluteFill>
          <GradientField />
          <Noise opacity={0.025} />
          <div
            style={{
              position: "absolute",
              left: 100,
              right: 160,
              top: 430,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BrandMark />
            <div
              style={{
                fontSize: 69,
                lineHeight: 1.02,
                fontWeight: 680,
                letterSpacing: -3.2,
                marginTop: 70,
              }}
            >
              Der Einbürgerungstest.
              <br />
              Auf Deutsch.
            </div>
            <Glass
              style={{
                marginTop: 75,
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
