import { atom } from "jotai";
import type { SectionName } from "./types";

export const computerLoadedAtom = atom(false);
export const activeSectionAtom = atom<SectionName>("Home");
export const timeOfLastClickAtom = atom<number>(0); // keeping track of this to disable the observer temporarily when the user clicks on a link
export const themeAtom = atom<"light" | "dark">("light");