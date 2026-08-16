import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { CitizenlyIcon } from "../../components/CitizenlyLogo";
import { colors } from "../../styles/theme";
import {
  AppTop,
  BrandBug,
  Eyebrow,
  KineticLine,
  Outro,
  Phone,
  SafeFrame,
  Waveform,
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

const languageBands = [
  "English",
  "Español",
  "Deutsch",
  "Tagalog",
  "Suomi",
  "Português",
  "Italiano",
  "Norsk",
  "Català",
  "Bahasa Indonesia",
] as const;

const IndonesianHook: React.FC = () => {
  const frame = useCurrentFrame();
  const focus = clamp(frame, [34, 88], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#F3EEDF",
        opacity: exitOpacity(frame, 98, 118),
      }}
    >
      <BrandBug language="Bahasa Indonesia" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          perspective: 900,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 65,
            top: 300,
            width: 920,
            transformStyle: "preserve-3d",
            transform: `translateY(${-focus * 360}px) rotateX(${18 - focus * 18}deg)`,
          }}
        >
          {languageBands.map((label, i) => {
            const active = i === languageBands.length - 1;
            return (
              <div
                key={label}
                style={{
                  height: active ? 170 : 116,
                  borderRadius: active ? 35 : 24,
                  marginBottom: 16,
                  padding: "0 34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: active ? "#D84545" : "rgba(255,255,255,.75)",
                  border: `1px solid ${active ? "#D84545" : "#DDD9CE"}`,
                  color: active ? "white" : colors.navy,
                  fontSize: active ? 44 : 31,
                  fontWeight: active ? 840 : 680,
                  transform: active
                    ? `scale(${0.88 + focus * 0.12})`
                    : `scale(${1 - focus * 0.025 * Math.abs(8 - i)})`,
                  opacity: active ? focus : 0.35 + (1 - focus) * 0.65,
                }}
              >
                <span>{label}</span>
                <span style={{ fontSize: 18, opacity: 0.55 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 100,
          right: 160,
          bottom: 335,
          opacity: focus,
        }}
      >
        <div
          style={{
            fontSize: 58,
            lineHeight: 1.05,
            letterSpacing: -2.3,
            fontWeight: 840,
          }}
        >
          Belajar dalam bahasa yang benar-benar Anda pahami.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const IndonesianProduct: React.FC = () => {
  const frame = useCurrentFrame();
  const phone = spring({
    frame,
    fps: 30,
    config: { damping: 20, stiffness: 100 },
  });
  const transcript = enterSpring(frame, 70);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "linear-gradient(150deg,#102847,#163A55 60%,#1D4B4C)",
        opacity: fade(frame, 238),
      }}
    >
      <BrandBug light language="Bahasa Indonesia" />
      <div style={{ position: "absolute", left: 110, top: 188, right: 170 }}>
        <KineticLine size={58} color="white">
          46+ bahasa. Satu tujuan.
        </KineticLine>
        <div
          style={{
            fontSize: 25,
            color: "#ffffff94",
            fontWeight: 600,
            marginTop: 16,
          }}
        >
          Audio untuk setiap pertanyaan dan jawaban.
        </div>
      </div>
      <Phone
        width={620}
        height={1090}
        dark
        style={{
          position: "absolute",
          left: 230,
          top: 400,
          transform: `translateY(${(1 - phone) * 110}px) rotate(${(1 - phone) * -2}deg)`,
          opacity: phone,
        }}
      >
        <AppTop language="Bahasa Indonesia" progress={0.61} dark />
        <div style={{ padding: "46px 40px", color: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 15,
                color: "#ffffff72",
                letterSpacing: 1.4,
                fontWeight: 760,
              }}
            >
              PERTANYAAN 18
            </span>
            <span
              style={{
                padding: "8px 13px",
                borderRadius: 12,
                background: "#ffffff10",
                color: "#8AD7C4",
                fontSize: 14,
                fontWeight: 760,
              }}
            >
              AUDIO
            </span>
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.18,
              letterSpacing: -0.9,
              fontWeight: 790,
              marginTop: 28,
            }}
          >
            Ada berapa garis pada bendera?
          </div>
          <div
            style={{
              height: 180,
              borderRadius: 30,
              background: "#ffffff0b",
              border: "1px solid #ffffff18",
              display: "grid",
              placeItems: "center",
              marginTop: 40,
            }}
          >
            <Waveform color="#70D2B7" width={450} height={120} />
          </div>
          <div
            style={{
              marginTop: 42,
              opacity: transcript,
              transform: `translateY(${(1 - transcript) * 24}px)`,
            }}
          >
            <div style={{ fontSize: 14, color: "#ffffff63", fontWeight: 760 }}>
              JAWABAN
            </div>
            <div style={{ fontSize: 35, fontWeight: 820, marginTop: 10 }}>
              Tiga belas.
            </div>
            <div
              style={{
                height: 74,
                borderRadius: 22,
                background: "#2B8F78",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 34,
                fontSize: 19,
                fontWeight: 760,
              }}
            >
              ✓ Dengarkan jawaban
            </div>
          </div>
        </div>
      </Phone>
    </AbsoluteFill>
  );
};

