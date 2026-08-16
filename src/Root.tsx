import "./index.css";
import { Composition } from "remotion";
import { CitizenlyFrenchAd } from "./compositions/CitizenlyFrenchAd";
import {
  CitizenlyCreativePromoAd,
  creativePromoConfigs,
} from "./compositions/CitizenlyCreativePromoAd";
import {
  CitizenlyLanguageAd,
  languageAdConfigs,
} from "./compositions/CitizenlyLanguageAd";
import { CitizenlySpanishAd } from "./compositions/CitizenlySpanishAd";
import { campaignTwoCompositions } from "./compositions/campaign2";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CitizenlySpanishAd"
        component={CitizenlySpanishAd}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CitizenlyFrenchAd"
        component={CitizenlyFrenchAd}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      {languageAdConfigs.map((config) => (
        <Composition
          key={config.key}
          id={config.compositionId}
          component={CitizenlyLanguageAd}
          defaultProps={{ languageKey: config.key }}
          durationInFrames={450}
          fps={30}
          width={1080}
          height={1920}
        />
      ))}
      {creativePromoConfigs
        .filter((config) => config.key === "croatian")
        .map((config) => (
          <Composition
            key={config.compositionId}
            id={config.compositionId}
            component={CitizenlyCreativePromoAd}
            defaultProps={{ promoKey: config.key }}
            durationInFrames={450}
            fps={30}
            width={1080}
            height={1920}
          />
        ))}
      {campaignTwoCompositions.map(({ id, component }) => (
        <Composition
          key={id}
          id={id}
          component={component}
          durationInFrames={450}
          fps={30}
          width={1080}
          height={1920}
        />
      ))}
    </>
  );
};
