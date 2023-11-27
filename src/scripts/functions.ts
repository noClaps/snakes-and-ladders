import { p1position, p2position, p3position, p4position } from "./stores";

export function roll(player: number) {
    const positions = [p1position, p2position, p3position, p4position];

    const rollDice = Math.round(Math.random() * 5) + 1;
    const oldPosition = positions[player - 1].get();
    const newPosition = oldPosition + rollDice;

    return [newPosition, rollDice];
}

export class SnakesAndLadders {
    constructor () {
        let { snakes, ladders } = this.#generate();

        while (this.#samePos(snakes, ladders)) {
            const { snakes: newSnakes, ladders: newLadders } = this.#generate();
            snakes = newSnakes;
            ladders = newLadders;
        }

        this.#snakes = snakes;
        this.#ladders = ladders;
    }

    #snakes: number[][];
    #ladders: number[][];

    #generate() {
        const generatePair = () => [Math.round(Math.random() * 97) + 2, Math.round(Math.random() * 97) + 2];
        const hasDuplicate = (arr: number[][]) => arr.flatMap(i => i).length !== new Set(arr.flatMap(i => i)).size;
        const sameRow = (arr: number[][]) => arr.find(el => Math.floor(el[1] / 10) - Math.floor(el[0] / 10) === 0);

        const snakes: number[][] = [];
        const ladders: number[][] = [];


        while (snakes.length < 5) {
            const snake = generatePair();
            snake.sort((a, b) => b - a);

            const tempSnakes = [...snakes];
            tempSnakes.push(snake);

            if (!hasDuplicate(tempSnakes) && !sameRow(tempSnakes)) {
                snakes.push(snake);
            }
        }


        while (ladders.length < 5) {
            const ladder = generatePair();
            ladder.sort((a, b) => a - b);

            const tempLadders = [...ladders];
            tempLadders.push(ladder);

            if (!hasDuplicate(tempLadders) && !sameRow(tempLadders)) {
                ladders.push(ladder);
            }
        }


        return { snakes, ladders };
    }

    #samePos(snakes: number[][], ladders: number[][]) {
        const flatLadders = ladders.flatMap(i => i);
        const flatSnakes = snakes.flatMap(i => i);

        const combined = [...flatLadders, ...flatSnakes];

        return combined.length !== new Set(combined).size;
    }

    get() {
        return {
            snakes: this.#snakes,
            ladders: this.#ladders
        };
    }

    reset() {
        let { snakes, ladders } = this.#generate();

        while (this.#samePos(snakes, ladders)) {
            const { snakes: newSnakes, ladders: newLadders } = this.#generate();
            snakes = newSnakes;
            ladders = newLadders;
        }

        this.#snakes = snakes;
        this.#ladders = ladders;
    }
}
