import type { ComponentType } from "react";
import {
  CitizenlyIndonesianCreativeAd,
  CitizenlyFinnishCreativeAd,
  CitizenlyTagalogCreativeAd,
} from "./AsiaFinnishAds";
import {
  CitizenlyCatalanCreativeAd,
  CitizenlyDanishCreativeAd,
  CitizenlyItalianCreativeAd,
  CitizenlyPortugueseCreativeAd,
} from "./EuropeAds";
import {
  CitizenlyDutchCreativeAd,
  CitizenlyGermanCreativeAd,
  CitizenlyNorwegianCreativeAd,
  CitizenlySwedishCreativeAd,
} from "./NorthAds";

export const campaignTwoCompositions: readonly {
  id: string;
  component: ComponentType;
}[] = [
  { id: "CitizenlyGermanCreativeAd", component: CitizenlyGermanCreativeAd },
  { id: "CitizenlyDutchCreativeAd", component: CitizenlyDutchCreativeAd },
  { id: "CitizenlySwedishCreativeAd", component: CitizenlySwedishCreativeAd },
  {
    id: "CitizenlyNorwegianCreativeAd",
    component: CitizenlyNorwegianCreativeAd,
  },
  { id: "CitizenlyDanishCreativeAd", component: CitizenlyDanishCreativeAd },
  { id: "CitizenlyItalianCreativeAd", component: CitizenlyItalianCreativeAd },
  {
    id: "CitizenlyPortugueseCreativeAd",
    component: CitizenlyPortugueseCreativeAd,
  },
  { id: "CitizenlyCatalanCreativeAd", component: CitizenlyCatalanCreativeAd },
  {
    id: "CitizenlyIndonesianCreativeAd",
    component: CitizenlyIndonesianCreativeAd,
  },
  { id: "CitizenlyTagalogCreativeAd", component: CitizenlyTagalogCreativeAd },
  { id: "CitizenlyFinnishCreativeAd", component: CitizenlyFinnishCreativeAd },
] as const;
