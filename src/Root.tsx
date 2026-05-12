import "./index.css";
import { Composition } from "remotion";
import { MiniQuiz } from "./MiniQuiz";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MiniQuiz"
      component={MiniQuiz}
      durationInFrames={1180}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
