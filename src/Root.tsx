import "./index.css";
import { Composition } from "remotion";
import { CitizenlyFrenchAd } from "./compositions/CitizenlyFrenchAd";
import { CitizenlySpanishAd } from "./compositions/CitizenlySpanishAd";

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
    </>
  );
};
