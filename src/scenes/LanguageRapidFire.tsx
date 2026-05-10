import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { dmStack, gujaratiStack, koreanStack, malayalamStack } from "../fonts";
import { QuestionSlide } from "./QuestionSlide";

type Lang = {
  label: string;
  question: string;
  fontSize: number;
  stack: string;
};

const LANGUAGES: Lang[] = [
  {
    label: "English",
    question: "What is the supreme law of the land?",
    fontSize: 40,
    stack: dmStack,
  },
  {
    label: "മലയാളം",
    question: "രാജ്യത്തെ പരമോന്നത നിയമം എന്താണ്?",
    fontSize: 40,
    stack: malayalamStack,
  },
  {
    label: "ગુજરાતી",
    question: "દેશનો સર્વોચ્ચ કાયદો શું છે?",
    fontSize: 40,
    stack: gujaratiStack,
  },
  {
    label: "Tiếng Việt",
    question: "Đâu là luật tối cao của đất nước?",
    fontSize: 40,
    stack: dmStack,
  },
  {
    label: "Tagalog",
    question: "Ano ang pinakamataas na batas ng bansa?",
    fontSize: 40,
    stack: dmStack,
  },
  {
    label: "한국어",
    question: "이 나라의 최고 법은 무엇입니까?",
    fontSize: 40,
    stack: koreanStack,
  },
  {
    label: "Español",
    question: "¿Cuál es la ley suprema del país?",
    fontSize: 40,
    stack: dmStack,
  },
  {
    label: "Hmoob",
    question: "Txoj cai lij choj siab tshaj plaws ntawm lub teb chaws yog dab tsi?",
    fontSize: 36,
    stack: dmStack,
  },
];

const PER_LANG = 30;
const SLIDE = 8;

export const LanguageRapidFire: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      {LANGUAGES.map((lang, i) => {
        const enterStart = i * PER_LANG;
        const enterEnd = enterStart + SLIDE;
        const exitStart = (i + 1) * PER_LANG;
        const exitEnd = exitStart + SLIDE;

        if (frame < enterStart - 1 || frame > exitEnd) return null;

        return (
          <QuestionSlide
            key={i}
            frame={frame}
            label={lang.label}
            question={lang.question}
            fontSize={lang.fontSize}
            fontFamily={lang.stack}
            enterStart={enterStart}
            enterEnd={enterEnd}
            exitStart={exitStart}
            exitEnd={exitEnd}
          />
        );
      })}
    </AbsoluteFill>
  );
};
