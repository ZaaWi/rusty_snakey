# rusty_snakey

Simple browser Snake game built with Rust, WebAssembly, TypeScript, and webpack, with Vim-like controls.

This project started as an experiment while exploring the Rust + `wasm-bindgen` documentation and wiring a small game into the browser.

## Stack

- Rust game logic compiled to WebAssembly
- `wasm-bindgen` for JS bindings
- TypeScript for browser UI and rendering
- webpack for bundling the frontend

## How It Works

The game logic lives in `src/lib.rs`.
The browser UI, canvas rendering, and controls live in `www/`.

The board wraps around on all sides, so moving past an edge brings the snake to the opposite side.

## Prerequisites

- Rust toolchain
- `wasm-pack`
- Node.js and npm

## Build The WASM Package

Generate the `pkg/` directory from the repository root:

```bash
wasm-pack build --target web
```

## Run The Frontend

Install frontend dependencies and start the dev server:

```bash
cd www
npm install
npm run dev
```

For a production bundle:

```bash
cd www
npm run build
```

## Controls

Vim-like movement keys:

- `H`: move left
- `J`: move down
- `K`: move up
- `L`: move right

## Repository Notes

- `pkg/` is generated and should not be committed.
- `www/public/` contains generated frontend output and should not be committed.
