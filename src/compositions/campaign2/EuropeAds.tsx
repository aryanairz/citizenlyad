import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { colors } from "../../styles/theme";
import {
  AppTop,
  BrandBug,
  Browser,
  Cursor,
  Eyebrow,
  Grain,
  KineticLine,
  Outro,
  Phone,
  clamp,
  enterSpring,
  exitOpacity,
  page,
} from "./Shared";

const fade = (frame: number, duration: number) =>
  interpolate(frame, [0, 12, duration - 15, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

const DanishHook: React.FC = () => {
  const frame = useCurrentFrame();
  const slash = clamp(frame, [26, 68], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#F5F2EC",
        opacity: exitOpacity(frame, 94, 112),
      }}
    >
      <BrandBug language="Dansk" />
      <div style={{ position: "absolute", left: 94, top: 300, right: 160 }}>
        <div
          style={{
            fontSize: 240,
            lineHeight: 0.82,
            letterSpacing: -16,
            fontWeight: 900,
            color: "#111827",
          }}
        >
          0 kr.
        </div>
        <div
          style={{
            fontSize: 240,
            lineHeight: 0.82,
            letterSpacing: -16,
            fontWeight: 900,
            color: colors.red,
            marginTop: 46,
          }}
        >
          0 reklamer.
        </div>
        <div
          style={{
            width: `${slash * 650}px`,
            height: 16,
            borderRadius: 12,
            background: colors.red,
            transform: "rotate(-3deg)",
            marginTop: 65,
          }}
        />
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.25,
            color: colors.muted,
            fontWeight: 650,
            marginTop: 75,
            opacity: enterSpring(frame, 48),
          }}
        >
          Ikke et tilbud. Sådan er Citizenly.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const LockTile: React.FC<{ title: string; icon: string; delay: number }> = ({
  title,
  icon,
  delay,
}) => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, delay);
  return (
    <div
      style={{
        height: 158,
        borderRadius: 28,
        background: "white",
        border: "1px solid #E2E4E9",
        padding: 26,
        display: "flex",
        alignItems: "center",
        gap: 22,
        opacity: p,
        transform: `translateY(${(1 - p) * 28}px)`,
        boxShadow: "0 12px 30px rgba(26,37,58,.06)",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 19,
          background: "#F3F4F6",
          display: "grid",
          placeItems: "center",
          fontSize: 29,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 790 }}>{title}</div>
        <div
          style={{
            fontSize: 16,
            color: colors.muted,
            marginTop: 7,
            fontWeight: 600,
          }}
        >
          Åben for alle
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          color: "#1D8A65",
          fontSize: 26,
          fontWeight: 850,
        }}
      >
        ✓
      </div>
    </div>
  );
};

const DanishProduct: React.FC = () => {
  const frame = useCurrentFrame();
  const browser = enterSpring(frame, 3);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#111827", opacity: fade(frame, 240) }}
    >
      <BrandBug light language="Dansk" />
      <div style={{ position: "absolute", left: 112, top: 190 }}>
        <Eyebrow color="#F05266" dark>
          Hele platformen
        </Eyebrow>
        <div style={{ marginTop: 32 }}>
          <KineticLine size={58} color="white">
            Ingen betalingsmur. Bare øvelse.
          </KineticLine>
        </div>
      </div>
      <Browser
        width={846}
        height={930}
        style={{
          position: "absolute",
          left: 96,
          top: 400,
          opacity: browser,
          transform: `translateY(${(1 - browser) * 70}px)`,
        }}
      >
        <div style={{ padding: "42px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{ fontSize: 17, color: colors.muted, fontWeight: 700 }}
              >
                DIN PLAN
              </div>
              <div style={{ fontSize: 40, fontWeight: 840, marginTop: 7 }}>
                Alt inkluderet
              </div>
            </div>
            <div style={{ fontSize: 52, color: colors.red, fontWeight: 880 }}>
              0 kr.
            </div>
          </div>
          <div style={{ height: 1, background: "#E7E8EC", margin: "32px 0" }} />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <LockTile title="Flashcards" icon="▤" delay={24} />
            <LockTile title="Quiz" icon="✓" delay={33} />
            <LockTile title="Prøvetest" icon="◷" delay={42} />
            <LockTile title="Gentagelser" icon="↻" delay={51} />
          </div>
          <div
            style={{
              marginTop: 28,
              height: 84,
              borderRadius: 23,
              background: colors.red,
              color: "white",
              display: "grid",
              placeItems: "center",
              fontSize: 26,
              fontWeight: 820,
            }}
          >
            Start gratis
          </div>
        </div>
      </Browser>
    </AbsoluteFill>
  );
};

export const CitizenlyDanishCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={112}>
      <DanishHook />
    </Sequence>
    <Sequence from={94} durationInFrames={242} premountFor={20}>
      <DanishProduct />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Gratis betyder gratis."
        subtitle="128 spørgsmål, lyd og prøver på dansk."
        background="#F5F2EC"
        accent="#C41E3A"
      />
    </Sequence>
  </AbsoluteFill>
);

