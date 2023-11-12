# Snakes and Ladders

A simple game of snakes and ladders implemented using Astro and SSR.

Features of this game:

- Random board on load
- Multiplayer (2+ players) on the same device

## Build instructions

1.  ```sh
    git clone https://github.com/noClaps/snakes-and-ladders.git
    cd snakes-and-ladders/
    ```

2.  ```sh
    bun install
    bun dev
    ```

    This will start a local development server at http://localhost:4321.

3.  ```sh
    bun run build
    ```

    This will build the project and place the files in `dist/`

## Licenses

All of the code in this repository is under the [0BSD license](./LICENSE), unless specified otherwise.

The licenses of all dependencies are in their respective folders in `node_modules/` when you install them
with `bun install`.

[Astro](https://astro.build/), the static site generator used to generate these sites, is licensed under
the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).