export const CitizenlyIndonesianCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={118}>
      <IndonesianHook />
    </Sequence>
    <Sequence from={98} durationInFrames={238} premountFor={20}>
      <IndonesianProduct />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Pahami. Jangan sekadar menghafal."
        subtitle="Belajar gratis dalam Bahasa Indonesia. Tanpa iklan."
        background="#F3EEDF"
        accent="#D84545"
      />
    </Sequence>
  </AbsoluteFill>
);

const Avatar: React.FC<{ parent?: boolean; size?: number }> = ({
  parent = false,
  size = 68,
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: parent ? "#E9B69A" : "#7189C2",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        position: "absolute",
        width: size * 0.42,
        height: size * 0.42,
        borderRadius: "50%",
        background: parent ? "#F5D2BC" : "#E5B89D",
        left: size * 0.29,
        top: size * 0.18,
      }}
    />
    <div
      style={{
        position: "absolute",
        width: size * 0.74,
        height: size * 0.46,
        borderRadius: "50% 50% 0 0",
        background: parent ? "#6E625C" : "#232D47",
        left: size * 0.13,
        bottom: -size * 0.1,
      }}
    />
  </div>
);

const Bubble: React.FC<{
  children: React.ReactNode;
  mine?: boolean;
  top: number;
  delay: number;
  parent?: boolean;
}> = ({ children, mine = false, top, delay, parent = false }) => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, delay, 130);
  return (
    <div
      style={{
        position: "absolute",
        top,
        left: mine ? 170 : 28,
        right: mine ? 28 : 120,
        display: "flex",
        flexDirection: mine ? "row-reverse" : "row",
        alignItems: "flex-end",
        gap: 13,
        opacity: p,
        transform: `translateY(${(1 - p) * 34}px)`,
      }}
    >
      <Avatar parent={parent} size={52} />
      <div
        style={{
          maxWidth: 360,
          padding: "18px 21px",
          borderRadius: mine ? "25px 25px 6px 25px" : "25px 25px 25px 6px",
          background: mine ? "#315DA5" : "#F0F1F4",
          color: mine ? "white" : colors.navy,
          fontSize: 19,
          lineHeight: 1.35,
          fontWeight: 620,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const TagalogHook: React.FC = () => {
  const frame = useCurrentFrame();
  const p = enterSpring(frame, 8);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#F7F3EC",
        opacity: exitOpacity(frame, 99, 119),
      }}
    >
      <BrandBug language="Tagalog" />
      <SafeFrame style={{ top: 300 }}>
        <Eyebrow color="#315DA5">Para sa pamilya</Eyebrow>
        <div
          style={{
            fontSize: 85,
            lineHeight: 1.01,
            letterSpacing: -4.3,
            fontWeight: 850,
            marginTop: 52,
          }}
        >
          Hindi mo kailangang ikaw ang sumagot para sa kanila.
        </div>
        <div
          style={{
            height: 2,
            background: "#D9DCE2",
            marginTop: 70,
            width: 690 * p,
          }}
        />
        <div
          style={{
            fontSize: 36,
            lineHeight: 1.25,
            color: "#315DA5",
            fontWeight: 720,
            marginTop: 46,
            opacity: p,
          }}
        >
          Bigyan mo sila ng paraan para maghanda.
        </div>
      </SafeFrame>
    </AbsoluteFill>
  );
};