const ItalianHook: React.FC = () => {
  const frame = useCurrentFrame();
  const split = clamp(frame, [34, 86], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#202946",
        opacity: exitOpacity(frame, 98, 118),
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: `${50 + split * 50}%`,
          background: "#F5EEE5",
          transformOrigin: "left",
        }}
      />
      <BrandBug language="Italiano" />
      <div
        style={{
          position: "absolute",
          left: 94,
          top: 370,
          width: 430,
          opacity: 1 - split * 0.7,
          transform: `translateX(${-split * 70}px)`,
        }}
      >
        <Eyebrow color="#C84654">Prima</Eyebrow>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1,
            letterSpacing: -4,
            color: colors.navy,
            fontWeight: 850,
            marginTop: 45,
          }}
        >
          “E se dimentico la risposta?”
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 155,
          top: 400,
          width: 520,
          opacity: split,
          transform: `translateX(${(1 - split) * 130}px)`,
        }}
      >
        <Eyebrow color="#62B495">Dopo</Eyebrow>
        <div
          style={{
            fontSize: 94,
            lineHeight: 0.98,
            letterSpacing: -5,
            color: colors.navy,
            fontWeight: 850,
            marginTop: 45,
          }}
        >
          “Sono pronto.”
        </div>
        <div
          style={{
            fontSize: 31,
            lineHeight: 1.3,
            color: colors.muted,
            fontWeight: 620,
            marginTop: 55,
          }}
        >
          La sicurezza si allena.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ItalianPractice: React.FC = () => {
  const frame = useCurrentFrame();
  const phone = spring({
    frame,
    fps: 30,
    config: { damping: 20, stiffness: 98 },
  });
  const listening = frame < 92;
  const answer = enterSpring(frame, 78);
  const glow = 16 + Math.sin(frame * 0.16) * 8;
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "linear-gradient(140deg,#F6EFE7,#E8F2EC)",
        opacity: fade(frame, 240),
      }}
    >
      <BrandBug language="Italiano" />
      <div style={{ position: "absolute", left: 115, top: 190, right: 150 }}>
        <KineticLine size={58}>
          Allenati come se fossi già al colloquio.
        </KineticLine>
      </div>
      <Phone
        width={610}
        height={1080}
        style={{
          position: "absolute",
          left: 235,
          top: 395,
          transform: `translateY(${(1 - phone) * 110}px) rotate(${(1 - phone) * 2}deg)`,
          opacity: phone,
        }}
      >
        <AppTop language="Italiano" progress={0.72} />
        <div style={{ padding: "42px 40px" }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 28,
              background: "#E7EDF5",
              display: "grid",
              placeItems: "center",
              color: colors.navy,
              fontSize: 30,
              fontWeight: 820,
            }}
          >
            US
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.15,
              letterSpacing: -1,
              fontWeight: 800,
              marginTop: 27,
            }}
          >
            Chi è stato il primo Presidente?
          </div>
          <div
            style={{
              fontSize: 20,
              lineHeight: 1.35,
              color: colors.muted,
              marginTop: 18,
            }}
          >
            Rispondi a voce, come durante il colloquio.
          </div>
          <div
            style={{
              height: 190,
              display: "grid",
              placeItems: "center",
              marginTop: 35,
            }}
          >
            {listening ? (
              <div
                style={{
                  width: 118,
                  height: 118,
                  borderRadius: "50%",
                  background: colors.red,
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 43,
                  boxShadow: `0 0 0 ${glow}px #C41E3A18`,
                }}
              >
                ●
              </div>
            ) : (
              <div
                style={{
                  width: 118,
                  height: 118,
                  borderRadius: "50%",
                  background: "#E5F5ED",
                  color: "#21805F",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 48,
                  fontWeight: 800,
                }}
              >
                ✓
              </div>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              color: colors.muted,
              fontWeight: 700,
            }}
          >
            {listening ? "Sto ascoltando…" : "Risposta corretta"}
          </div>
          <div
            style={{
              marginTop: 28,
              minHeight: 96,
              borderRadius: 24,
              background: "white",
              border: "1px solid #E4E6EB",
              display: "grid",
              placeItems: "center",
              fontSize: 31,
              fontWeight: 810,
              opacity: answer,
              transform: `scale(${0.96 + answer * 0.04})`,
            }}
          >
            George Washington.
          </div>
        </div>
      </Phone>
    </AbsoluteFill>
  );
};

