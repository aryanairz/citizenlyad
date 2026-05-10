import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";
import { loadFont as loadNotoGujarati } from "@remotion/google-fonts/NotoSansGujarati";
import { loadFont as loadNotoKR } from "@remotion/google-fonts/NotoSansKR";
import { loadFont as loadNotoMalayalam } from "@remotion/google-fonts/NotoSansMalayalam";

const { fontFamily: dmSans } = loadDMSans("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
});

const { fontFamily: notoMalayalam } = loadNotoMalayalam("normal", {
  weights: ["400", "700"],
  subsets: ["malayalam"],
});

const { fontFamily: notoGujarati } = loadNotoGujarati("normal", {
  weights: ["400", "700"],
  subsets: ["gujarati"],
});

const { fontFamily: notoKR } = loadNotoKR("normal", {
  weights: ["400", "700"],
  subsets: ["korean"],
});

export const dmStack = `${dmSans}, system-ui, sans-serif`;
export const malayalamStack = `${notoMalayalam}, ${dmSans}, "Noto Sans Malayalam", system-ui, sans-serif`;
export const gujaratiStack = `${notoGujarati}, ${dmSans}, "Noto Sans Gujarati", system-ui, sans-serif`;
export const koreanStack = `${notoKR}, ${dmSans}, "Noto Sans KR", "Noto Sans CJK KR", system-ui, sans-serif`;
