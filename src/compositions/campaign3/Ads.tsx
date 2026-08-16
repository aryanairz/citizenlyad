import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {BigHook, CTA} from "./Shared";
import {AudioPlayer, EligibilityDiagnostic, FamilyHandoff, FeatureCanvas, FinnishOnboarding, LanguageSearch, PricingMemo, ReviewCommand, ReviewDocument, StateProfile, StudyTimeline} from "./ProductScenes";

const Film: React.FC<{intro?: React.ReactNode; introFrames?: number; product: React.ReactNode; end: React.ReactNode}> = ({intro, introFrames=0, product, end}) => <AbsoluteFill>
  {intro ? <Sequence durationInFrames={introFrames}>{intro}</Sequence> : null}
  <Sequence from={introFrames} durationInFrames={340-introFrames} premountFor={18}>{product}</Sequence>
  <Sequence from={340} durationInFrames={110} premountFor={16}>{end}</Sequence>
</AbsoluteFill>;

export const CitizenlyGermanCreativeAd: React.FC = () => <Film introFrames={72} intro={<BigHook kicker="Für den Einbürgerungstest" lines={["Nicht jeder", "lernt 128", "Fragen."]} dark accent="#EF6071"/>} product={<EligibilityDiagnostic/>} end={<CTA language="Deutsch" title="Der richtige Lernweg. Sofort." note="Kostenlos auf Deutsch. Ohne Werbung." dark/>}/>;

export const CitizenlyDutchCreativeAd: React.FC = () => <Film product={<ReviewCommand/>} end={<CTA language="Nederlands" title="Onthoud wat je gisteren nog miste." note="Slim herhalen. Gratis en zonder advertenties." dark accent="#E94C61"/>}/>;

export const CitizenlySwedishCreativeAd: React.FC = () => <Film product={<AudioPlayer/>} end={<CTA language="Svenska" title="Hör frågan. Förstå svaret." note="Alla frågor och svar med ljud på svenska." accent="#346DAA"/>}/>;

export const CitizenlyNorwegianCreativeAd: React.FC = () => <Film product={<StateProfile/>} end={<CTA language="Norsk" title="Spørsmålene som gjelder akkurat der du bor." note="Personlig, gratis og uten reklame." accent="#2E648E"/>}/>;

export const CitizenlyDanishCreativeAd: React.FC = () => <Film introFrames={62} intro={<BigHook kicker="Et meget kort prismøde" lines={["Hvad skal", "det koste?"]} background="#FBFBFA"/>} product={<PricingMemo/>} end={<CTA language="Dansk" title="Gratis betyder gratis." note="128 officielle spørgsmål. 46+ sprog. Ingen reklamer."/>}/>;

export const CitizenlyItalianCreativeAd: React.FC = () => <Film introFrames={66} intro={<BigHook kicker="Il colloquio si avvicina" lines={["Non tutto", "in una notte."]} background="#FAF6F0" accent="#B9473F"/>} product={<StudyTimeline/>} end={<CTA language="Italiano" title="Preparati un giorno alla volta." note="Schede, quiz, simulazione e ripasso. Gratis." accent="#B9473F"/>}/>;

export const CitizenlyPortugueseCreativeAd: React.FC = () => <Film product={<FeatureCanvas/>} end={<CTA language="Português" title="Seu jeito de aprender muda. O estudo acompanha." note="Quatro modos de estudo, todos gratuitos."/>}/>;

export const CitizenlyCatalanCreativeAd: React.FC = () => <Film introFrames={70} intro={<BigHook kicker="128 preguntes oficials" lines={["Traduir", "no és", "prou."]} background="#F1EFE9" accent="#A13B42"/>} product={<ReviewDocument/>} end={<CTA language="Català" title="Català revisat per persones." note="Text i àudio comprovats abans de publicar-los." accent="#A13B42"/>}/>;

export const CitizenlyIndonesianCreativeAd: React.FC = () => <Film product={<LanguageSearch/>} end={<CTA language="Indonesia" title="Belajar dalam bahasa yang benar-benar kamu pahami." note="128 pertanyaan resmi dengan teks dan audio. Gratis."/>}/>;

export const CitizenlyTagalogCreativeAd: React.FC = () => <Film introFrames={58} intro={<BigHook kicker="Isang mensahe para kay Mama" lines={["“Ma, ito", "’yung reviewer.”"]} background="#FBFBFA" accent="#C41E3A"/>} product={<FamilyHandoff/>} end={<CTA language="Tagalog" title="Mas madaling magsimula kapag naiintindihan mo." note="Mga tanong at sagot na may audio sa Tagalog. Libre."/>}/>;

export const CitizenlyFinnishCreativeAd: React.FC = () => <Film product={<FinnishOnboarding/>} end={<CTA language="Suomi" title="Vähemmän arvailua. Oikea kysymyssarja." note="65/20-polku tunnistetaan automaattisesti. Ilmaiseksi." accent="#3979A8"/>}/>;
