import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";

const { fontFamily: dmSans } = loadDMSans("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
});

export const dmStack = `${dmSans}, system-ui, sans-serif`;
