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
  MetricPill,
  Outro,
  Phone,
  SafeFrame,
  Waveform,
  clamp,
  enterSpring,
  exitOpacity,
  page,
} from "./Shared";

const localFade = (frame: number, duration: number) =>
  interpolate(frame, [0, 12, duration - 14, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

const GermanHook: React.FC = () => {
  const frame = useCurrentFrame();
  const turn = clamp(frame, [34, 82], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#101A31",
        opacity: exitOpacity(frame, 96, 115),
      }}
    >
      <Grain opacity={0.09} color="#fff" />
      <BrandBug light language="Deutsch" />
      <SafeFrame style={{ top: 250 }}>
        <Eyebrow color="#F05B6F" dark>
          Einfacher lernen
        </Eyebrow>
        <div style={{ marginTop: 92, position: "relative", height: 620 }}>
          <div
            style={{
              fontSize: 330,
              lineHeight: 0.78,
              letterSpacing: -24,
              fontWeight: 860,
              color: "white",
              transform: `translateX(${-turn * 540}px)`,
              opacity: 1 - turn * 0.78,
            }}
          >
            128
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 300,
              fontSize: 56,
              letterSpacing: -2.4,
              fontWeight: 760,
              color: "#ffffffa3",
              transform: `translateX(${-turn * 400}px)`,
              opacity: 1 - turn,
            }}
          >
            Fragen wirken viel.
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 40,
              fontSize: 330,
              lineHeight: 0.78,
              letterSpacing: -24,
              fontWeight: 860,
              color: "#F05B6F",
              transform: `translateX(${(1 - turn) * 620}px)`,
            }}
          >
            20
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 344,
              width: 550,
              textAlign: "right",
              fontSize: 54,
              lineHeight: 1.06,
              letterSpacing: -2.2,
              fontWeight: 760,
              color: "white",
              transform: `translateX(${(1 - turn) * 620}px)`,
            }}
          >
            können der richtige Weg sein.
          </div>
        </div>
      </SafeFrame>
    </AbsoluteFill>
  );
};

const GermanSystem: React.FC = () => {
  const frame = useCurrentFrame();
  const compress = clamp(frame, [22, 80], [0, 1]);
  const panel = enterSpring(frame, 9);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#F2F1ED", opacity: localFade(frame, 225) }}
    >
      <BrandBug language="Deutsch" />
      <div style={{ position: "absolute", top: 205, left: 94 }}>
        <KineticLine size={61}>Citizenly erkennt deinen Lernweg.</KineticLine>
        <div
          style={{
            fontSize: 25,
            color: colors.muted,
            fontWeight: 600,
            marginTop: 18,
          }}
        >
          65 Jahre + 20 Jahre Permanent Resident
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 410,
          left: 92,
          width: 848,
          height: 760,
          borderRadius: 46,
          background: "#fff",
          boxShadow: "0 34px 90px rgba(24,36,60,.13)",
          overflow: "hidden",
          transform: `scale(${0.96 + panel * 0.04})`,
          opacity: panel,
        }}
      >
        <div
          style={{
            height: 88,
            padding: "0 34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E7E8EC",
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 780 }}>Deine Fragen</span>
          <span
            style={{
              fontSize: 17,
              fontWeight: 760,
              color: colors.red,
              background: "#FBEAEC",
              padding: "11px 16px",
              borderRadius: 16,
            }}
          >
            65/20 erkannt
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 34,
            top: 124,
            width: 520,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)",
            gap: 8,
            transform: `translateX(${-compress * 210}px) scale(${1 - compress * 0.13})`,
            transformOrigin: "left center",
            opacity: 1 - compress * 0.68,
          }}
        >
          {Array.from({ length: 128 }, (_, i) => (
            <span
              key={i}
              style={{
                height: 24,
                borderRadius: 7,
                background:
                  i < 20 ? colors.red : i % 7 === 0 ? "#C9CFDA" : "#E7E9EE",
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            right: 44,
            top: 130,
            width: 250,
            height: 250,
            borderRadius: 42,
            background: "#14213D",
            display: "grid",
            placeItems: "center",
            transform: `translateX(${(1 - compress) * 320}px) scale(${0.88 + compress * 0.12})`,
            boxShadow: "0 22px 50px rgba(20,33,61,.2)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 96,
                lineHeight: 1,
                fontWeight: 860,
                color: "white",
              }}
            >
              20
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#ffffffa3",
                fontWeight: 700,
                marginTop: 9,
              }}
            >
              ausgewählte Fragen
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 38,
            right: 38,
            bottom: 36,
            display: "flex",
            gap: 14,
          }}
        >
          <MetricPill label="Set" value="65/20" />
          <MetricPill label="Sprache" value="Deutsch" accent={colors.navy} />
          <MetricPill label="Preis" value="0 €" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CitizenlyGermanCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={115}>
      <GermanHook />
    </Sequence>
    <Sequence from={96} durationInFrames={235} premountFor={20}>
      <GermanSystem />
    </Sequence>
    <Sequence from={315} durationInFrames={135} premountFor={20}>
      <Outro
        title="Dein Weg. Deine Sprache."
        subtitle="Kostenlos lernen – ohne Werbung."
        background="#101A31"
        foreground="#fff"
        accent="#C41E3A"
        align="left"
      />
    </Sequence>
  </AbsoluteFill>
);

