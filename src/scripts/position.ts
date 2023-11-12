import { atom } from "nanostores";

export const position = atom(0);

export function setPosition(player: HTMLElement, position: number) {
    // Remove from old position
    // const oldPosition = document.querySelector(`#position-${ player.dataset.position }`);
    // if (oldPosition?.querySelector(`#player`)) {
    //     oldPosition.removeChild(player);
    // }

    // Place into new position and update data-position value
    player.dataset.position = `${ position }`;
    const positionSquare = document.querySelector(`#position-${ position }`);
    positionSquare?.appendChild(player);
}