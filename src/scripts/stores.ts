import { atom } from "nanostores";
import { Ladders } from "./functions";

export const p1position = atom(1);
export const p2position = atom(1);
export const p3position = atom(1);
export const p4position = atom(1);
export const turn = atom(1);

export const ladders = new Ladders();