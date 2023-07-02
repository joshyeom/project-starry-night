import { atom } from "recoil";

export const cameraPositionState = atom({
  key: "cameraPositionState",
  default: {
    x: -0.9587738871461505,
    y: 0.9319559440928621,
    z: -1.2050770728864884,
  },
});

export const isInfoAtom = atom({
  key: "isInfo",
  default: false,
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

export const nickNameAtom = atom({
  key: "nickName",
  default: "",
});

export const loginModalAtom = atom({
  key: "loginModal",
  default: false,
});

export const isAwarnessAtom = atom({
  key: "awarness",
  default: false,
});

export const pollutionLevelAtom = atom({
  key: "pollutionLevel",
  default: 0,
});
