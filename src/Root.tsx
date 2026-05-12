import "./index.css";
import { Composition } from "remotion";
import { MomPassed } from "./MomPassed";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MomPassed"
      component={MomPassed}
      durationInFrames={655}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
