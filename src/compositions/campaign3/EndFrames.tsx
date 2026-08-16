import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { base, ease, fonts, muted, progress, red } from "./Shared";

const Logo: React.FC<{ width?: number; invert?: boolean }> = ({
  width = 290,
  invert,
}) => (
  <Img
    src={staticFile("CitizenlyFull.png")}
    style={{
      width,
      height: "auto",
      objectFit: "contain",
      filter: invert ? "brightness(0) invert(1)" : undefined,
    }}
  />
);
const Site: React.FC<{ color?: string }> = ({ color = red }) => (
  <div style={{ fontSize: 22, fontWeight: 780, color }}>citizenly.app →</div>
);

export const GermanEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f, 4);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.mono,
        background: "#0A0D12",
        color: "#D7FF52",
        padding: "170px 76px 300px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 15, letterSpacing: 2 }}>RESULT / 65_20</div>
      <div
        style={{
          fontSize: 92,
          lineHeight: 0.95,
          fontWeight: 700,
          letterSpacing: -5,
          marginTop: 45,
          opacity: p,
        }}
      >
        20 FRAGEN.
        <br />
        DEIN WEG.
      </div>
      <div
        style={{
          height: 1,
          background: "#D7FF52",
          margin: "70px 0 35px",
          width: `${p * 100}%`,
        }}
      />
      <div style={{ fontSize: 20, lineHeight: 1.8 }}>
        DEUTSCH
        <br />
        KOSTENLOS
        <br />
        KEINE WERBUNG
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 325,
          left: 76,
          right: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Logo width={230} invert />
        <Site color="#D7FF52" />
      </div>
    </AbsoluteFill>
  );
};
export const DutchEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.grotesk,
        background: "#FF5A45",
        color: "#151515",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 122,
          background: "#151515",
          color: "white",
          writingMode: "vertical-rl",
          padding: 35,
          fontSize: 18,
          letterSpacing: 3,
        }}
      >
        CITIZENLY / NEDERLANDS
      </div>
      <div
        style={{
          padding: "330px 135px 350px 185px",
          transform: `translateX(${(1 - p) * 90}px)`,
        }}
      >
        <div
          style={{
            fontSize: 109,
            lineHeight: 0.84,
            fontWeight: 700,
            letterSpacing: -7,
            textTransform: "uppercase",
          }}
        >
          Fout?
          <br />
          Nog
          <br />
          één keer.
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            marginTop: 65,
            maxWidth: 620,
          }}
        >
          Citizenly brengt precies terug wat je nog niet kent.
        </div>
        <div
          style={{
            marginTop: 70,
            borderTop: "4px solid #151515",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <b>GRATIS</b>
          <b>citizenly.app ↗</b>
        </div>
      </div>
    </AbsoluteFill>
  );
};
export const SwedishEnd: React.FC = () => {
  const f = useCurrentFrame();
  const w = progress(f, 10, 70);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.human,
        background: "#DCEBFA",
        padding: "240px 150px 330px 90px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: fonts.editorial,
          fontSize: 91,
          lineHeight: 0.98,
          fontWeight: 430,
          letterSpacing: -3,
        }}
      >
        Hör det.
        <br />
        <i>Förstå det.</i>
        <br />
        Minns det.
      </div>
      <div
        style={{
          marginTop: 74,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            style={{
              width: 7,
              height: 10 + w * (15 + 42 * Math.abs(Math.sin(i * 0.7))),
              background: "#245E8D",
              borderRadius: 5,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 330,
          left: 90,
          right: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo width={260} />
        <Site color="#245E8D" />
      </div>
    </AbsoluteFill>
  );
};
export const NorwegianEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.archivo,
        background: "#164B73",
        color: "white",
        padding: "170px 76px 300px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid #ffffff66",
          borderLeft: "1px solid #ffffff66",
        }}
      >
        {["DIN STAT", "DINE SVAR", "DITT SPRÅK", "DIN PLAN"].map((x, i) => (
          <div
            key={x}
            style={{
              height: 190,
              borderRight: "1px solid #ffffff66",
              borderBottom: "1px solid #ffffff66",
              padding: 24,
              fontSize: 17,
              opacity: Math.min(1, p + i * 0.05),
            }}
          >
            {x}
            <div style={{ fontSize: 39, marginTop: 48 }}>✓</div>
          </div>
        ))}
      </div>
      <div
        style={{
          fontSize: 70,
          lineHeight: 0.98,
          fontWeight: 760,
          letterSpacing: -3,
          marginTop: 80,
        }}
      >
        Ikke en generell prøve.
        <br />
        Din prøve.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 325,
          left: 76,
          right: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Logo width={235} invert />
        <Site color="white" />
      </div>
    </AbsoluteFill>
  );
};
export const DanishEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f, 5);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.mono,
        background: "#E8E4DB",
        padding: "190px 120px 320px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#FFFDF8",
          padding: "60px 48px 75px",
          boxShadow: "12px 18px 0 #1B2A4A",
          transform: `rotate(${(1 - p) * -3}deg)`,
        }}
      >
        <div style={{ fontSize: 16, letterSpacing: 2 }}>
          CITIZENLY / KVITTERING
        </div>
        <div style={{ borderTop: "2px dashed #9CA1AA", margin: "40px 0" }} />
        <div style={{ fontSize: 26, lineHeight: 2 }}>
          128 spørgsmål <span style={{ float: "right" }}>0 kr.</span>
          <br />
          46+ sprog <span style={{ float: "right" }}>0 kr.</span>
          <br />
          Reklamer <span style={{ float: "right" }}>0</span>
        </div>
        <div
          style={{
            borderTop: "4px solid #1B2A4A",
            marginTop: 35,
            paddingTop: 30,
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          TOTAL 0 KR.
        </div>
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Logo width={220} />
          <b>citizenly.app</b>
        </div>
      </div>
    </AbsoluteFill>
  );
};
export const ItalianEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.editorial,
        background: "#7B2634",
        color: "#FFF3DE",
        padding: "210px 120px 320px 90px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontFamily: fonts.human, fontSize: 16, letterSpacing: 3 }}>
        UN GIORNO ALLA VOLTA
      </div>
      <div
        style={{
          fontSize: 103,
          lineHeight: 0.91,
          fontWeight: 520,
          letterSpacing: -4,
          marginTop: 44,
          opacity: p,
        }}
      >
        Più vicino
        <br />
        <i>al tuo sì.</i>
      </div>
      <div
        style={{
          fontFamily: fonts.human,
          fontSize: 23,
          lineHeight: 1.5,
          marginTop: 65,
          maxWidth: 620,
          color: "#F6CCD2",
        }}
      >
        Studia in italiano. Gratis, senza pubblicità.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 330,
          left: 90,
          right: 150,
          borderTop: "1px solid #F6CCD277",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo width={250} invert />
        <Site color="#FFF3DE" />
      </div>
    </AbsoluteFill>
  );
};
export const PortugueseEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.archivo,
        background: "#E8FF3F",
        color: "#111",
        padding: "190px 76px 320px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 19, fontWeight: 800 }}>
        CARTÕES / QUIZ / SIMULADO / REVISÃO
      </div>
      <div
        style={{
          fontSize: 108,
          lineHeight: 0.83,
          fontWeight: 900,
          letterSpacing: -7,
          textTransform: "uppercase",
          marginTop: 55,
          transform: `scaleY(${0.85 + p * 0.15})`,
          transformOrigin: "left",
        }}
      >
        Um app.
        <br />
        Seu jeito
        <br />
        de estudar.
      </div>
      <div
        style={{
          marginTop: 70,
          height: 92,
          background: "#111",
          color: "#E8FF3F",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        <span>GRÁTIS</span>
        <span>citizenly.app ↗</span>
      </div>
    </AbsoluteFill>
  );
};
export const CatalanEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.editorial,
        background: "#F0EBDD",
        padding: "190px 90px 320px",
      }}
    >
      <div
        style={{
          borderTop: "8px double #231F20",
          borderBottom: "1px solid #231F20",
          padding: "20px 0",
          fontFamily: fonts.mono,
          fontSize: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>EDICIÓ CATALANA</span>
        <span>128 / 128 REVISADES</span>
      </div>
      <div
        style={{
          fontSize: 91,
          lineHeight: 0.92,
          fontWeight: 560,
          letterSpacing: -4,
          marginTop: 70,
          opacity: p,
        }}
      >
        Traduït per tecnologia.
        <br />
        <i>Revisat per persones.</i>
      </div>
      <div
        style={{
          columns: 2,
          columnGap: 45,
          fontSize: 19,
          lineHeight: 1.55,
          marginTop: 70,
          color: "#514D48",
        }}
      >
        Terminologia cívica comprovada per parlants natius. Preguntes i
        respostes amb àudio. Gratuït i sense anuncis.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 325,
          left: 90,
          right: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Logo width={245} />
        <Site color="#231F20" />
      </div>
    </AbsoluteFill>
  );
};
export const IndonesianEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.grotesk,
        background: "#40215D",
        color: "#FFB39D",
        padding: "210px 90px 320px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 18, letterSpacing: 3 }}>
        BAHASA INDONESIA / AKTIF
      </div>
      <div
        style={{
          fontSize: 92,
          lineHeight: 0.91,
          fontWeight: 650,
          letterSpacing: -5,
          marginTop: 50,
          opacity: p,
        }}
      >
        Bahasa yang kamu pahami.
        <br />
        <span style={{ color: "white" }}>Latihan yang kamu butuhkan.</span>
      </div>
      <div style={{ marginTop: 70, display: "flex", gap: 12 }}>
        {["128 soal", "Audio", "Gratis"].map((x) => (
          <span
            key={x}
            style={{
              border: "1px solid #FFB39D",
              padding: "15px 18px",
              fontSize: 17,
            }}
          >
            {x}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 330,
          left: 90,
          right: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo width={250} invert />
        <Site color="#FFB39D" />
      </div>
    </AbsoluteFill>
  );
};
export const TagalogEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.human,
        background: "#EAF4EE",
        padding: "210px 80px 320px",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 16, color: muted, textAlign: "center" }}>
        ANA → MAMA
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: 730,
          background: "#D1F0D9",
          borderRadius: "34px 34px 8px 34px",
          padding: "38px 42px",
          fontSize: 42,
          lineHeight: 1.14,
          fontWeight: 700,
          marginTop: 35,
          transform: `translateX(${(1 - p) * 80}px)`,
        }}
      >
        Ma, libre ito. May Tagalog at audio. ❤️
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          background: "white",
          borderRadius: "34px 34px 34px 8px",
          padding: "31px 38px",
          fontSize: 30,
          marginTop: 25,
          boxShadow: "0 12px 30px #1b2a4a12",
        }}
      >
        Sige, magsisimula ako.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 330,
          left: 80,
          right: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo width={245} />
        <Site color="#28734F" />
      </div>
    </AbsoluteFill>
  );
};
export const FinnishEnd: React.FC = () => {
  const f = useCurrentFrame();
  const p = progress(f, 5, 55);
  return (
    <AbsoluteFill
      style={{
        ...base,
        fontFamily: fonts.mono,
        background: "#F8FAFB",
        padding: "160px 76px 300px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "190px 1fr",
          height: "100%",
          borderTop: "2px solid #182D47",
        }}
      >
        <div
          style={{
            borderRight: "2px solid #182D47",
            paddingTop: 28,
            fontSize: 16,
          }}
        >
          65 / 20
          <br />
          <br />
          SUOMI
        </div>
        <div style={{ padding: "95px 0 0 55px" }}>
          <div
            style={{
              fontSize: 150,
              lineHeight: 0.8,
              fontWeight: 700,
              letterSpacing: -13,
              color: "#3979A8",
            }}
          >
            20
          </div>
          <div
            style={{
              fontSize: 54,
              lineHeight: 1.05,
              fontWeight: 700,
              marginTop: 45,
            }}
          >
            oikeaa kysymystä.
            <br />
            Selkeä reitti.
          </div>
          <div style={{ height: 5, background: "#DCE2E8", marginTop: 70 }}>
            <div
              style={{
                height: "100%",
                width: `${p * 100}%`,
                background: "#3979A8",
              }}
            />
          </div>
          <div
            style={{ position: "absolute", bottom: 330, left: 321, right: 150 }}
          >
            <Logo width={245} />
            <div style={{ fontSize: 20, marginTop: 30 }}>
              Ilmaiseksi · citizenly.app
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