export const CitizenlyItalianCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={118}>
      <ItalianHook />
    </Sequence>
    <Sequence from={98} durationInFrames={238} premountFor={20}>
      <ItalianPractice />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="La sicurezza si allena."
        subtitle="Preparati in italiano. Gratis e senza pubblicità."
        background="#202946"
        foreground="#fff"
        accent="#2B8A69"
        align="left"
      />
    </Sequence>
  </AbsoluteFill>
);

const PortugueseHook: React.FC = () => {
  const frame = useCurrentFrame();
  const words = ["FLASHCARDS", "QUIZ", "SIMULADO", "REVISÃO"];
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#092D28",
        opacity: exitOpacity(frame, 96, 116),
      }}
    >
      <Grain opacity={0.08} color="#fff" />
      <BrandBug light language="Português" />
      <div style={{ position: "absolute", left: 100, top: 285, right: 150 }}>
        <Eyebrow color="#55D6A8" dark>
          Seu jeito de estudar
        </Eyebrow>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.02,
            letterSpacing: -3,
            fontWeight: 830,
            color: "white",
            marginTop: 54,
          }}
        >
          Não existe apenas um caminho.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 720,
          width: 820,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {words.map((word, i) => {
          const p = enterSpring(frame, 20 + i * 9, 130);
          return (
            <div
              key={word}
              style={{
                height: 94,
                borderRadius: 24,
                padding: "0 28px",
                display: "flex",
                alignItems: "center",
                background: i === 2 ? "#55D6A8" : "#ffffff0c",
                border: `1px solid ${i === 2 ? "#55D6A8" : "#ffffff20"}`,
                color: i === 2 ? "#092D28" : "white",
                fontSize: 31,
                fontWeight: 820,
                letterSpacing: 0.3,
                opacity: p,
                transform: `translateX(${(1 - p) * (i % 2 ? 120 : -120)}px)`,
              }}
            >
              <span style={{ fontSize: 17, opacity: 0.55, width: 55 }}>
                0{i + 1}
              </span>
              {word}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const ModeCard: React.FC<{
  label: string;
  detail: string;
  symbol: string;
  active: boolean;
}> = ({ label, detail, symbol, active }) => (
  <div
    style={{
      height: 170,
      borderRadius: 27,
      padding: 24,
      background: active ? "#123E37" : "white",
      color: active ? "white" : colors.navy,
      border: `1px solid ${active ? "#123E37" : "#E1E5E7"}`,
      boxShadow: active ? "0 20px 44px rgba(15,57,50,.2)" : "none",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontSize: 33 }}>{symbol}</span>
      <span
        style={{
          fontSize: 13,
          letterSpacing: 1.4,
          fontWeight: 800,
          opacity: 0.55,
        }}
      >
        {active ? "AGORA" : "MODO"}
      </span>
    </div>
    <div style={{ fontSize: 23, fontWeight: 810, marginTop: 20 }}>{label}</div>
    <div style={{ fontSize: 15, opacity: 0.6, marginTop: 6 }}>{detail}</div>
  </div>
);

const PortugueseDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const browser = enterSpring(frame, 3);
  const active = Math.min(3, Math.floor(Math.max(0, frame - 24) / 30));
  const modes = [
    ["Flashcards", "Aprenda no seu ritmo", "▤"],
    ["Quiz", "Teste o que sabe", "✓"],
    ["Simulado", "Pratique com tempo", "◷"],
    ["Revisão", "Volte ao que errou", "↻"],
  ] as const;
  const cursorX = 250 + (active % 2) * 350;
  const cursorY = 250 + Math.floor(active / 2) * 190;
  const click = clamp(frame % 30, [12, 24], [0, 1]);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#EAF4F0", opacity: fade(frame, 240) }}
    >
      <BrandBug language="Português" />
      <div style={{ position: "absolute", left: 115, top: 190 }}>
        <KineticLine size={60}>Quatro modos. Um progresso.</KineticLine>
      </div>
      <Browser
        width={850}
        height={930}
        style={{
          position: "absolute",
          left: 95,
          top: 410,
          opacity: browser,
          transform: `scale(${0.96 + browser * 0.04})`,
        }}
      >
        <div style={{ padding: 38 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <div>
              <div
                style={{ fontSize: 16, color: colors.muted, fontWeight: 700 }}
              >
                SEU PAINEL
              </div>
              <div style={{ fontSize: 33, fontWeight: 830, marginTop: 5 }}>
                Continue estudando
              </div>
            </div>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                background:
                  "conic-gradient(#26886E 0deg 288deg,#E2EBE7 288deg)",
                color: "white",
                fontSize: 21,
                fontWeight: 840,
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  background: "white",
                  color: "#26886E",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                80%
              </div>
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 17 }}
          >
            {modes.map(([label, detail, symbol], i) => (
              <ModeCard
                key={label}
                label={label}
                detail={detail}
                symbol={symbol}
                active={active === i}
              />
            ))}
          </div>
          <div
            style={{
              marginTop: 27,
              height: 150,
              borderRadius: 28,
              background: "#F4F7F6",
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 16,
                fontWeight: 720,
              }}
            >
              <span>Sequência de estudo</span>
              <span style={{ color: "#26886E" }}>12 dias</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 13,
                height: 75,
                marginTop: 8,
              }}
            >
              {[0.35, 0.56, 0.42, 0.78, 0.67, 0.92, 0.8, 0.98].map((h, i) => (
                <span
                  key={i}
                  style={{
                    height: 62 * h,
                    width: 52,
                    background: i === 7 ? "#26886E" : "#CFE1DA",
                    borderRadius: 9,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <Cursor x={cursorX} y={cursorY} click={click} color="#26886E" />
      </Browser>
    </AbsoluteFill>
  );
};

export const CitizenlyPortugueseCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={116}>
      <PortugueseHook />
    </Sequence>
    <Sequence from={96} durationInFrames={240} premountFor={20}>
      <PortugueseDashboard />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Estude do seu jeito."
        subtitle="128 perguntas com áudio em português. Grátis."
        background="#092D28"
        foreground="#fff"
        accent="#2C9A78"
      />
    </Sequence>
  </AbsoluteFill>
);

const CatalanHook: React.FC = () => {
  const frame = useCurrentFrame();
  const correction = enterSpring(frame, 33, 135);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#F4EBDD",
        opacity: exitOpacity(frame, 96, 116),
      }}
    >
      <Grain opacity={0.04} />
      <BrandBug language="Català" />
      <div style={{ position: "absolute", left: 110, top: 300, right: 165 }}>
        <Eyebrow color="#9B5B36">Precisió humana</Eyebrow>
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 91,
            lineHeight: 1.05,
            letterSpacing: -3,
            color: "#2E3140",
            marginTop: 58,
          }}
        >
          En civisme, una paraula pot canviar-ho tot.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 890,
          fontFamily: "Georgia, serif",
          fontSize: 48,
          color: "#7D6755",
        }}
      >
        traducció automàtica
      </div>
      <div
        style={{
          position: "absolute",
          left: 95,
          top: 915,
          width: 560 * correction,
          height: 8,
          background: "#B33D4B",
          transform: "rotate(-2deg)",
          transformOrigin: "left",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 995,
          fontFamily: "Georgia, serif",
          fontSize: 54,
          color: "#2E3140",
          fontWeight: 700,
          opacity: correction,
          transform: `translateY(${(1 - correction) * 25}px)`,
        }}
      >
        revisió d’un parlant nadiu
      </div>
    </AbsoluteFill>
  );
};