const DutchReview: React.FC = () => {
  const frame = useCurrentFrame();
  const resolve = clamp(frame, [74, 112], [0, 1]);
  const card = enterSpring(frame, 5);
  const retry = enterSpring(frame, 56);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#F8F5EE", opacity: localFade(frame, 250) }}
    >
      <Grain />
      <BrandBug language="Nederlands" />
      <SafeFrame style={{ top: 205 }}>
        <Eyebrow color="#19766F">Slim herhalen</Eyebrow>
        <div style={{ marginTop: 46 }}>
          <KineticLine size={73}>Een fout antwoord</KineticLine>
          <KineticLine size={73} delay={8} color="#19766F">
            is geen eindpunt.
          </KineticLine>
        </div>
      </SafeFrame>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 570,
          width: 780,
          height: 570,
          borderRadius: 38,
          background: "white",
          border: "1px solid #E3E0D8",
          boxShadow: "0 32px 80px rgba(27,42,74,.12)",
          padding: 48,
          transform: `translateY(${(1 - card) * 60}px) rotate(${(1 - card) * -2}deg)`,
          opacity: card,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, color: colors.muted, fontWeight: 700 }}>
            VRAAG 37
          </span>
          <span
            style={{
              fontSize: 17,
              color: resolve ? "#17815F" : colors.red,
              fontWeight: 760,
              padding: "10px 15px",
              borderRadius: 14,
              background: resolve ? "#E5F5EF" : "#FBEAEC",
            }}
          >
            {resolve > 0.5 ? "BEHEERST ✓" : "OPNIEUW"}
          </span>
        </div>
        <div
          style={{
            fontSize: 43,
            lineHeight: 1.12,
            letterSpacing: -1.4,
            fontWeight: 800,
            marginTop: 54,
          }}
        >
          Hoeveel sterren staan er op de vlag?
        </div>
        <div
          style={{
            height: 82,
            borderRadius: 22,
            border: `2px solid ${resolve > 0.5 ? "#30A379" : "#E4E6EB"}`,
            marginTop: 55,
            display: "flex",
            alignItems: "center",
            padding: "0 26px",
            fontSize: 25,
            fontWeight: 700,
            color: resolve > 0.5 ? "#167558" : colors.muted,
            background: resolve > 0.5 ? "#EDF9F4" : "#FAFAFA",
          }}
        >
          Vijftig {resolve > 0.5 ? "✓" : ""}
        </div>
        <div
          style={{
            position: "absolute",
            left: 48,
            right: 48,
            bottom: 38,
            height: 8,
            borderRadius: 8,
            background: "#ECEDEB",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${52 + resolve * 39}%`,
              background: "#19766F",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 94,
          top: 1080,
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity: retry,
          transform: `translateX(${(1 - retry) * 80}px)`,
        }}
      >
        <span style={{ fontSize: 20, color: colors.muted, fontWeight: 700 }}>
          Citizenly brengt hem terug
        </span>
        <span style={{ fontSize: 40, color: "#19766F" }}>↻</span>
      </div>
    </AbsoluteFill>
  );
};

const DutchHook: React.FC = () => {
  const frame = useCurrentFrame();
  const cross = clamp(frame, [24, 58], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#19766F",
        opacity: exitOpacity(frame, 85, 105),
      }}
    >
      <BrandBug light language="Nederlands" />
      <SafeFrame style={{ top: 345 }}>
        <div
          style={{
            fontSize: 126,
            lineHeight: 0.9,
            letterSpacing: -7,
            fontWeight: 850,
            color: "white",
          }}
        >
          Fout.
        </div>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: 32,
            fontSize: 126,
            lineHeight: 0.9,
            letterSpacing: -7,
            fontWeight: 850,
            color: "#9DD9CF",
          }}
        >
          Klaar.
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: `${cross * 105}%`,
              height: 12,
              borderRadius: 10,
              background: "#F4C85B",
              transform: "rotate(-4deg)",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.2,
            color: "white",
            fontWeight: 650,
            marginTop: 80,
            opacity: enterSpring(frame, 45),
          }}
        >
          Nee. Nog één slimme herhaling.
        </div>
      </SafeFrame>
    </AbsoluteFill>
  );
};

export const CitizenlyDutchCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={105}>
      <DutchHook />
    </Sequence>
    <Sequence from={86} durationInFrames={250} premountFor={20}>
      <DutchReview />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Oefen. Herhaal. Onthoud."
        subtitle="Gratis in het Nederlands. Zonder advertenties."
        background="#F8F5EE"
        accent="#19766F"
      />
    </Sequence>
  </AbsoluteFill>
);

const SwedishHook: React.FC = () => {
  const frame = useCurrentFrame();
  const ring = clamp(frame, [4, 66], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background:
          "radial-gradient(circle at 50% 45%,#234B7C 0%,#101B35 62%,#0B1225 100%)",
        opacity: exitOpacity(frame, 95, 115),
      }}
    >
      <BrandBug light language="Svenska" />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 540 - (240 + i * 160) / 2,
            top: 680 - (240 + i * 160) / 2,
            width: 240 + i * 160,
            height: 240 + i * 160,
            borderRadius: "50%",
            border: "2px solid rgba(112,181,255,.3)",
            transform: `scale(${0.72 + ring * 0.28})`,
            opacity: ring * (1 - i * 0.22),
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: 455,
          left: 160,
          right: 200,
          textAlign: "center",
        }}
      >
        <Eyebrow color="#79B8FF" dark>
          Audio på svenska
        </Eyebrow>
        <div style={{ marginTop: 45 }}>
          <KineticLine size={81} color="white">
            Hör frågan.
          </KineticLine>
          <KineticLine size={81} delay={9} color="#8EC7FF">
            Förstå svaret.
          </KineticLine>
        </div>
      </div>
      <div style={{ position: "absolute", left: 265, top: 905 }}>
        <Waveform color="#8EC7FF" width={550} height={210} />
      </div>
    </AbsoluteFill>
  );
};

const SwedishPlayer: React.FC = () => {
  const frame = useCurrentFrame();
  const phone = spring({
    frame,
    fps: 30,
    config: { damping: 22, stiffness: 95 },
  });
  const answer = enterSpring(frame, 76);
  const progress = clamp(frame, [26, 140], [0, 1]);
  return (
    <AbsoluteFill
      style={{ ...page, background: "#EAF2FA", opacity: localFade(frame, 235) }}
    >
      <BrandBug language="Svenska" />
      <div style={{ position: "absolute", left: 145, top: 215, width: 790 }}>
        <KineticLine size={54}>Varje fråga. Varje svar. Med ljud.</KineticLine>
      </div>
      <Phone
        width={620}
        height={1080}
        style={{
          position: "absolute",
          left: 230,
          top: 400,
          transform: `translateY(${(1 - phone) * 100}px) scale(${0.94 + phone * 0.06})`,
          opacity: phone,
        }}
      >
        <AppTop language="Svenska" progress={0.45 + progress * 0.13} />
        <div style={{ padding: "48px 42px" }}>
          <div
            style={{
              fontSize: 15,
              letterSpacing: 1.6,
              color: colors.red,
              fontWeight: 800,
            }}
          >
            FRÅGA 22
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.15,
              fontWeight: 790,
              letterSpacing: -1,
              marginTop: 18,
            }}
          >
            Hur många stjärnor finns på flaggan?
          </div>
          <div
            style={{
              marginTop: 54,
              height: 160,
              borderRadius: 30,
              background: "#EEF4FB",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Waveform color="#346DAA" bars={23} width={430} height={105} />
          </div>
          <div
            style={{
              height: 7,
              borderRadius: 7,
              background: "#DCE4EE",
              marginTop: 26,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress * 100}%`,
                height: "100%",
                borderRadius: 7,
                background: "#346DAA",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: colors.muted,
              marginTop: 9,
            }}
          >
            <span>0:00</span>
            <span>0:04</span>
          </div>
          <div
            style={{
              marginTop: 56,
              padding: "25px 28px",
              borderRadius: 24,
              border: "1px solid #DDE5EE",
              background: "white",
              opacity: answer,
              transform: `translateY(${(1 - answer) * 26}px)`,
            }}
          >
            <div style={{ fontSize: 14, color: colors.muted, fontWeight: 740 }}>
              SVAR
            </div>
            <div
              style={{
                fontSize: 31,
                color: colors.navy,
                fontWeight: 800,
                marginTop: 8,
              }}
            >
              Femtio.
            </div>
          </div>
        </div>
      </Phone>
    </AbsoluteFill>
  );
};

