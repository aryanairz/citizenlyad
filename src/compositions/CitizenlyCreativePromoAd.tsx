import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CitizenlyIcon, CitizenlyLogo } from "../components/CitizenlyLogo";
import { colors, fontFamily } from "../styles/theme";

type VisualMode =
  | "eligibility"
  | "review"
  | "audio"
  | "state"
  | "free"
  | "confidence"
  | "features"
  | "human"
  | "languages"
  | "family"
  | "path"
  | "plan";

export type CreativePromoConfig = {
  key: string;
  compositionId: string;
  language: string;
  mode: VisualMode;
  hook: [string, string];
  subhead: string;
  featureTitle: string;
  featureBody: string;
  chips: readonly string[];
  cta: string;
  freeLabel: string;
  disclaimer: string;
  accent: string;
  softAccent: string;
};

export const creativePromoConfigs: readonly CreativePromoConfig[] = [
  {
    key: "german",
    compositionId: "CitizenlyGermanCreativeAd",
    language: "Deutsch",
    mode: "eligibility",
    hook: ["128 Fragen?", "Vielleicht nur 20."],
    subhead:
      "Wenn du 65/20 erfüllst, zeigt Citizenly dir automatisch die richtige Auswahl.",
    featureTitle: "Lerne gezielter.",
    featureBody: "Offizielle Fragen, Audio und Wiederholung – auf Deutsch.",
    chips: ["65/20", "20 Fragen", "Audio"],
    cta: "Kostenlos lernen",
    freeLabel: "Kostenlos. Keine Werbung.",
    disclaimer: "Nicht mit USCIS oder einer Behörde verbunden.",
    accent: "#C41E3A",
    softAccent: "#FBE9ED",
  },
  {
    key: "dutch",
    compositionId: "CitizenlyDutchCreativeAd",
    language: "Nederlands",
    mode: "review",
    hook: ["Fout antwoord?", "Dat komt terug."],
    subhead: "Citizenly herhaalt automatisch de vragen die je mist.",
    featureTitle: "Oefen. Herhaal. Onthoud.",
    featureBody: "Flashcards, quizzen en een oefentoets in het Nederlands.",
    chips: ["Herhalen", "Quiz", "Voortgang"],
    cta: "Begin gratis",
    freeLabel: "Gratis. Zonder advertenties.",
    disclaimer: "Niet verbonden aan USCIS of de overheid.",
    accent: "#247A73",
    softAccent: "#E6F4F2",
  },
  {
    key: "swedish",
    compositionId: "CitizenlySwedishCreativeAd",
    language: "Svenska",
    mode: "audio",
    hook: ["Hör frågan.", "Förstå svaret."],
    subhead: "Ljud på ditt språk för alla 128 frågor och svar.",
    featureTitle: "Lyssna. Öva. Bli redo.",
    featureBody: "Flashkort, quiz och tidsbegränsade övningsprov på svenska.",
    chips: ["128 frågor", "Ljud", "Övningsprov"],
    cta: "Börja gratis",
    freeLabel: "Gratis. Inga annonser.",
    disclaimer: "Inte ansluten till USCIS eller någon myndighet.",
    accent: "#376BB5",
    softAccent: "#EAF1FB",
  },
  {
    key: "norwegian",
    compositionId: "CitizenlyNorwegianCreativeAd",
    language: "Norsk",
    mode: "state",
    hook: ["Din delstat.", "Dine riktige svar."],
    subhead: "Citizenly tilpasser guvernør, senatorer og delstatshovedstad.",
    featureTitle: "Øv på det som gjelder deg.",
    featureBody: "Alle 128 spørsmål, lyd og prøvequiz på norsk.",
    chips: ["Guvernør", "Senatorer", "Hovedstad"],
    cta: "Start gratis",
    freeLabel: "Gratis. Ingen annonser.",
    disclaimer: "Ikke tilknyttet USCIS eller en offentlig etat.",
    accent: "#B9364F",
    softAccent: "#F8E9EC",
  },
  {
    key: "danish",
    compositionId: "CitizenlyDanishCreativeAd",
    language: "Dansk",
    mode: "free",
    hook: ["0 kr.", "0 reklamer."],
    subhead: "Gratis for alle, der forbereder sig til statsborgerskabsprøven.",
    featureTitle: "Ingen betalingsmur. Bare øvelse.",
    featureBody: "128 spørgsmål, lyd, quiz og repetition på dansk.",
    chips: ["Gratis", "Ingen reklamer", "Alle funktioner"],
    cta: "Kom i gang gratis",
    freeLabel: "Altid gratis.",
    disclaimer: "Ikke tilknyttet USCIS eller en offentlig myndighed.",
    accent: "#D14242",
    softAccent: "#FBECEC",
  },
  {
    key: "italian",
    compositionId: "CitizenlyItalianCreativeAd",
    language: "Italiano",
    mode: "confidence",
    hook: ["L'ansia prima.", "La sicurezza dopo."],
    subhead: "Preparati al colloquio di naturalizzazione nella tua lingua.",
    featureTitle: "Studia al tuo ritmo.",
    featureBody: "Audio, flashcard, quiz e simulazioni in italiano.",
    chips: ["Ascolta", "Esercitati", "Preparati"],
    cta: "Inizia gratis",
    freeLabel: "Gratis. Senza pubblicità.",
    disclaimer: "Non affiliato a USCIS o ad alcun ente governativo.",
    accent: "#2B8A69",
    softAccent: "#E8F5EF",
  },
  {
    key: "portuguese",
    compositionId: "CitizenlyPortugueseCreativeAd",
    language: "Português",
    mode: "features",
    hook: ["Um aplicativo.", "Quatro formas de estudar."],
    subhead: "Flashcards • Quiz • Simulado • Revisão",
    featureTitle: "Tudo em português.",
    featureBody: "128 perguntas oficiais com áudio para perguntas e respostas.",
    chips: ["Flashcards", "Quiz", "Simulado", "Revisão"],
    cta: "Comece grátis",
    freeLabel: "Grátis. Sem anúncios.",
    disclaimer: "Não afiliado ao USCIS nem a órgãos governamentais.",
    accent: "#237A57",
    softAccent: "#E6F3EC",
  },
  {
    key: "catalan",
    compositionId: "CitizenlyCatalanCreativeAd",
    language: "Català",
    mode: "human",
    hook: ["Traduït amb cura.", "Revisat per persones."],
    subhead: "Cada idioma es revisa per un parlant nadiu.",
    featureTitle: "Els termes cívics importen.",
    featureBody: "128 preguntes, àudio, qüestionaris i repàs en català.",
    chips: ["Revisió humana", "Àudio", "128 preguntes"],
    cta: "Comença gratis",
    freeLabel: "Gratuït. Sense anuncis.",
    disclaimer: "No està afiliat a USCIS ni a cap organisme governamental.",
    accent: "#C88918",
    softAccent: "#FBF3E4",
  },
  {
    key: "indonesian",
    compositionId: "CitizenlyIndonesianCreativeAd",
    language: "Bahasa Indonesia",
    mode: "languages",
    hook: ["Belajar kewarganegaraan", "dalam bahasa Anda."],
    subhead: "46+ bahasa. Audio untuk setiap pertanyaan dan jawaban.",
    featureTitle: "Pahami, jangan sekadar menghafal.",
    featureBody:
      "Kartu belajar, kuis, simulasi ujian, dan ulasan dalam Bahasa Indonesia.",
    chips: ["46+ bahasa", "Audio", "Gratis"],
    cta: "Mulai gratis",
    freeLabel: "Gratis. Tanpa iklan.",
    disclaimer: "Tidak berafiliasi dengan USCIS atau lembaga pemerintah.",
    accent: "#C63F3F",
    softAccent: "#FBEAEA",
  },
  {
    key: "tagalog",
    compositionId: "CitizenlyTagalogCreativeAd",
    language: "Tagalog",
    mode: "family",
    hook: ["Para kina Nanay at Tatay.", "Sa wikang komportable sila."],
    subhead: "Libreng paghahanda para sa U.S. citizenship test.",
    featureTitle: "Makinig. Magsanay. Magtiwala.",
    featureBody: "128 tanong, audio, flashcards, quiz, at review sa Tagalog.",
    chips: ["Para sa pamilya", "May audio", "Libre"],
    cta: "Magsimula nang libre",
    freeLabel: "Libre. Walang ads.",
    disclaimer: "Hindi kaanib ng USCIS o anumang ahensya ng gobyerno.",
    accent: "#3A68B0",
    softAccent: "#EAF0FA",
  },
  {
    key: "finnish",
    compositionId: "CitizenlyFinnishCreativeAd",
    language: "Suomi",
    mode: "path",
    hook: ["65+ ja 20 vuotta?", "Opiskele vain 20 kysymystä."],
    subhead: "Citizenly näyttää automaattisesti rajatun 65/20-kysymyssarjan.",
    featureTitle: "Selkeämpi reitti kokeeseen.",
    featureBody: "Ääni, muistikortit, visa ja harjoituskoe suomeksi.",
    chips: ["65/20", "20 kysymystä", "Oma kieli"],
    cta: "Aloita ilmaiseksi",
    freeLabel: "Ilmainen. Ei mainoksia.",
    disclaimer: "Ei liity USCISiin tai mihinkään viranomaiseen.",
    accent: "#316CA5",
    softAccent: "#E9F1F8",
  },
  {
    key: "croatian",
    compositionId: "CitizenlyCroatianCreativeAd",
    language: "Hrvatski",
    mode: "plan",
    hook: ["128 pitanja.", "Jedan jasan plan."],
    subhead: "Citizenly vas vodi od kartica do probnog testa.",
    featureTitle: "Vježbajte ono što ste propustili.",
    featureBody:
      "Zvuk, kvizovi i personalizirana državna pitanja na hrvatskom.",
    chips: ["Kartice", "Kviz", "Probni test", "Ponavljanje"],
    cta: "Počnite besplatno",
    freeLabel: "Besplatno. Bez oglasa.",
    disclaimer: "Nije povezano s USCIS-om ni državnim tijelima.",
    accent: "#B43C57",
    softAccent: "#F8E9ED",
  },
] as const;

