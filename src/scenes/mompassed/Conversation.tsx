import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { dmStack } from "../../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);
const BOUNCE = Easing.bezier(0.34, 1.56, 0.64, 1);

type Side = "received" | "sent";

type TextMessage = {
  from: number;
  side: Side;
  kind: "text";
  text: string;
};

type LinkCardMessage = {
  from: number;
  side: Side;
  kind: "linkCard";
  title: string;
  subtitle: string;
};

type Message = TextMessage | LinkCardMessage;

const MESSAGES: Message[] = [
  {
    from: 60,
    side: "received",
    kind: "text",
    text: "I just finished my citizenship interview",
  },
  { from: 100, side: "sent", kind: "text", text: "how did it go??" },
  { from: 140, side: "received", kind: "text", text: "I PASSED 😭" },
  {
    from: 180,
    side: "received",
    kind: "text",
    text: "10 out of 10 on the civics test",
  },
  { from: 220, side: "sent", kind: "text", text: "NO WAY ARE YOU SERIOUS" },
  {
    from: 260,
    side: "sent",
    kind: "text",
    text: "MOM IM SO HAPPY FOR YOU 🥹🥹",
  },
  {
    from: 300,
    side: "received",
    kind: "text",
    text: "I kept practicing on that website you set up for me every morning before work",
  },
  { from: 340, side: "sent", kind: "text", text: "it was worth it" },
  {
    from: 380,
    side: "received",
    kind: "text",
    text: "tell your friends about it their parents should use it too",
  },
  {
    from: 420,
    side: "sent",
    kind: "text",
    text: "im sending them the link right now",
  },
  {
    from: 460,
    side: "sent",
    kind: "linkCard",
    title: "Practice the US Citizenship Test in Your Language",
    subtitle: "citizenly.app",
  },
];

const TextBubble: React.FC<{ msg: TextMessage; frame: number }> = ({
  msg,
  frame,
}) => {
  const local = frame - msg.from;
  const opacity = interpolate(local, [0, 10], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(local, [0, 18], [20, 0], {
    easing: BOUNCE,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isSent = msg.side === "sent";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          maxWidth: "78%",
          padding: "18px 24px",
          borderRadius: isSent ? "24px 24px 6px 24px" : "24px 24px 24px 6px",
          backgroundColor: isSent ? "#007AFF" : "#E9E9EB",
          color: isSent ? "#FFFFFF" : "#000000",
          fontSize: 26,
          fontWeight: 400,
          lineHeight: 1.3,
          wordBreak: "break-word",
        }}
      >
        {msg.text}
      </div>
    </div>
  );
};