const TagalogStory: React.FC = () => {
  const frame = useCurrentFrame();
  const phone = spring({
    frame,
    fps: 30,
    config: { damping: 21, stiffness: 98 },
  });
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "linear-gradient(150deg,#DDE7F5,#F7F3EC)",
        opacity: fade(frame, 237),
      }}
    >
      <BrandBug language="Tagalog" />
      <div style={{ position: "absolute", left: 120, top: 190 }}>
        <KineticLine size={57}>Isang link. Isang malaking hakbang.</KineticLine>
      </div>
      <Phone
        width={600}
        height={1080}
        style={{
          position: "absolute",
          left: 240,
          top: 400,
          opacity: phone,
          transform: `translateY(${(1 - phone) * 110}px) scale(${0.95 + phone * 0.05})`,
        }}
      >
        <div
          style={{
            height: 98,
            padding: "42px 28px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #E3E5EA",
            gap: 11,
          }}
        >
          <Avatar parent size={42} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 790 }}>Nanay</div>
            <div style={{ fontSize: 12, color: "#3A9B75", marginTop: 2 }}>
              online
            </div>
          </div>
        </div>
        <Bubble mine top={135} delay={15}>
          Ma, libre ito. May Tagalog at audio: citizenly.app
        </Bubble>
        <Bubble parent top={275} delay={42}>
          Naririnig ko ang bawat tanong. Salamat, anak.
        </Bubble>
        <div
          style={{
            position: "absolute",
            left: 30,
            right: 30,
            top: 445,
            height: 245,
            borderRadius: 29,
            background: "#172644",
            padding: 25,
            opacity: enterSpring(frame, 68),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <CitizenlyIcon size={41} />
            <span style={{ fontSize: 17, fontWeight: 780, color: "white" }}>
              Citizenly · Tagalog
            </span>
          </div>
          <div
            style={{
              fontSize: 23,
              lineHeight: 1.2,
              fontWeight: 760,
              color: "white",
              marginTop: 25,
            }}
          >
            Ilang bituin ang nasa watawat?
          </div>
          <div style={{ marginTop: 24 }}>
            <Waveform color="#6F9FE4" bars={19} width={430} height={65} />
          </div>
        </div>
        <Bubble parent top={730} delay={98}>
          Handa na akong magsanay. ❤️
        </Bubble>
      </Phone>
    </AbsoluteFill>
  );
};

export const CitizenlyTagalogCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={119}>
      <TagalogHook />
    </Sequence>
    <Sequence from={99} durationInFrames={237} premountFor={20}>
      <TagalogStory />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Para kina Nanay at Tatay."
        subtitle="Libreng citizenship test prep sa Tagalog. Walang ads."
        background="#172644"
        foreground="#fff"
        accent="#C41E3A"
        align="left"
      />
    </Sequence>
  </AbsoluteFill>
);

const Route: React.FC<{ progress: number; compact?: boolean }> = ({
  progress,
  compact = false,
}) => {
  const nodes = compact ? 20 : 42;
  const pathWidth = compact ? 590 : 760;
  return (
    <div
      style={{
        position: "relative",
        width: pathWidth,
        height: compact ? 340 : 540,
      }}
    >
      <svg
        width={pathWidth}
        height="100%"
        viewBox={`0 0 ${pathWidth} ${compact ? 340 : 540}`}
        style={{ position: "absolute", inset: 0 }}
      >
        <path
          d={
            compact
              ? "M28 270C130 40 250 310 370 120S510 65 565 42"
              : "M20 480C105 370 130 90 250 160S340 500 470 350 560 65 735 45"
          }
          fill="none"
          stroke="#D9E2E8"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d={
            compact
              ? "M28 270C130 40 250 310 370 120S510 65 565 42"
              : "M20 480C105 370 130 90 250 160S340 500 470 350 560 65 735 45"
          }
          fill="none"
          stroke="#3272A6"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
        />
      </svg>
      {Array.from({ length: nodes }, (_, i) => {
        const done = i / nodes < progress;
        const x = (i / (nodes - 1)) * (pathWidth - 30) + 15;
        const y = compact
          ? 280 - Math.sin(i * 0.78) * 100 - i * 10
          : 440 - Math.sin(i * 0.55) * 165 - i * 8;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: Math.max(18, Math.min(compact ? 310 : 510, y)),
              width: compact ? 18 : 15,
              height: compact ? 18 : 15,
              borderRadius: "50%",
              background: done ? "#3272A6" : "#D9E2E8",
              border: "3px solid white",
              boxShadow: "0 2px 7px rgba(27,42,74,.12)",
            }}
          />
        );
      })}
    </div>
  );
};