export const CitizenlySwedishCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={115}>
      <SwedishHook />
    </Sequence>
    <Sequence from={96} durationInFrames={240} premountFor={20}>
      <SwedishPlayer />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Lyssna. Öva. Bli redo."
        subtitle="Alla 128 frågor på svenska. Gratis."
        background="#101B35"
        foreground="#fff"
        accent="#3D78B8"
      />
    </Sequence>
  </AbsoluteFill>
);

const StateMap: React.FC<{ progress: number }> = ({ progress }) => (
  <svg
    width="500"
    height="390"
    viewBox="0 0 500 390"
    style={{ overflow: "visible" }}
  >
    <path
      d="M42 94L86 54l72 16 58-34 76 44 86-11 70 65-25 51 38 58-63 35-23 64-86-19-45 39-71-40-63 13-38-64 31-60-30-45z"
      fill="#E8F0F3"
      stroke="#A9BDC7"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M94 151C166 106 227 156 278 117S365 133 421 96"
      fill="none"
      stroke="#C7D5DC"
      strokeWidth="3"
      strokeDasharray="10 10"
    />
    <circle
      cx="255"
      cy="190"
      r={24 + progress * 16}
      fill="#C41E3A"
      opacity={0.15 + progress * 0.1}
    />
    <circle cx="255" cy="190" r="13" fill="#C41E3A" />
    <path
      d="M255 201v38"
      stroke="#C41E3A"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const NorwegianHook: React.FC = () => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, 6);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#EFF5F4",
        opacity: exitOpacity(frame, 95, 115),
      }}
    >
      <BrandBug language="Norsk" />
      <div style={{ position: "absolute", left: 126, top: 350, right: 170 }}>
        <Eyebrow color="#256C73">Personlig øving</Eyebrow>
        <div style={{ marginTop: 54 }}>
          <KineticLine size={86}>USA har 50 delstater.</KineticLine>
          <KineticLine size={86} delay={10} color="#256C73">
            Du trenger bare din.
          </KineticLine>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 290,
          top: 950,
          transform: `scale(${0.82 + p * 0.18})`,
          opacity: p,
        }}
      >
        <StateMap progress={p} />
      </div>
    </AbsoluteFill>
  );
};

const NorwegianDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const browser = enterSpring(frame, 4);
  const selected = frame > 55;
  const click = clamp(frame, [43, 57], [0, 1]);
  const cards = [
    ["Guvernør", "Tilpasset din delstat"],
    ["Senatorer", "Dine nåværende svar"],
    ["Delstatshovedstad", "Riktig for deg"],
  ] as const;
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "linear-gradient(150deg,#0E363B,#1B2A4A)",
        opacity: localFade(frame, 235),
      }}
    >
      <BrandBug light language="Norsk" />
      <div
        style={{ position: "absolute", left: 120, top: 200, color: "white" }}
      >
        <KineticLine size={55} color="white">
          Svarene oppdateres etter hvor du bor.
        </KineticLine>
      </div>
      <Browser
        width={850}
        height={920}
        dark
        style={{
          position: "absolute",
          left: 90,
          top: 405,
          transform: `translateY(${(1 - browser) * 75}px)`,
          opacity: browser,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              borderRight: "1px solid #ffffff18",
            }}
          >
            <StateMap progress={selected ? 1 : 0} />
          </div>
          <div style={{ padding: "48px 28px" }}>
            <div
              style={{
                fontSize: 14,
                color: "#ffffff76",
                letterSpacing: 1.5,
                fontWeight: 760,
              }}
            >
              DIN PROFIL
            </div>
            <div
              style={{
                marginTop: 20,
                height: 60,
                borderRadius: 17,
                background: selected ? "#ffffff" : "#ffffff0d",
                color: selected ? colors.navy : "#ffffffa0",
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
                fontSize: 19,
                fontWeight: 730,
              }}
            >
              {selected ? "Din delstat ✓" : "Velg delstat"}
            </div>
            <div
              style={{
                marginTop: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {cards.map(([title, body], i) => {
                const p = enterSpring(frame, 64 + i * 9);
                return (
                  <div
                    key={title}
                    style={{
                      padding: "19px",
                      borderRadius: 18,
                      background: "#ffffff0c",
                      border: "1px solid #ffffff16",
                      opacity: p,
                      transform: `translateX(${(1 - p) * 30}px)`,
                    }}
                  >
                    <div
                      style={{ fontSize: 18, color: "white", fontWeight: 760 }}
                    >
                      {title}
                    </div>
                    <div
                      style={{ fontSize: 14, color: "#ffffff77", marginTop: 6 }}
                    >
                      {body}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {!selected ? (
          <Cursor x={660} y={145} click={click} color="#4CA8A6" />
        ) : null}
      </Browser>
    </AbsoluteFill>
  );
};

export const CitizenlyNorwegianCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={115}>
      <NorwegianHook />
    </Sequence>
    <Sequence from={96} durationInFrames={240} premountFor={20}>
      <NorwegianDashboard />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Øv på svarene som gjelder deg."
        subtitle="På norsk. Gratis. Uten annonser."
        background="#EFF5F4"
        accent="#256C73"
        align="left"
      />
    </Sequence>
  </AbsoluteFill>
);
