import "./index.css";
import { Composition } from "remotion";
import { EightLanguages } from "./EightLanguages";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="EightLanguages"
      component={EightLanguages}
      durationInFrames={440}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
