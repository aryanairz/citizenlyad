import type {ComponentType} from "react";
import {CitizenlyCatalanCreativeAd, CitizenlyDanishCreativeAd, CitizenlyDutchCreativeAd, CitizenlyFinnishCreativeAd, CitizenlyGermanCreativeAd, CitizenlyIndonesianCreativeAd, CitizenlyItalianCreativeAd, CitizenlyNorwegianCreativeAd, CitizenlyPortugueseCreativeAd, CitizenlySwedishCreativeAd, CitizenlyTagalogCreativeAd} from "./Ads";

export const campaignThreeCompositions: Array<{id: string; component: ComponentType}> = [
  {id:"CitizenlyGermanCreativeAd",component:CitizenlyGermanCreativeAd},
  {id:"CitizenlyDutchCreativeAd",component:CitizenlyDutchCreativeAd},
  {id:"CitizenlySwedishCreativeAd",component:CitizenlySwedishCreativeAd},
  {id:"CitizenlyNorwegianCreativeAd",component:CitizenlyNorwegianCreativeAd},
  {id:"CitizenlyDanishCreativeAd",component:CitizenlyDanishCreativeAd},
  {id:"CitizenlyItalianCreativeAd",component:CitizenlyItalianCreativeAd},
  {id:"CitizenlyPortugueseCreativeAd",component:CitizenlyPortugueseCreativeAd},
  {id:"CitizenlyCatalanCreativeAd",component:CitizenlyCatalanCreativeAd},
  {id:"CitizenlyIndonesianCreativeAd",component:CitizenlyIndonesianCreativeAd},
  {id:"CitizenlyTagalogCreativeAd",component:CitizenlyTagalogCreativeAd},
  {id:"CitizenlyFinnishCreativeAd",component:CitizenlyFinnishCreativeAd},
];
