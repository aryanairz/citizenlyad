import "./index.css";
import { Composition } from "remotion";
import { CitizenlyFrenchAd } from "./compositions/CitizenlyFrenchAd";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CitizenlyFrenchAd"
      component={CitizenlyFrenchAd}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
