import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { dmStack } from "../../fonts";

const ENTER = Easing.bezier(0.16, 1, 0.3, 1);
const PER_Q = 180;
const SLIDE = 8;
const ANSWER_REVEAL_START = 110;
const ANSWER_REVEAL_END = 120;
const EXIT_START = 170;
const EXIT_END = 180;

type Question = { question: string; answer: string };

const QUESTIONS: Question[] = [
  {
    question: "What is the supreme law of the land?",
    answer: "The Constitution",
  },
  {
    question: "How many amendments does the Constitution have?",
    answer: "Twenty-seven (27)",
  },
  {
    question: "Who is the Commander in Chief of the military?",
    answer: "The President",
  },
  {
    question: "What do we call the first ten amendments?",
    answer: "The Bill of Rights",
  },
  {
    question: "What is the capital of the United States?",
    answer: "Washington, D.C.",
  },
];

const QuestionCard: React.FC<{ q: Question; index: number }> = ({
  q,
  index,
}) => {
  const frame = useCurrentFrame();

  const enterX = interpolate(frame, [0, SLIDE], [100, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const enterOpacity = interpolate(frame, [0, SLIDE], [0, 1], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitX = interpolate(frame, [EXIT_START, EXIT_END], [0, -100], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitOpacity = interpolate(frame, [EXIT_START, EXIT_END], [1, 0], {
    easing: ENTER,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateX = frame < EXIT_START ? enterX : exitX;
  const opacity = frame < EXIT_START ? enterOpacity : exitOpacity;

  const answerOpacity = interpolate(
    frame,
    [ANSWER_REVEAL_START, ANSWER_REVEAL_END],
    [0, 1],
    {
      easing: ENTER,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const answerY = interpolate(
    frame,
    [ANSWER_REVEAL_START, ANSWER_REVEAL_END],
    [-10, 0],
    {
      easing: ENTER,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        transform: `translateX(${translateX}%)`,
        opacity,
        fontFamily: dmStack,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          fontSize: 20,
          fontWeight: 700,
          color: "#C41E3A",
          letterSpacing: "0.04em",
        }}
      >
        Q{index + 1}
      </div>
      <div
        style={{
          position: "absolute",
          top: 48,
          right: 60,
          padding: "8px 18px",
          borderRadius: 999,
          backgroundColor: "#1B2A4A",
          fontSize: 20,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "0.02em",
        }}
      >
        {index + 1}/5
      </div>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 56,
            width: "100%",
            maxWidth: 880,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1B2A4A",
              lineHeight: 1.25,
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            {q.question}
          </div>
          <div
            style={{
              opacity: answerOpacity,
              transform: `translateY(${answerY}px)`,
              borderLeft: "4px solid #16A34A",
              paddingLeft: 24,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: 28,
              fontWeight: 500,
              color: "#1B2A4A",
              textAlign: "left",
            }}
          >
            {q.answer}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const QuestionSection: React.FC = () => {
  const frame = useCurrentFrame();
  const total = QUESTIONS.length * PER_Q;

  const progress = interpolate(frame, [0, total], [0, 100], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      {QUESTIONS.map((q, i) => (
        <Sequence
          key={i}
          from={i * PER_Q}
          durationInFrames={PER_Q}
          layout="none"
        >
          <QuestionCard q={q} index={i} />
        </Sequence>
      ))}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 8,
          backgroundColor: "#E5E7EB",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#1B2A4A",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
