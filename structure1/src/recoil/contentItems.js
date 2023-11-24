import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const contentItems = atom({
  key: "item",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