const LinkCardBubble: React.FC<{ msg: LinkCardMessage; frame: number }> = ({
  msg,
  frame,
}) => {
  const local = frame - msg.from;
  const opacity = interpolate(local, [0, 10], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(local, [0, 18], [20, 0], {
    easing: BOUNCE,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isSent = msg.side === "sent";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          width: 320,
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            src={staticFile("CitizenlyFull.png")}
            style={{
              width: 200,
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            padding: 12,
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#000000",
              lineHeight: 1.3,
            }}
          >
            {msg.title}
          </div>
          <div
            style={{
              marginTop: 4,
              fontSize: 13,
              fontWeight: 400,
              color: "#9CA3AF",
            }}
          >
            {msg.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveredLabel: React.FC<{ show: number }> = ({ show }) => {
  const opacity = interpolate(show, [0, 12], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        fontSize: 11,
        color: "#8E8E93",
        opacity,
        marginTop: 2,
        marginRight: 2,
      }}
    >
      Delivered
    </div>
  );
};

const BackArrow: React.FC = () => (
  <svg width={16} height={26} viewBox="0 0 16 26" fill="none">
    <path
      d="M12 2 L3 13 L12 24"
      stroke="#007AFF"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VideoIcon: React.FC = () => (
  <svg width={32} height={22} viewBox="0 0 32 22" fill="#007AFF">
    <rect x="0" y="3" width="22" height="16" rx="3.5" />
    <path d="M22 7.5 L31 3 L31 19 L22 14.5 Z" />
  </svg>
);

const InfoIcon: React.FC = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#007AFF" strokeWidth={2} />
    <circle cx="12" cy="7.5" r="1.2" fill="#007AFF" />
    <path
      d="M12 11 L12 17"
      stroke="#007AFF"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

const CameraIcon: React.FC = () => (
  <svg width={28} height={24} viewBox="0 0 28 24" fill="none">
    <path
      d="M3 6 h4 l1.5 -2 h7 l1.5 2 h4 a2 2 0 0 1 2 2 v11 a2 2 0 0 1 -2 2 H3 a2 2 0 0 1 -2 -2 V8 a2 2 0 0 1 2 -2 z"
      stroke="#8E8E93"
      strokeWidth={1.6}
      fill="none"
    />
    <circle cx="14" cy="13" r="4.5" stroke="#8E8E93" strokeWidth={1.6} />
  </svg>
);

const SendArrow: React.FC = () => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "#007AFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 13 L8 3 M3 8 L8 3 L13 8"
        stroke="#FFFFFF"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Header: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 168,
      borderBottom: "1px solid #D1D1D6",
      backgroundColor: "#F6F6F6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 22,
      zIndex: 2,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 18,
        top: 30,
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      <BackArrow />
    </div>
    <div
      style={{
        position: "absolute",
        right: 18,
        top: 36,
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      <VideoIcon />
      <InfoIcon />
    </div>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        backgroundColor: "#D1D1D6",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile("MomAvatar.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    </div>
    <div
      style={{
        marginTop: 8,
        fontSize: 32,
        fontWeight: 600,
        color: "#000000",
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      Mom
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
        <path
          d="M2 3.5 L5 7 L8 3.5"
          stroke="#8E8E93"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const InputBar: React.FC = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 86,
      borderTop: "1px solid #D1D1D6",
      backgroundColor: "#FFFFFF",
      padding: "16px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      zIndex: 2,
    }}
  >
    <CameraIcon />
    <div
      style={{
        flex: 1,
        height: 42,
        borderRadius: 21,
        border: "1px solid #D1D1D6",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        fontSize: 17,
        color: "#A6A6A6",
      }}
    >
      <span>iMessage</span>
    </div>
    <SendArrow />
  </div>
);

export const Conversation: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneFadeOut = interpolate(frame, [590, 600], [1, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const visibleMessages = MESSAGES.map((msg, i) => ({ msg, i })).filter(
    ({ msg }) => frame >= msg.from,
  );

  let lastSentVisibleIdx = -1;
  for (let i = visibleMessages.length - 1; i >= 0; i--) {
    if (visibleMessages[i].msg.side === "sent") {
      lastSentVisibleIdx = i;
      break;
    }
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F2F2F7",
        fontFamily: dmStack,
        opacity: sceneFadeOut,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 60,
          right: 60,
          textAlign: "center",
          fontSize: 68,
          fontWeight: 700,
          color: "#1B2A4A",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        POV: your mom just passed her citizenship test
      </div>

      <div
        style={{
          position: "absolute",
          top: 320,
          bottom: 220,
          left: 60,
          right: 60,
          backgroundColor: "#FFFFFF",
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        <Header />

        <div
          style={{
            position: "absolute",
            top: 168,
            bottom: 86,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#8E8E93",
              fontSize: 12,
              fontWeight: 500,
              paddingTop: 14,
              flexShrink: 0,
            }}
          >
            <span style={{ fontWeight: 600, color: "#3C3C43" }}>iMessage</span>
            <span style={{ marginLeft: 8 }}>Today 8:42 AM</span>
          </div>

          <div style={{ flex: 1 }} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "0 16px 16px",
            }}
          >
            {visibleMessages.map(({ msg, i }, vIdx) => (
              <React.Fragment key={i}>
                {msg.kind === "text" ? (
                  <TextBubble msg={msg} frame={frame} />
                ) : (
                  <LinkCardBubble msg={msg} frame={frame} />
                )}
                {vIdx === lastSentVisibleIdx && (
                  <DeliveredLabel show={frame - msg.from - 14} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <InputBar />
      </div>
    </AbsoluteFill>
  );
};
