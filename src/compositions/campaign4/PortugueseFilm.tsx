import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  AmericanBackdrop,
  AppHeader,
  BrandMark,
  C,
  Cut,
  F,
  Glass,
  GradientField,
  Noise,
  page,
  Phone,
  QuestionCard,
  sp,
  TypeText,
  Wave,
} from "./Shared";

export const CitizenlyPortugueseReferenceAd: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={page}>
      <Cut from={0} to={65}>
        <AbsoluteFill>
          <AmericanBackdrop quiet />
          <div
            style={{
              position: "absolute",
              left: 92,
              right: 150,
              top: 220,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <BrandMark compact />
            <span style={{ fontFamily: F.mono, fontSize: 14, color: C.muted }}>
              PRÁTICA RÁPIDA
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              left: 105,
              right: 165,
              top: 520,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: F.mono,
                fontSize: 14,
                color: C.red,
                letterSpacing: 1.8,
              }}
            >
              1 PERGUNTA · 10 SEGUNDOS
            </div>
            <div
              style={{
                fontSize: 61,
                lineHeight: 1.02,
                letterSpacing: -3,
                fontWeight: 660,
                marginTop: 24,
              }}
            >
              Você sabe esta resposta?
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: 115,
              top: 790,
              width: 850,
              height: 108,
              border: "1px solid #E2E4E8",
              borderRadius: 54,
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
              gap: 22,
              background: "rgba(255,255,255,.88)",
              boxShadow: "0 25px 70px #17233d1a",
            }}
          >
            <span style={{ fontSize: 32 }}>＋</span>
            <TypeText
              text="Quantas estrelas há na bandeira?"
              from={8}
              to={53}
              style={{ fontSize: 25 }}
            />
            <span style={{ marginLeft: "auto", fontSize: 27 }}>◉</span>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={65} to={140}>
        <AbsoluteFill>
          <AmericanBackdrop quiet />
          <Phone
            style={{
              top: 320,
              transform: `scale(${0.84 + sp(frame, 65) * 0.16}) translateY(${(1 - sp(frame, 65)) * 120}px)`,
            }}
          >
            <AppHeader language="Português" />
            <QuestionCard
              question="Quantas estrelas há na bandeira?"
              progress={0.56}
            />
            <div
              style={{
                position: "absolute",
                left: 42,
                right: 42,
                bottom: 235,
                height: 135,
                borderRadius: 38,
                background: "#EEF3FA",
                display: "flex",
                alignItems: "center",
                padding: "0 28px",
                gap: 22,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: C.blue,
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 28,
                }}
              >
                ▶
              </div>
              <div>
                <div style={{ fontSize: 23, fontWeight: 700 }}>
                  Ouvir pergunta
                </div>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 13,
                    color: C.muted,
                    marginTop: 7,
                  }}
                >
                  ÁUDIO EM PORTUGUÊS
                </div>
              </div>
            </div>
          </Phone>
        </AbsoluteFill>
      </Cut>

      <Cut from={140} to={205}>
        <AbsoluteFill>
          <AmericanBackdrop quiet />
          <Phone
            style={{
              top: 350,
              transform: "scale(.82)",
              opacity: 0.34,
              filter: "blur(3px)",
            }}
          >
            <AppHeader language="Português" />
            <QuestionCard question="Quantas estrelas há na bandeira?" />
          </Phone>
          <Glass
            style={{
              position: "absolute",
              left: 120,
              top: 705,
              width: 840,
              height: 330,
              borderRadius: 60,
              padding: "42px 45px",
              transform: `scale(${0.75 + sp(frame, 140) * 0.25})`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: 25, fontWeight: 720 }}>
                Ouça com clareza
              </div>
              <div style={{ fontFamily: F.mono, fontSize: 14, color: C.muted }}>
                0:06
              </div>
            </div>
            <Wave color={C.blue} width={740} height={175} />
          </Glass>
        </AbsoluteFill>
      </Cut>

      <Cut from={205} to={270}>
        <AbsoluteFill>
          <AmericanBackdrop quiet />
          {[230, 300].map((size, index) => (
            <div
              key={size}
              style={{
                position: "absolute",
                left: 540,
                top: 690,
                width: size,
                height: size,
                borderRadius: "50%",
                border: `2px solid ${index === 0 ? "#C41E3A24" : "#2D5DB31C"}`,
                transform: `translate(-50%,-50%) scale(${0.86 + Math.sin(frame * 0.11 + index) * 0.04})`,
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              left: 540,
              top: 610,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: C.red,
              transform: `translateX(-50%) scale(${0.96 + Math.sin(frame * 0.2) * 0.04})`,
              boxShadow: "0 0 0 32px #C41E3A16",
              color: "white",
              display: "grid",
              placeItems: "center",
              fontSize: 48,
            }}
          >
            ●
          </div>
          <div
            style={{
              position: "absolute",
              top: 850,
              left: 100,
              right: 160,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: F.mono, fontSize: 14, color: C.muted }}>
              OUVINDO …
            </div>
            <div
              style={{
                fontSize: 75,
                fontWeight: 680,
                letterSpacing: -4,
                marginTop: 30,
              }}
            >
              {frame < 235 ? "Cin…" : "Cinquenta."}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <Wave width={650} height={105} />
            </div>
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={270} to={325}>
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
          <div
            style={{
              fontFamily: F.mono,
              fontSize: 14,
              color: C.green,
              background: "#E7F5EF",
              padding: "12px 20px",
              borderRadius: 999,
            }}
          >
            RESPOSTA CORRETA ✓
          </div>
          <div
            style={{
              fontSize: 51,
              lineHeight: 1.12,
              fontWeight: 620,
              letterSpacing: -2.2,
              marginTop: 32,
              maxWidth: 780,
            }}
          >
            Quantas estrelas há na bandeira?
          </div>
          <div
            style={{
              fontSize: 138,
              lineHeight: 1,
              fontWeight: 730,
              letterSpacing: -6,
              color: C.red,
              marginTop: 70,
            }}
          >
            Cinquenta.
          </div>
          <div
            style={{
              width: 620,
              height: 8,
              background: "#E8EAEF",
              borderRadius: 8,
              overflow: "hidden",
              marginTop: 58,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${sp(frame, 280) * 96}%`,
                background: C.green,
              }}
            />
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={325} to={385}>
        <AbsoluteFill>
          <GradientField />
          <Noise opacity={0.02} />
          <div
            style={{
              position: "absolute",
              left: 120,
              right: 180,
              top: 650,
              display: "flex",
              gap: 18,
            }}
          >
            {[
              ["▤", "Cartões"],
              ["?", "Quiz"],
              ["↻", "Revisão"],
            ].map(([icon, title], i) => {
              const q = sp(frame, 327 + i * 8);
              return (
                <Glass
                  key={title}
                  style={{
                    flex: 1,
                    height: 360,
                    borderRadius: 34,
                    padding: "34px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: q,
                    transform: `translateY(${(1 - q) * 60}px)`,
                  }}
                >
                  <div
                    style={{ fontFamily: F.mono, fontSize: 13, color: C.muted }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 22,
                        background: [C.red, C.blue, C.navy][i],
                        color: "white",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 38,
                      }}
                    >
                      {icon}
                    </div>
                    <div
                      style={{ fontSize: 23, fontWeight: 720, marginTop: 17 }}
                    >
                      {title}
                    </div>
                  </div>
                </Glass>
              );
            })}
          </div>
        </AbsoluteFill>
      </Cut>

      <Cut from={385} to={450}>
        <AbsoluteFill>
          <GradientField />
          <Noise opacity={0.02} />
          <div
            style={{
              position: "absolute",
              left: 100,
              right: 160,
              top: 430,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <BrandMark />
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 680,
                letterSpacing: -3.5,
                marginTop: 70,
              }}
            >
              Pratique em português.
              <br />
              Passe com confiança.
            </div>
            <Glass
              style={{
                width: 455,
                height: 105,
                borderRadius: 55,
                marginTop: 75,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 720,
                transform: `scale(${sp(frame, 390)})`,
              }}
            >
              Começar grátis&nbsp; ↗
            </Glass>
          </div>
        </AbsoluteFill>
      </Cut>
    </AbsoluteFill>
  );
};
