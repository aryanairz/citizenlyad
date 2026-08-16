import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CitizenlyIcon } from "../../components/CitizenlyLogo";
import {
  ease,
  fonts,
  FullApp,
  muted,
  navy,
  progress,
  red,
  Wave,
} from "./Shared";

const Panel: React.FC<
  React.PropsWithChildren<{ style?: React.CSSProperties }>
> = ({ children, style }) => (
  <div style={{ background: "white", border: "1px solid #DFE3E9", ...style }}>
    {children}
  </div>
);

export const EligibilityDiagnostic: React.FC = () => {
  const f = useCurrentFrame();
  const scan = progress(f, 35, 95);
  const result = ease(f, 105);
  return (
    <FullApp
      language="Deutsch"
      section="SYSTEM / LERNWEG"
      font={fonts.mono}
      header="index"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "330px 1fr",
          height: 1828,
        }}
      >
        <div
          style={{
            borderRight: "1px solid #E0E3E8",
            padding: "72px 42px",
            background: "#F4F4F1",
          }}
        >
          {["Profil", "Ausnahme prüfen", "Fragensatz", "Fortschritt"].map(
            (x, i) => (
              <div
                key={x}
                style={{
                  fontSize: 20,
                  fontWeight: i === 1 ? 780 : 570,
                  color: i === 1 ? navy : muted,
                  padding: "20px 18px",
                  borderLeft:
                    i === 1 ? `3px solid ${red}` : "3px solid transparent",
                }}
              >
                {x}
              </div>
            ),
          )}
        </div>
        <div style={{ padding: "95px 84px" }}>
          <div style={{ fontSize: 54, fontWeight: 820, letterSpacing: -2.2 }}>
            Welcher Fragensatz gilt für dich?
          </div>
          <div style={{ fontSize: 22, color: muted, marginTop: 14 }}>
            Drei Angaben. Eine klare Antwort.
          </div>
          <div style={{ marginTop: 68, display: "grid", gap: 18 }}>
            {[
              ["Alter", "65+"],
              ["Jahre als Permanent Resident", "20"],
              ["Prüfungssprache", "Deutsch"],
            ].map(([a, b], i) => (
              <Panel
                key={a}
                style={{
                  height: 106,
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: ease(f, i * 9),
                }}
              >
                <span style={{ fontSize: 21, color: muted }}>{a}</span>
                <span style={{ fontSize: 24, fontWeight: 780 }}>{b} ✓</span>
              </Panel>
            ))}
          </div>
          <div
            style={{
              height: 3,
              background: "#E6E8EC",
              marginTop: 55,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${scan * 100}%`,
                height: "100%",
                background: red,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 55,
              opacity: result,
              transform: `translateY(${(1 - result) * 25}px)`,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: "#2D7D61",
                fontWeight: 790,
                textTransform: "uppercase",
                letterSpacing: 1.7,
              }}
            >
              Passender Lernweg gefunden
            </div>
            <div
              style={{
                fontSize: 140,
                lineHeight: 1,
                fontWeight: 860,
                letterSpacing: -9,
                marginTop: 20,
              }}
            >
              20
            </div>
            <div style={{ fontSize: 30, fontWeight: 680 }}>
              statt 128 Fragen
            </div>
            <div style={{ fontSize: 19, color: muted, marginTop: 18 }}>
              Citizenly zeigt automatisch den 65/20-Fragensatz.
            </div>
          </div>
        </div>
      </div>
    </FullApp>
  );
};

export const ReviewCommand: React.FC = () => {
  const f = useCurrentFrame();
  const typed = Math.floor(progress(f, 10, 65) * 24);
  const done = ease(f, 100);
  const command = "Gemiste vragen herhalen";
  return (
    <FullApp
      language="Nederlands"
      dark
      section="COMMAND"
      font={fonts.grotesk}
      header="quiet"
    >
      <div
        style={{
          position: "absolute",
          inset: "92px 0 0",
          background: "#0E1421",
          padding: "220px 88px",
        }}
      >
        <div style={{ fontSize: 19, color: "#8D98AD", marginBottom: 24 }}>
          Citizenly / snelle actie
        </div>
        <div
          style={{
            height: 116,
            borderTop: "1px solid #344056",
            borderBottom: "1px solid #344056",
            display: "flex",
            alignItems: "center",
            gap: 25,
            fontSize: 35,
            color: "white",
          }}
        >
          <span style={{ color: "#EF5A6F" }}>⌘</span>
          {command.slice(0, typed)}
          <span
            style={{
              width: 3,
              height: 43,
              background: "white",
              opacity: f % 20 < 10 ? 1 : 0,
            }}
          />
        </div>
        <div
          style={{
            marginTop: 70,
            color: "#6F7B90",
            fontSize: 17,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Resultaat
        </div>
        <div
          style={{
            marginTop: 25,
            opacity: done,
            transform: `translateY(${(1 - done) * 40}px)`,
            borderLeft: "3px solid #EF5A6F",
            padding: "25px 0 25px 30px",
          }}
        >
          <div style={{ color: "white", fontSize: 36, fontWeight: 760 }}>
            Hoeveel sterren staan er op de vlag?
          </div>
          <div style={{ color: "#8E9AAF", fontSize: 22, marginTop: 13 }}>
            Je miste deze gisteren.
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 30,
              color: "#78D5B5",
              fontWeight: 760,
            }}
          >
            Vijftig ✓
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 360,
            left: 88,
            right: 150,
            display: "flex",
            justifyContent: "space-between",
            color: "#778298",
            fontSize: 18,
          }}
        >
          <span>1 vraag teruggebracht</span>
          <span>Enter om verder te gaan ↵</span>
        </div>
      </div>
    </FullApp>
  );
};

export const AudioPlayer: React.FC = () => {
  const f = useCurrentFrame();
  const play = progress(f, 20, 190);
  const answer = ease(f, 105);
  return (
    <FullApp
      language="Svenska"
      section="Ljudövning"
      background="#EAF1F7"
      font={fonts.human}
      header="quiet"
    >
      <div style={{ padding: "105px 95px" }}>
        <div
          style={{
            fontSize: 18,
            color: "#42709A",
            fontWeight: 790,
            letterSpacing: 1.5,
          }}
        >
          FRÅGA 22 · CIVICS
        </div>
        <div
          style={{
            fontSize: 66,
            lineHeight: 1.05,
            fontWeight: 810,
            letterSpacing: -3,
            marginTop: 25,
            maxWidth: 800,
          }}
        >
          Hur många stjärnor finns på flaggan?
        </div>
        <div
          style={{
            marginTop: 85,
            borderTop: "1px solid #BFCBD6",
            borderBottom: "1px solid #BFCBD6",
            height: 330,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Wave frame={f} color="#346DAA" width={820} bars={39} />
          <div style={{ height: 4, background: "#CCD6DE" }}>
            <div
              style={{
                height: "100%",
                width: `${play * 100}%`,
                background: "#346DAA",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 16,
              color: muted,
              fontSize: 17,
            }}
          >
            <span>0:{String(Math.floor(play * 12)).padStart(2, "0")}</span>
            <span>0:12</span>
          </div>
        </div>
        <div style={{ marginTop: 65, opacity: answer }}>
          <div
            style={{
              fontSize: 17,
              color: muted,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Svar
          </div>
          <div
            style={{
              fontSize: 73,
              fontWeight: 830,
              letterSpacing: -3,
              marginTop: 14,
            }}
          >
            Femtio.
          </div>
        </div>
      </div>
    </FullApp>
  );
};

export const StateProfile: React.FC = () => {
  const f = useCurrentFrame();
  const select = progress(f, 35, 75);
  const update = ease(f, 92);
  return (
    <FullApp
      language="Norsk"
      section="DIN DELSTAT"
      font={fonts.archivo}
      header="index"
    >
      <div style={{ padding: "95px 88px" }}>
        <div style={{ fontSize: 51, fontWeight: 820, letterSpacing: -2 }}>
          Svarene som gjelder der du bor.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 64,
            marginTop: 70,
          }}
        >
          <div>
            <div style={{ fontSize: 17, color: muted, marginBottom: 13 }}>
              Delstat
            </div>
            <div
              style={{
                height: 88,
                borderBottom: `2px solid ${select > 0.5 ? red : navy}`,
                fontSize: 30,
                fontWeight: 750,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Minnesota <span>⌄</span>
            </div>
            <div
              style={{
                marginTop: 55,
                fontSize: 18,
                color: muted,
                lineHeight: 1.5,
              }}
            >
              Citizenly tilpasser spørsmål om guvernør, senatorer og
              delstatshovedstad.
            </div>
          </div>
          <div style={{ borderLeft: "1px solid #DDE1E7", paddingLeft: 55 }}>
            {[
              ["Guvernør", "Tim Walz"],
              ["Senator", "Amy Klobuchar"],
              ["Hovedstad", "Saint Paul"],
            ].map(([a, b], i) => (
              <div
                key={a}
                style={{
                  padding: "28px 0",
                  borderBottom: "1px solid #E3E6EA",
                  opacity: update,
                  transform: `translateX(${(1 - update) * (25 + i * 12)}px)`,
                }}
              >
                <div style={{ fontSize: 16, color: muted }}>{a}</div>
                <div style={{ fontSize: 31, fontWeight: 770, marginTop: 8 }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 90,
            fontSize: 105,
            fontWeight: 860,
            letterSpacing: -7,
            color: red,
          }}
        >
          Ikke generisk.
        </div>
        <div style={{ fontSize: 44, fontWeight: 750 }}>
          Ditt faktiske prøvestoff.
        </div>
      </div>
    </FullApp>
  );
};

export const PricingMemo: React.FC = () => {
  const f = useCurrentFrame();
  const strike = progress(f, 30, 65);
  const stamp = ease(f, 93);
  return (
    <FullApp
      language="Dansk"
      section="NOTAT 001"
      font={fonts.mono}
      header="index"
    >
      <div style={{ padding: "90px 95px" }}>
        <div style={{ fontSize: 18, color: muted }}>
          INTERN NOTAT · PRISBESLUTNING
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 830,
            letterSpacing: -3.5,
            marginTop: 35,
          }}
        >
          Hvad skal adgang koste?
        </div>
        <div
          style={{
            marginTop: 80,
            fontSize: 110,
            fontWeight: 820,
            position: "relative",
            display: "inline-block",
            color: "#9AA1AE",
          }}
        >
          Abonnement
          <div
            style={{
              position: "absolute",
              left: -10,
              right: -10,
              top: "52%",
              height: 9,
              background: red,
              transform: `scaleX(${strike})`,
              transformOrigin: "left",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 50,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "#DDE1E7",
            border: "1px solid #DDE1E7",
          }}
        >
          {[
            ["Pris", "0 kr."],
            ["Reklamer", "Ingen"],
            ["Sprog", "46+"],
            ["Spørgsmål", "128"],
          ].map(([a, b]) => (
            <div
              key={a}
              style={{ height: 170, background: "#FBFBFA", padding: 30 }}
            >
              <div style={{ fontSize: 17, color: muted }}>{a}</div>
              <div style={{ fontSize: 48, fontWeight: 820, marginTop: 20 }}>
                {b}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 70,
            opacity: stamp,
            display: "inline-block",
            border: `4px solid ${red}`,
            color: red,
            padding: "20px 29px",
            fontSize: 30,
            fontWeight: 850,
            transform: `rotate(-3deg) scale(${0.85 + stamp * 0.15})`,
          }}
        >
          GODKENDT: GRATIS
        </div>
      </div>
    </FullApp>
  );
};

export const StudyTimeline: React.FC = () => {
  const f = useCurrentFrame();
  const line = progress(f, 15, 170);
  const items = [
    ["Oggi", "5 schede"],
    ["Domani", "Quiz rapido"],
    ["Venerdì", "Prova simulata"],
    ["Dopo", "Ripassa gli errori"],
  ];
  return (
    <FullApp
      language="Italiano"
      section="Piano di studio"
      background="#FAF6F0"
      font={fonts.editorial}
      header="quiet"
    >
      <div style={{ padding: "92px 94px" }}>
        <div
          style={{
            fontFamily: fonts.editorial,
            fontSize: 72,
            lineHeight: 1.04,
            letterSpacing: -2.4,
          }}
        >
          Un piccolo passo,
          <br />
          ogni giorno.
        </div>
        <div style={{ marginTop: 80, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 20,
              width: 3,
              height: line * 520,
              background: "#B9473F",
            }}
          />
          {items.map(([day, task], i) => {
            const p = ease(f, 20 + i * 27);
            return (
              <div
                key={day}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 170px 1fr",
                  alignItems: "start",
                  minHeight: 145,
                  opacity: p,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: i === 0 ? "#B9473F" : "#FAF6F0",
                    border: "3px solid #B9473F",
                    zIndex: 2,
                  }}
                />
                <div style={{ fontSize: 18, color: muted, paddingTop: 8 }}>
                  {day}
                </div>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 740,
                    paddingTop: 2,
                    borderBottom: "1px solid #DDD4CA",
                    paddingBottom: 34,
                  }}
                >
                  {task}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            fontFamily: fonts.editorial,
            fontSize: 48,
            fontStyle: "italic",
            marginTop: 55,
          }}
        >
          Fino al colloquio.
        </div>
      </div>
    </FullApp>
  );
};

export const FeatureCanvas: React.FC = () => {
  const f = useCurrentFrame();
  const x = interpolate(progress(f, 0, 220), [0, 1], [0, -1860]);
  const features = [
    ["Cartões", "Ouça e memorize"],
    ["Quiz", "Responda sem pressão"],
    ["Simulado", "Treine com o tempo"],
    ["Revisão", "Volte ao que errou"],
  ];
  return (
    <FullApp
      language="Português"
      section="MODOS 01—04"
      font={fonts.archivo}
      header="index"
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 92,
          bottom: 0,
          overflow: "hidden",
          background: "#ECEAE5",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            position: "absolute",
            left: 90,
            top: 230,
            transform: `translateX(${x}px)`,
          }}
        >
          {features.map(([title, note], i) => (
            <div
              key={title}
              style={{
                width: 580,
                height: 870,
                background: i % 2 ? navy : "#FFF",
                color: i % 2 ? "white" : navy,
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{ fontSize: 18, color: i % 2 ? "#ffffff80" : muted }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontSize: 62,
                    fontWeight: 830,
                    letterSpacing: -2.8,
                    marginTop: 20,
                  }}
                >
                  {title}
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: 260,
                    borderTop: `1px solid ${i % 2 ? "#ffffff33" : "#DADDE2"}`,
                    borderBottom: `1px solid ${i % 2 ? "#ffffff33" : "#DADDE2"}`,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 100,
                  }}
                >
                  {["▤", "?", "◷", "↻"][i]}
                </div>
                <div
                  style={{
                    fontSize: 25,
                    lineHeight: 1.35,
                    marginTop: 36,
                    color: i % 2 ? "#ffffffb5" : muted,
                  }}
                >
                  {note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullApp>
  );
};

export const ReviewDocument: React.FC = () => {
  const f = useCurrentFrame();
  const correction = ease(f, 80);
  return (
    <FullApp
      language="Català"
      section="Revisió lingüística"
      font={fonts.editorial}
      header="quiet"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          height: 1828,
        }}
      >
        <div
          style={{
            background: "#F1EFE9",
            borderRight: "1px solid #DAD7D0",
            padding: "70px 32px",
          }}
        >
          <div style={{ fontSize: 15, color: muted, letterSpacing: 1.5 }}>
            DOCUMENT
          </div>
          {["Pregunta 01", "Pregunta 02", "Pregunta 03", "Pregunta 04"].map(
            (x, i) => (
              <div
                key={x}
                style={{
                  fontSize: 17,
                  padding: "18px 10px",
                  marginTop: 7,
                  color: i === 2 ? navy : muted,
                  fontWeight: i === 2 ? 760 : 540,
                }}
              >
                {x}
              </div>
            ),
          )}
        </div>
        <div style={{ padding: "100px 76px" }}>
          <div
            style={{ fontFamily: fonts.editorial, fontSize: 26, color: muted }}
          >
            Revisió 3 de 128
          </div>
          <div
            style={{
              fontFamily: fonts.editorial,
              fontSize: 55,
              lineHeight: 1.2,
              marginTop: 55,
            }}
          >
            Quin és el tribunal més alt dels Estats Units?
          </div>
          <div
            style={{
              marginTop: 70,
              padding: "28px 0",
              borderTop: "1px solid #D7DADF",
              borderBottom: "1px solid #D7DADF",
              fontSize: 33,
            }}
          >
            El Tribunal Suprem.
          </div>
          <div
            style={{
              marginTop: 75,
              opacity: correction,
              display: "flex",
              gap: 22,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                background: "#2E8165",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
              }}
            >
              ✓
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 760 }}>
                Revisat per una parlant nativa
              </div>
              <div
                style={{
                  fontSize: 19,
                  color: muted,
                  marginTop: 9,
                  lineHeight: 1.45,
                }}
              >
                Terminologia cívica comprovada. Àudio i text aprovats.
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 350,
              right: 150,
              fontFamily: fonts.editorial,
              fontStyle: "italic",
              fontSize: 34,
              color: "#A13B42",
            }}
          >
            No només traduït.
          </div>
        </div>
      </div>
    </FullApp>
  );
};

export const LanguageSearch: React.FC = () => {
  const f = useCurrentFrame();
  const text = "Bahasa Indonesia";
  const typed = Math.floor(progress(f, 20, 70) * text.length);
  const open = ease(f, 92);
  return (
    <FullApp
      language="Indonesia"
      section="46+ BAHASA"
      font={fonts.grotesk}
      header="index"
    >
      <div style={{ padding: "110px 92px" }}>
        <div style={{ fontSize: 65, fontWeight: 830, letterSpacing: -3 }}>
          Belajar dalam bahasa yang terasa seperti rumah.
        </div>
        <div
          style={{
            marginTop: 65,
            height: 105,
            borderBottom: `3px solid ${navy}`,
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 32,
          }}
        >
          <span>⌕</span>
          <span>{text.slice(0, typed)}</span>
          <span
            style={{
              height: 40,
              width: 3,
              background: navy,
              opacity: f % 20 < 10 ? 1 : 0,
            }}
          />
        </div>
        <div style={{ marginTop: 40, opacity: open }}>
          {["Bahasa Indonesia", "Bahasa Melayu", "Italiano"].map((x, i) => (
            <div
              key={x}
              style={{
                height: 90,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E0E3E8",
                fontSize: 25,
                fontWeight: i === 0 ? 780 : 550,
                color: i === 0 ? navy : muted,
              }}
            >
              <span>{x}</span>
              {i === 0 ? <span style={{ color: red }}>Buka →</span> : null}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 100,
            opacity: open,
            background: navy,
            color: "white",
            padding: "55px 48px",
          }}
        >
          <div style={{ fontSize: 18, color: "#ffffff87" }}>
            PERTANYAAN HARI INI
          </div>
          <div
            style={{
              fontSize: 42,
              lineHeight: 1.15,
              fontWeight: 760,
              marginTop: 18,
            }}
          >
            Berapa banyak garis pada bendera?
          </div>
          <div
            style={{
              fontSize: 31,
              color: "#F58A96",
              marginTop: 35,
              fontWeight: 760,
            }}
          >
            Tiga belas.
          </div>
        </div>
      </div>
    </FullApp>
  );
};

export const FamilyHandoff: React.FC = () => {
  const f = useCurrentFrame();
  const play = ease(f, 70);
  return (
    <FullApp
      language="Tagalog"
      section="Ipinadala sa iyo"
      font={fonts.human}
      header="quiet"
    >
      <div style={{ padding: "95px 92px" }}>
        <div style={{ fontSize: 18, color: muted }}>
          MENSAHE MULA KAY ANA · 7:42 PM
        </div>
        <div
          style={{
            marginTop: 30,
            maxWidth: 720,
            fontSize: 57,
            lineHeight: 1.08,
            fontWeight: 790,
            letterSpacing: -2.3,
          }}
        >
          “Ma, ito na ’yung reviewer na nasa Tagalog.”
        </div>
        <div
          style={{
            marginTop: 70,
            borderTop: "1px solid #DDE1E7",
            borderBottom: "1px solid #DDE1E7",
            padding: "45px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
            <CitizenlyIcon size={74} />
            <div>
              <div style={{ fontSize: 28, fontWeight: 780 }}>
                Citizenly practice
              </div>
              <div style={{ fontSize: 18, color: muted, marginTop: 5 }}>
                Tanong at sagot na may audio
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 44,
              display: "flex",
              alignItems: "center",
              gap: 27,
            }}
          >
            <div
              style={{
                width: 86,
                height: 86,
                borderRadius: "50%",
                background: red,
                color: "white",
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                transform: `scale(${0.9 + play * 0.1})`,
              }}
            >
              ▶
            </div>
            <Wave frame={f} width={650} bars={27} />
          </div>
        </div>
        <div
          style={{
            marginTop: 65,
            fontSize: 43,
            fontWeight: 770,
            lineHeight: 1.15,
          }}
        >
          Sino ang unang Pangulo?
        </div>
        <div
          style={{ marginTop: 24, fontSize: 36, color: red, fontWeight: 800 }}
        >
          George Washington.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 340,
            left: 92,
            fontSize: 25,
            color: muted,
          }}
        >
          Isang link. Isang mas madaling simula.
        </div>
      </div>
    </FullApp>
  );
};

export const FinnishOnboarding: React.FC = () => {
  const f = useCurrentFrame();
  const p = progress(f, 20, 145);
  const count = Math.round(128 - 108 * p);
  return (
    <FullApp
      language="Suomi"
      section="ALOITUS / 03"
      font={fonts.mono}
      header="index"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "390px 1fr",
          height: 1828,
        }}
      >
        <div style={{ background: navy, color: "white", padding: "95px 55px" }}>
          <div style={{ fontSize: 18, color: "#ffffff75" }}>3 KYSYMYSTÄ</div>
          <div
            style={{
              fontSize: 51,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -2,
              marginTop: 26,
            }}
          >
            Rakennetaan sinulle oikea harjoittelu.
          </div>
          <div
            style={{
              marginTop: 90,
              fontSize: 20,
              lineHeight: 2.5,
              color: "#ffffff9b",
            }}
          >
            01 Ikä
            <br />
            02 Pysyvä asuminen
            <br />
            03 Harjoittelukieli
          </div>
        </div>
        <div style={{ padding: "105px 62px" }}>
          <div style={{ fontSize: 17, color: muted }}>SINUN KYSYMYSSARJASI</div>
          <div
            style={{
              fontSize: 164,
              lineHeight: 1,
              fontWeight: 870,
              letterSpacing: -10,
              marginTop: 27,
            }}
          >
            {count}
          </div>
          <div style={{ fontSize: 27, fontWeight: 680 }}>kysymystä</div>
          <div
            style={{
              height: 480,
              display: "grid",
              gridTemplateColumns: "repeat(8,1fr)",
              gap: 10,
              alignContent: "center",
              marginTop: 20,
            }}
          >
            {Array.from({ length: 64 }, (_, i) => (
              <span
                key={i}
                style={{
                  height: 28,
                  background:
                    i < Math.round(10 + 54 * (1 - p)) ? "#CCD2DC" : "#EEF0F3",
                  opacity: i < 20 ? 1 : 0.5,
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: muted,
              marginTop: 20,
            }}
          >
            65/20-sääntö tunnistettu.
            <br />
            <b style={{ color: navy }}>
              Harjoittele 20 erityiskysymystä suomeksi.
            </b>
          </div>
          <div
            style={{
              height: 74,
              background: "#3979A8",
              color: "white",
              display: "grid",
              placeItems: "center",
              fontSize: 22,
              fontWeight: 780,
              marginTop: 50,
            }}
          >
            Aloita
          </div>
        </div>
      </div>
    </FullApp>
  );
};