const fadeWindow = (frame: number, duration: number) =>
  interpolate(frame, [0, 14, duration - 18, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

const BaseBackground: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => (
  <AbsoluteFill
    style={{ background: colors.warm, fontFamily, overflow: "hidden" }}
  >
    <div
      style={{
        position: "absolute",
        width: 980,
        height: 980,
        left: 50,
        top: 250,
        borderRadius: "50%",
        background: `radial-gradient(circle,${config.softAccent} 0%,rgba(247,246,242,0) 70%)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        width: 360,
        height: 360,
        right: -150,
        top: 110,
        borderRadius: "50%",
        background: config.softAccent,
        filter: "blur(30px)",
        opacity: 0.65,
      }}
    />
  </AbsoluteFill>
);

const HookScene: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const icon = spring({ frame, fps, config: { damping: 18, stiffness: 105 } });
  const first = spring({
    frame: frame - 8,
    fps,
    config: { damping: 18, stiffness: 105 },
  });
  const second = spring({
    frame: frame - 20,
    fps,
    config: { damping: 18, stiffness: 105 },
  });
  return (
    <AbsoluteFill style={{ opacity: fadeWindow(frame, 125), fontFamily }}>
      <div
        style={{
          position: "absolute",
          top: 205,
          left: 130,
          display: "flex",
          alignItems: "center",
          gap: 24,
          transform: `translateY(${interpolate(icon, [0, 1], [-30, 0])}px)`,
          opacity: icon,
        }}
      >
        <CitizenlyIcon size={86} />
        <div
          style={{
            fontSize: 27,
            color: config.accent,
            fontWeight: 850,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {config.language}
        </div>
      </div>
      <div style={{ position: "absolute", left: 130, right: 160, top: 490 }}>
        <div
          style={{
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: -3.2,
            color: colors.navy,
            fontWeight: 900,
            opacity: first,
            transform: `translateX(${interpolate(first, [0, 1], [-55, 0])}px)`,
          }}
        >
          {config.hook[0]}
        </div>
        <div
          style={{
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: -3.2,
            color: config.accent,
            fontWeight: 900,
            marginTop: 18,
            opacity: second,
            transform: `translateX(${interpolate(second, [0, 1], [55, 0])}px)`,
          }}
        >
          {config.hook[1]}
        </div>
        <div
          style={{
            width: interpolate(second, [0, 1], [0, 110]),
            height: 8,
            borderRadius: 10,
            background: config.accent,
            marginTop: 44,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const NumberVisual: React.FC<{
  config: CreativePromoConfig;
  pathMode?: boolean;
}> = ({ config, pathMode }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 34,
        height: "100%",
      }}
    >
      <div
        style={{
          width: 230,
          height: 220,
          borderRadius: 44,
          background: "#fff",
          border: `2px solid ${colors.line}`,
          display: "grid",
          placeItems: "center",
          transform: `translateX(${progress * -18}px)`,
          opacity: 1 - progress * 0.45,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 78, fontWeight: 900, color: colors.navy }}>
            {pathMode ? "128" : "128"}
          </div>
          <div style={{ fontSize: 22, color: colors.muted, fontWeight: 750 }}>
            questions
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 54,
          color: config.accent,
          fontWeight: 900,
          transform: `scale(${0.8 + progress * 0.2})`,
        }}
      >
        →
      </div>
      <div
        style={{
          width: 250,
          height: 240,
          borderRadius: 48,
          background: config.accent,
          display: "grid",
          placeItems: "center",
          transform: `scale(${0.84 + progress * 0.16})`,
          boxShadow: `0 24px 55px ${config.accent}35`,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 86, fontWeight: 900, color: "#fff" }}>20</div>
          <div style={{ fontSize: 22, color: "#fff", fontWeight: 800 }}>
            65/20
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewVisual: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  const fixed = frame >= 62;
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          style={{
            position: "absolute",
            width: 480,
            height: 150,
            borderRadius: 32,
            background: "#fff",
            border: `2px solid ${colors.line}`,
            transform: `translateY(${(item - 1) * 105}px) translateX(${Math.sin(frame * 0.05 + item) * 12}px) scale(${1 - item * 0.04})`,
            boxShadow: item === 1 ? "0 20px 50px rgba(27,42,74,.12)" : "none",
            display: "flex",
            alignItems: "center",
            padding: "0 34px",
            opacity: item === 0 ? 0.55 : 1,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 18,
              background:
                item === 1 ? (fixed ? "#E7F7F0" : "#FBE9ED") : "#EEF1F6",
              display: "grid",
              placeItems: "center",
              color:
                item === 1 ? (fixed ? colors.green : colors.red) : colors.muted,
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            {item === 1 ? (fixed ? "✓" : "×") : "?"}
          </div>
          <div style={{ marginLeft: 24, flex: 1 }}>
            <div
              style={{
                height: 13,
                width: item === 1 ? "88%" : "72%",
                borderRadius: 8,
                background: colors.navy,
                opacity: 0.82,
              }}
            />
            <div
              style={{
                height: 10,
                width: "55%",
                borderRadius: 8,
                background: colors.line,
                marginTop: 16,
              }}
            />
          </div>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          right: 76,
          width: 92,
          height: 92,
          border: `5px dashed ${config.accent}`,
          borderRadius: "50%",
          transform: `rotate(${frame * 3}deg)`,
          opacity: 0.75,
        }}
      />
    </div>
  );
};

const AudioVisual: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 176,
          height: 176,
          borderRadius: "50%",
          background: config.accent,
          display: "grid",
          placeItems: "center",
          left: 90,
          boxShadow: `0 0 0 ${18 + Math.sin(frame * 0.18) * 8}px ${config.accent}22`,
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "26px solid transparent",
            borderBottom: "26px solid transparent",
            borderLeft: "42px solid white",
            marginLeft: 10,
          }}
        />
      </div>
      <div
        style={{
          marginLeft: 245,
          display: "flex",
          alignItems: "center",
          gap: 9,
        }}
      >
        {Array.from({ length: 22 }, (_, i) => {
          const height = 34 + Math.abs(Math.sin(frame * 0.22 + i * 0.61)) * 125;
          return (
            <div
              key={i}
              style={{
                width: 11,
                height,
                borderRadius: 12,
                background: i % 5 === 0 ? config.accent : colors.navy,
                opacity: 0.86,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const StateVisual: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  const labels = ["Governor", "Senators", "State capital"];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 34,
      }}
    >
      <div
        style={{
          width: 230,
          height: 260,
          borderRadius: 46,
          background: config.softAccent,
          position: "relative",
          display: "grid",
          placeItems: "center",
        }}
      >
        <svg width="170" height="150" viewBox="0 0 190 150">
          <path
            d="M15 45l24-23 28 8 22-15 25 18 42-2 18 29-18 18 12 28-35 26-43-8-24 14-31-28 8-28z"
            fill={config.accent}
            opacity=".2"
            stroke={config.accent}
            strokeWidth="4"
          />
          <circle cx="105" cy="72" r="14" fill={config.accent} />
          <path d="M105 86l-12 27h24z" fill={config.accent} />
        </svg>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {labels.map((label, i) => (
          <div
            key={label}
            style={{
              width: 330,
              height: 72,
              borderRadius: 24,
              background: "#fff",
              border: `2px solid ${colors.line}`,
              display: "flex",
              alignItems: "center",
              padding: "0 24px",
              transform: `translateX(${interpolate(frame - i * 5, [0, 20], [35, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: config.accent,
                marginRight: 18,
              }}
            />
            <span style={{ fontSize: 23, fontWeight: 780, color: colors.navy }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FreeVisual: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      <div
        style={{
          fontSize: 170,
          fontWeight: 950,
          color: config.accent,
          letterSpacing: -8,
          transform: `scale(${1 + Math.sin(frame * 0.1) * 0.025})`,
        }}
      >
        0
      </div>
      <div style={{ position: "absolute", top: 345, display: "flex", gap: 18 }}>
        {["PAYWALL", "ADS", "FEES"].map((text, i) => (
          <div
            key={text}
            style={{
              padding: "16px 24px",
              borderRadius: 18,
              background: "#fff",
              border: `2px solid ${colors.line}`,
              fontSize: 20,
              fontWeight: 850,
              color: colors.muted,
              transform: `rotate(${i % 2 ? -3 : 3}deg)`,
            }}
          >
            <span
              style={{
                textDecoration: "line-through",
                textDecorationColor: config.accent,
                textDecorationThickness: 4,
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConfidenceVisual: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  const ready = interpolate(frame, [22, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 38,
      }}
    >
      {[false, true].map((good) => (
        <div
          key={String(good)}
          style={{
            width: 260,
            height: 290,
            borderRadius: 48,
            background: good ? config.accent : "#fff",
            border: `2px solid ${good ? config.accent : colors.line}`,
            display: "grid",
            placeItems: "center",
            opacity: good ? ready : 1 - ready * 0.55,
            transform: `translateY(${good ? (1 - ready) * 35 : ready * -18}px)`,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: good ? "rgba(255,255,255,.18)" : config.softAccent,
                margin: "0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 25,
                  top: 35,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: good ? "#fff" : colors.navy,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 25,
                  top: 35,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: good ? "#fff" : colors.navy,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 30,
                  top: 66,
                  width: 40,
                  height: 18,
                  borderBottom: `5px solid ${good ? "#fff" : colors.navy}`,
                  borderRadius: "50%",
                  transform: good ? "none" : "rotate(180deg)",
                }}
              />
            </div>
            <div
              style={{
                fontSize: 25,
                fontWeight: 850,
                color: good ? "#fff" : colors.navy,
                marginTop: 28,
              }}
            >
              {good ? "READY" : "BEFORE"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FeatureOrbitVisual: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 52,
          background: colors.navy,
          display: "grid",
          placeItems: "center",
          boxShadow: "0 26px 55px rgba(27,42,74,.2)",
        }}
      >
        <CitizenlyIcon size={120} />
      </div>
      {config.chips.slice(0, 4).map((chip, i) => {
        const angle = (i * Math.PI) / 2 + frame * 0.012;
        return (
          <div
            key={chip}
            style={{
              position: "absolute",
              left: 310 + Math.cos(angle) * 245,
              top: 215 + Math.sin(angle) * 165,
              padding: "18px 24px",
              borderRadius: 22,
              background: i === 0 ? config.accent : "#fff",
              color: i === 0 ? "#fff" : colors.navy,
              border: `2px solid ${i === 0 ? config.accent : colors.line}`,
              fontSize: 22,
              fontWeight: 850,
              whiteSpace: "nowrap",
            }}
          >
            {chip}
          </div>
        );
      })}
    </div>
  );
};

const HumanVisual: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  const stamp = spring({
    frame: frame - 30,
    fps: 30,
    config: { damping: 13, stiffness: 140 },
  });
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      <div
        style={{
          width: 570,
          height: 330,
          borderRadius: 44,
          background: "#fff",
          border: `2px solid ${colors.line}`,
          padding: 42,
          boxShadow: "0 24px 60px rgba(27,42,74,.12)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: colors.muted,
            letterSpacing: 1.5,
          }}
        >
          CIVICS TRANSLATION
        </div>
        <div
          style={{
            height: 16,
            width: "90%",
            background: colors.navy,
            borderRadius: 10,
            marginTop: 30,
            opacity: 0.85,
          }}
        />
        <div
          style={{
            height: 13,
            width: "72%",
            background: colors.line,
            borderRadius: 10,
            marginTop: 18,
          }}
        />
        <div
          style={{
            height: 13,
            width: "82%",
            background: colors.line,
            borderRadius: 10,
            marginTop: 14,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 75,
            bottom: 70,
            width: 210,
            height: 90,
            border: `6px solid ${config.accent}`,
            borderRadius: 24,
            display: "grid",
            placeItems: "center",
            color: config.accent,
            fontSize: 22,
            fontWeight: 900,
            transform: `rotate(-8deg) scale(${stamp})`,
            background: config.softAccent,
          }}
        >
          HUMAN ✓
        </div>
      </div>
    </div>
  );
};

const LanguagesVisual: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  const labels = [
    "English",
    "Español",
    "Deutsch",
    "Tagalog",
    "Suomi",
    "Português",
    "Hrvatski",
    "Norsk",
  ];
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 290,
          top: 125,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: config.accent,
          display: "grid",
          placeItems: "center",
          color: "#fff",
          fontSize: 64,
          fontWeight: 950,
          boxShadow: `0 20px 55px ${config.accent}44`,
        }}
      >
        46+
      </div>
      {labels.map((label, i) => {
        const a = (i / labels.length) * Math.PI * 2 + frame * 0.006;
        return (
          <div
            key={label}
            style={{
              position: "absolute",
              left: 350 + Math.cos(a) * 285,
              top: 205 + Math.sin(a) * 190,
              padding: "14px 20px",
              borderRadius: 20,
              background: "#fff",
              border: `2px solid ${colors.line}`,
              fontSize: 19,
              fontWeight: 800,
              color: colors.navy,
              transform: "translate(-50%,-50%)",
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

const FamilyVisual: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }}
    >
      {[0, 1, 2].map((i) => {
        const scale = spring({
          frame: frame - i * 8,
          fps: 30,
          config: { damping: 17, stiffness: 110 },
        });
        return (
          <div
            key={i}
            style={{
              width: i === 1 ? 190 : 155,
              height: i === 1 ? 310 : 270,
              borderRadius: "90px 90px 40px 40px",
              background:
                i === 1 ? config.accent : i === 0 ? colors.navy : "#fff",
              border: i === 2 ? `3px solid ${colors.line}` : "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingTop: 30,
              boxSizing: "border-box",
              transform: `scale(${scale})`,
              boxShadow: "0 22px 50px rgba(27,42,74,.12)",
            }}
          >
            <div
              style={{
                width: i === 1 ? 95 : 78,
                height: i === 1 ? 95 : 78,
                borderRadius: "50%",
                background:
                  i === 2 ? config.softAccent : "rgba(255,255,255,.28)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const PlanVisual: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  const steps = ["1", "2", "3", "4"];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 12,
          borderRadius: 10,
          background: colors.line,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 110,
          width: interpolate(frame, [10, 80], [0, 560], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          height: 12,
          borderRadius: 10,
          background: config.accent,
        }}
      />
      {steps.map((step, i) => (
        <div
          key={step}
          style={{
            width: 104,
            height: 104,
            borderRadius: 34,
            background: frame > 18 + i * 15 ? config.accent : "#fff",
            border: `3px solid ${frame > 18 + i * 15 ? config.accent : colors.line}`,
            display: "grid",
            placeItems: "center",
            color: frame > 18 + i * 15 ? "#fff" : colors.muted,
            fontSize: 34,
            fontWeight: 900,
            margin: "0 22px",
            zIndex: 2,
          }}
        >
          {frame > 18 + i * 15 ? "✓" : step}
        </div>
      ))}
    </div>
  );
};

const VisualMetaphor: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  switch (config.mode) {
    case "eligibility":
      return <NumberVisual config={config} />;
    case "path":
      return <NumberVisual config={config} pathMode />;
    case "review":
      return <ReviewVisual config={config} />;
    case "audio":
      return <AudioVisual config={config} />;
    case "state":
      return <StateVisual config={config} />;
    case "free":
      return <FreeVisual config={config} />;
    case "confidence":
      return <ConfidenceVisual config={config} />;
    case "features":
      return <FeatureOrbitVisual config={config} />;
    case "human":
      return <HumanVisual config={config} />;
    case "languages":
      return <LanguagesVisual config={config} />;
    case "family":
      return <FamilyVisual config={config} />;
    case "plan":
      return <PlanVisual config={config} />;
  }
};

const FeatureScene: React.FC<{ config: CreativePromoConfig }> = ({
  config,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 19, stiffness: 95 } });
  return (
    <AbsoluteFill style={{ fontFamily, opacity: fadeWindow(frame, 210) }}>
      <div
        style={{
          position: "absolute",
          left: 130,
          right: 160,
          top: 205,
          opacity: enter,
          transform: `translateY(${interpolate(enter, [0, 1], [35, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: 53,
            lineHeight: 1.05,
            letterSpacing: -1.8,
            color: colors.navy,
            fontWeight: 900,
          }}
        >
          {config.featureTitle}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            color: colors.muted,
            fontWeight: 650,
            marginTop: 18,
          }}
        >
          {config.featureBody}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 520,
          width: 800,
          height: 570,
          borderRadius: 64,
          background: "rgba(255,255,255,.78)",
          border: "2px solid rgba(228,231,237,.9)",
          boxShadow: "0 35px 90px rgba(27,42,74,.12)",
          overflow: "hidden",
        }}
      >
        <VisualMetaphor config={config} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 130,
          right: 170,
          top: 1160,
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        {config.chips.map((chip, i) => (
          <div
            key={chip}
            style={{
              padding: "15px 22px",
              borderRadius: 18,
              background: i === 0 ? config.accent : "#fff",
              color: i === 0 ? "#fff" : colors.navy,
              border: `2px solid ${i === 0 ? config.accent : colors.line}`,
              fontSize: 20,
              fontWeight: 820,
            }}
          >
            {chip}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC<{ config: CreativePromoConfig }> = ({ config }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 19, stiffness: 95 } });
  const button = spring({
    frame: frame - 22,
    fps,
    config: { damping: 16, stiffness: 120 },
  });
  return (
    <AbsoluteFill
      style={{
        fontFamily,
        opacity: interpolate(frame, [0, 16], [0, 1], {
          extrapolateRight: "clamp",
        }),
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 290,
          left: 130,
          right: 170,
          display: "flex",
          justifyContent: "center",
          opacity: enter,
          transform: `translateY(${interpolate(enter, [0, 1], [-35, 0])}px)`,
        }}
      >
        <CitizenlyLogo width={570} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 130,
          right: 170,
          top: 680,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.06,
            letterSpacing: -2.4,
            color: colors.navy,
            fontWeight: 920,
          }}
        >
          {config.cta}
        </div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.35,
            color: colors.muted,
            fontWeight: 700,
            marginTop: 28,
          }}
        >
          {config.freeLabel}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 190,
          right: 230,
          top: 1060,
          height: 116,
          borderRadius: 34,
          background: config.accent,
          display: "grid",
          placeItems: "center",
          boxShadow: `0 24px 60px ${config.accent}44`,
          transform: `scale(${button})`,
        }}
      >
        <span
          style={{
            fontSize: 38,
            color: "#fff",
            fontWeight: 900,
            letterSpacing: 0.2,
          }}
        >
          citizenly.app
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 150,
          right: 190,
          top: 1335,
          textAlign: "center",
          fontSize: 20,
          lineHeight: 1.35,
          color: colors.muted,
          fontWeight: 650,
        }}
      >
        {config.disclaimer}
      </div>
    </AbsoluteFill>
  );
};

export const CitizenlyCreativePromoAd: React.FC<{ promoKey?: string }> = ({
  promoKey = "german",
}) => {
  const config =
    creativePromoConfigs.find((candidate) => candidate.key === promoKey) ??
    creativePromoConfigs[0];
  return (
    <AbsoluteFill>
      <BaseBackground config={config} />
      <Sequence durationInFrames={125} premountFor={30}>
        <HookScene config={config} />
      </Sequence>
      <Sequence from={105} durationInFrames={210} premountFor={30}>
        <FeatureScene config={config} />
      </Sequence>
      <Sequence from={295} durationInFrames={155} premountFor={30}>
        <CtaScene config={config} />
      </Sequence>
    </AbsoluteFill>
  );
};
