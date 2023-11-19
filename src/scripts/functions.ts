import { p1position, p2position, p3position, p4position } from "./stores";

export function roll(player: number) {
    const positions = [p1position, p2position, p3position, p4position];

    const rollDice = Math.round(Math.random() * 5) + 1;
    const oldPosition = positions[player - 1].get();
    const newPosition = oldPosition + rollDice;

    return [newPosition, rollDice];
}

export class Ladders {
    constructor () {
        this.#ladders = this.#generateLadders();
    }

    #ladders: number[][];

    #generateLadders() {
        const generateLadder = () => [Math.round(Math.random() * 97) + 2, Math.round(Math.random() * 97) + 2];
        const hasDuplicate = (arr: number[][]) => arr.flatMap(i => i).length !== new Set(arr.flatMap(i => i)).size;
        const sameRow = (arr: number[][]) => arr.find(ladder => Math.floor(ladder[1] / 10) - Math.floor(ladder[0] / 10) === 0);

        const ladders: number[][] = [];

        while (ladders.length < 7) {
            const ladder = generateLadder();
            ladder.sort((a, b) => a - b);

            const tempLadder = [...ladders];
            tempLadder.push(ladder);

            if (!hasDuplicate(tempLadder) && !sameRow(tempLadder)) {
                ladders.push(ladder);
            }
        }

        return ladders;
    }

    get() {
        return this.#ladders;
    }
    reset() {
        this.#ladders = this.#generateLadders();
    }
}
