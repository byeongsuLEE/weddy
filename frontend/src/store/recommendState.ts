import ***REMOVED*** RecommendData ***REMOVED*** from "@/api/recommend.type";
import ***REMOVED*** atom ***REMOVED*** from "recoil";

export const recommendState = atom<RecommendData[]>(***REMOVED***
  key: 'recommendState',
  default: [],
***REMOVED***);