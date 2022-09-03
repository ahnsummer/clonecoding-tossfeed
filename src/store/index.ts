import { atom } from "recoil";

export const loadState = atom<boolean>({
  key: "loadState",
  default: false,
});