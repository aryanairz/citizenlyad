import "./index.css";
import { Composition } from "remotion";
import { MiniQuiz } from "./MiniQuiz";
import { MomPassed } from "./MomPassed";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MiniQuiz"
        component={MiniQuiz}
        durationInFrames={1180}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MomPassed"
        component={MomPassed}
        durationInFrames={655}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