const FinnishHook: React.FC = () => {
  const frame = useCurrentFrame();
  const simplify = clamp(frame, [36, 90], [0, 1]);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "#F7FAFB",
        opacity: exitOpacity(frame, 99, 119),
      }}
    >
      <BrandBug language="Suomi" />
      <div style={{ position: "absolute", left: 100, top: 270, right: 160 }}>
        <Eyebrow color="#3272A6">65/20-polku</Eyebrow>
        <div style={{ marginTop: 50 }}>
          <KineticLine size={83}>
            Kaikkien ei tarvitse opiskella 128 kysymystä.
          </KineticLine>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 145,
          top: 950,
          transform: `scale(${1 - simplify * 0.18}) translateY(${-simplify * 55}px)`,
          opacity: 1 - simplify * 0.25,
        }}
      >
        <Route progress={simplify * 0.45} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 135,
          bottom: 345,
          padding: "18px 26px",
          borderRadius: 20,
          background: "#3272A6",
          color: "white",
          fontSize: 25,
          fontWeight: 800,
          opacity: simplify,
        }}
      >
        Lyhyempi reitti →
      </div>
    </AbsoluteFill>
  );
};

const FinnishPath: React.FC = () => {
  const frame = useCurrentFrame();
  const selected = frame > 52;
  const path = clamp(frame, [60, 142], [0, 1]);
  const card = enterSpring(frame, 3);
  return (
    <AbsoluteFill
      style={{
        ...page,
        background: "linear-gradient(160deg,#EAF2F6,#FFFFFF)",
        opacity: fade(frame, 237),
      }}
    >
      <BrandBug language="Suomi" />
      <div style={{ position: "absolute", left: 115, top: 185 }}>
        <KineticLine size={58}>
          Citizenly löytää oikean kysymyssarjan.
        </KineticLine>
      </div>
      <div
        style={{
          position: "absolute",
          left: 105,
          top: 390,
          width: 830,
          height: 890,
          borderRadius: 46,
          background: "rgba(255,255,255,.9)",
          border: "1px solid #DCE5EA",
          boxShadow: "0 32px 85px rgba(32,63,85,.12)",
          padding: 42,
          opacity: card,
          transform: `translateY(${(1 - card) * 65}px)`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 15,
                letterSpacing: 1.5,
                color: colors.muted,
                fontWeight: 760,
              }}
            >
              OPINTOPOLKUSI
            </div>
            <div style={{ fontSize: 36, fontWeight: 830, marginTop: 8 }}>
              {selected ? "65/20-kysymyssarja" : "Valitse tilanteesi"}
            </div>
          </div>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 24,
              background: selected ? "#E5F2FA" : "#F1F3F5",
              color: selected ? "#3272A6" : colors.muted,
              display: "grid",
              placeItems: "center",
              fontSize: 31,
              fontWeight: 850,
            }}
          >
            {selected ? "✓" : "?"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
          {["65+ vuotta", "20 vuotta PR", "Oma kieli"].map((x, i) => (
            <div
              key={x}
              style={{
                padding: "13px 17px",
                borderRadius: 16,
                background: selected
                  ? i === 2
                    ? "#3272A6"
                    : "#EAF2F6"
                  : "#F3F4F6",
                color: selected && i === 2 ? "white" : colors.navy,
                fontSize: 16,
                fontWeight: 720,
              }}
            >
              {x}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 34,
            height: 430,
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <Route progress={path} compact />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <div>
            <div style={{ fontSize: 53, fontWeight: 860, color: "#3272A6" }}>
              20
            </div>
            <div style={{ fontSize: 16, color: colors.muted, fontWeight: 650 }}>
              kysymystä harjoiteltavana
            </div>
          </div>
          <div
            style={{
              width: 240,
              height: 76,
              borderRadius: 22,
              background: "#172944",
              color: "white",
              display: "grid",
              placeItems: "center",
              fontSize: 21,
              fontWeight: 800,
            }}
          >
            Aloita harjoittelu
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CitizenlyFinnishCreativeAd: React.FC = () => (
  <AbsoluteFill>
    <Sequence durationInFrames={119}>
      <FinnishHook />
    </Sequence>
    <Sequence from={99} durationInFrames={237} premountFor={20}>
      <FinnishPath />
    </Sequence>
    <Sequence from={316} durationInFrames={134} premountFor={20}>
      <Outro
        title="Selkeämpi reitti kokeeseen."
        subtitle="Harjoittele suomeksi. Ilmaiseksi ja ilman mainoksia."
        background="#F7FAFB"
        accent="#3272A6"
      />
    </Sequence>
  </AbsoluteFill>
);
