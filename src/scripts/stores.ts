import { atom } from "nanostores";
import { Ladders, Snakes, samePos } from "./functions";

export const p1position = atom(1);
export const p2position = atom(1);
export const p3position = atom(1);
export const p4position = atom(1);
export const turn = atom(1);

export const ladders = new Ladders();
export const snakes = new Snakes();

while (samePos(ladders.get(), snakes.get())) {
    ladders.reset();
    snakes.reset();
}