const Annotation: React.FC<{ top: number; text: string; delay: number }> = ({
  top,
  text,
  delay,
}) => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, delay);
  return (
    <div
      style={{
        position: "absolute",
        right: 30,
        top,
        width: 225,
        padding: "14px 16px",
        borderRadius: 16,
        background: "#FFF1D2",
        border: "1px solid #E2C482",
        color: "#73512B",
        fontSize: 15,
        lineHeight: 1.25,
        fontWeight: 690,
        opacity: p,
        transform: `translateX(${(1 - p) * 35}px)`,
      }}
    >
      {text}
    </div>
  );
};

const CatalanReview: React.FC = () => {
  const frame = useCurrentFrame();
  const browser = enterSpring(frame, 4);
  const approve = enterSpring(frame, 85, 140);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#252A3B", opacity: fade(frame, 240) }}
    >
      <BrandBug light language="Català" />
      <div style={{ position: "absolute", left: 115, top: 190 }}>
        <KineticLine size={56} color="white">
          Traduït amb cura. Revisat per persones.
        </KineticLine>
      </div>
      <Browser
        width={860}
        height={920}
        style={{
          position: "absolute",
          left: 88,
          top: 410,
          opacity: browser,
          transform: `translateY(${(1 - browser) * 60}px)`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 290px",
            height: "100%",
          }}
        >
          <div style={{ padding: "50px 38px" }}>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 1.5,
                color: colors.muted,
                fontWeight: 780,
              }}
            >
              REVISIÓ · PREGUNTA 12
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 34,
                lineHeight: 1.28,
                marginTop: 38,
                color: "#2D3242",
              }}
            >
              Què és l’estat de dret?
            </div>
            <div
              style={{ height: 1, background: "#E3E5E9", margin: "34px 0" }}
            />
            <div style={{ fontSize: 18, lineHeight: 1.65, color: "#535E70" }}>
              Tothom ha de complir la llei. Els líders han d’obeir la llei. El
              govern ha d’obeir la llei.
            </div>
            <div
              style={{
                marginTop: 48,
                padding: "18px 20px",
                borderRadius: 17,
                background: "#EDF6F1",
                color: "#267357",
                fontSize: 17,
                fontWeight: 760,
                opacity: approve,
              }}
            >
              Aprovat per revisió humana ✓
            </div>
          </div>
          <div
            style={{
              background: "#F7F2E9",
              borderLeft: "1px solid #E4DED4",
              position: "relative",
              padding: "38px 26px",
            }}
          >
            <div
              style={{
                fontSize: 14,
                letterSpacing: 1.3,
                color: "#8C765E",
                fontWeight: 780,
              }}
            >
              NOTES
            </div>
            <Annotation top={100} text="Terme cívic verificat" delay={32} />
            <Annotation top={218} text="Registre formal correcte" delay={48} />
            <Annotation top={350} text="Natural en català" delay={64} />
            <div
              style={{
                position: "absolute",
                left: 30,
                right: 30,
                bottom: 38,
                display: "flex",
                alignItems: "center",
                gap: 13,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#9B5B36",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 18,
                  fontWeight: 820,
                }}
              >
                MR
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 760 }}>
                  Revisió nativa
                </div>
                <div
                  style={{ fontSize: 13, color: colors.muted, marginTop: 3 }}
                >
                  Completada
                </div>
              </div>
            </div>
          </div>
        </div>
      </Browser>
    </AbsoluteFill>
  );
};

export const CitizenlyCatalanCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={116}>
      <CatalanHook />
    </Sequence>
    <Sequence from={96} durationInFrames={240} premountFor={20}>
      <CatalanReview />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Entén la pregunta. No només la traducció."
        subtitle="128 preguntes revisades en català. Gratuït."
        background="#F4EBDD"
        accent="#9B5B36"
        align="left"
        compactLogo
      />
    </Sequence>
  </AbsoluteFill>
);
