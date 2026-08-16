import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { BigHook, fonts } from "./Shared";
import {
  AudioPlayer,
  EligibilityDiagnostic,
  FamilyHandoff,
  FeatureCanvas,
  FinnishOnboarding,
  LanguageSearch,
  PricingMemo,
  ReviewCommand,
  ReviewDocument,
  StateProfile,
  StudyTimeline,
} from "./ProductScenes";
import {
  CatalanEnd,
  DanishEnd,
  DutchEnd,
  FinnishEnd,
  GermanEnd,
  IndonesianEnd,
  ItalianEnd,
  NorwegianEnd,
  PortugueseEnd,
  SwedishEnd,
  TagalogEnd,
} from "./EndFrames";

const Film: React.FC<{
  intro?: React.ReactNode;
  introFrames?: number;
  product: React.ReactNode;
  end: React.ReactNode;
}> = ({ intro, introFrames = 0, product, end }) => (
  <AbsoluteFill>
    {intro ? <Sequence durationInFrames={introFrames}>{intro}</Sequence> : null}
    <Sequence
      from={introFrames}
      durationInFrames={340 - introFrames}
      premountFor={18}
    >
      {product}
    </Sequence>
    <Sequence from={340} durationInFrames={110} premountFor={16}>
      {end}
    </Sequence>
  </AbsoluteFill>
);

export const CitizenlyGermanCreativeAd: React.FC = () => (
  <Film
    introFrames={72}
    intro={
      <BigHook
        kicker="Für den Einbürgerungstest"
        lines={["Nicht jeder", "lernt 128", "Fragen."]}
        dark
        accent="#D7FF52"
        font={fonts.mono}
      />
    }
    product={<EligibilityDiagnostic />}
    end={<GermanEnd />}
  />
);
export const CitizenlyDutchCreativeAd: React.FC = () => (
  <Film product={<ReviewCommand />} end={<DutchEnd />} />
);
export const CitizenlySwedishCreativeAd: React.FC = () => (
  <Film product={<AudioPlayer />} end={<SwedishEnd />} />
);
export const CitizenlyNorwegianCreativeAd: React.FC = () => (
  <Film product={<StateProfile />} end={<NorwegianEnd />} />
);
export const CitizenlyDanishCreativeAd: React.FC = () => (
  <Film
    introFrames={62}
    intro={
      <BigHook
        kicker="Et meget kort prismøde"
        lines={["Hvad skal", "det koste?"]}
        background="#E8E4DB"
        font={fonts.mono}
      />
    }
    product={<PricingMemo />}
    end={<DanishEnd />}
  />
);
export const CitizenlyItalianCreativeAd: React.FC = () => (
  <Film
    introFrames={66}
    intro={
      <BigHook
        kicker="Il colloquio si avvicina"
        lines={["Non tutto", "in una notte."]}
        background="#FAF6F0"
        accent="#B9473F"
        font={fonts.editorial}
      />
    }
    product={<StudyTimeline />}
    end={<ItalianEnd />}
  />
);
export const CitizenlyPortugueseCreativeAd: React.FC = () => (
  <Film product={<FeatureCanvas />} end={<PortugueseEnd />} />
);
export const CitizenlyCatalanCreativeAd: React.FC = () => (
  <Film
    introFrames={70}
    intro={
      <BigHook
        kicker="128 preguntes oficials"
        lines={["Traduir", "no és", "prou."]}
        background="#F0EBDD"
        accent="#231F20"
        font={fonts.editorial}
      />
    }
    product={<ReviewDocument />}
    end={<CatalanEnd />}
  />
);
export const CitizenlyIndonesianCreativeAd: React.FC = () => (
  <Film product={<LanguageSearch />} end={<IndonesianEnd />} />
);
export const CitizenlyTagalogCreativeAd: React.FC = () => (
  <Film
    introFrames={58}
    intro={
      <BigHook
        kicker="Isang mensahe para kay Mama"
        lines={["“Ma, ito", "’yung reviewer.”"]}
        background="#EAF4EE"
        accent="#28734F"
        font={fonts.human}
      />
    }
    product={<FamilyHandoff />}
    end={<TagalogEnd />}
  />
);
export const CitizenlyFinnishCreativeAd: React.FC = () => (
  <Film product={<FinnishOnboarding />} end={<FinnishEnd />} />
);
