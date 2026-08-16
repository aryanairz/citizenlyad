import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
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
        <AbsoluteFill style={{ background: "#FDFDFC" }}>
          <div
            style={{
              position: "absolute",
              left: 92,
              right: 150,
              top: 190,
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
              left: 90,
              right: 150,
              top: 735,
              height: 108,
              border: "1px solid #E2E4E8",
              borderRadius: 54,
              display: "flex",
              alignItems: "center",
              padding: "0 30px",
              gap: 22,
              boxShadow: "0 18px 55px #17233d0c",
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
        <AbsoluteFill style={{ background: "#F4F2EE" }}>
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
                  background: "#3478F6",
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
        <AbsoluteFill style={{ background: "#F4F2EE" }}>
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
            <Wave color="#3478F6" width={740} height={175} />
          </Glass>
        </AbsoluteFill>
      </Cut>

      <Cut from={205} to={270}>
        <AbsoluteFill style={{ background: "#FDFDFC" }}>
          <div
            style={{
              position: "absolute",
              left: 540,
              top: 560,
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
              top: 820,
              left: 120,
              right: 180,
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
          style={{ background: "#FDFDFC", padding: "310px 150px 330px 92px" }}
        >
          <div style={{ fontFamily: F.mono, fontSize: 14, color: C.green }}>
            RESPOSTA CORRETA ✓
          </div>
          <div
            style={{
              fontSize: 55,
              lineHeight: 1.12,
              fontWeight: 620,
              letterSpacing: -2.2,
              marginTop: 40,
            }}
          >
            Quantas estrelas há na bandeira?
          </div>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1,
              fontWeight: 730,
              letterSpacing: -6,
              color: C.red,
              marginTop: 90,
            }}
          >
            Cinquenta.
          </div>
          <div style={{ height: 6, background: "#E8EAEF", marginTop: 60 }}>
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
          <GradientField colors={["#83C9FF", "#89E1C4", "#FFE49B"]} />
          <Noise opacity={0.02} />
          <div
            style={{
              position: "absolute",
              left: 120,
              right: 180,
              top: 540,
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
                    <div style={{ fontSize: 55 }}>{icon}</div>
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
          <GradientField colors={["#83C9FF", "#F3A49B", "#FFE49B"]} />
          <Noise opacity={0.02} />
          <div style={{ position: "absolute", left: 92, right: 150, top: 300 }}>
            <BrandMark />
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 680,
                letterSpacing: -3.5,
                marginTop: 80,
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
                marginTop: 90,
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
