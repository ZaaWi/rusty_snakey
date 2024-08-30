import init, { World, Direction, GameStatus} from "rusty_snake";
import { random } from "./utils/random";

init().then(wasm => {
	const CELL_SIZE = 26;

	const WORLD_WIDTH = 16;
	const SNAKE_SPAWN_INDEX = random(WORLD_WIDTH * WORLD_WIDTH);
	console.log(SNAKE_SPAWN_INDEX);

	const world = World.new(WORLD_WIDTH, SNAKE_SPAWN_INDEX);
	const worldWidth = world.width();

	const gameStatus = document.getElementById("game-status");
	const points = document.getElementById("points");

	const gameControlBtn = document.getElementById("game-control-btn");
	const canvas = <HTMLCanvasElement> document.getElementById("rusty-canvas");
	const ctx = canvas.getContext("2d");

	canvas.height = worldWidth * CELL_SIZE;
	canvas.width = worldWidth * CELL_SIZE;

	gameControlBtn.addEventListener("click", _ => {
		const status = world.game_status();

		if (status === undefined) {
			gameControlBtn.textContent = "Playing ..";
			world.start_game();
			play();
		} else {
			location.reload();
		}

		world.start_game();
		play();
	})


	document.addEventListener("keydown", (event) => {
		// console.log("Key Pressed: " + event.code);
		switch(event.code) {
			case "KeyL": {
				world.change_snake_dir(Direction.Right);
				break;
			}
			case "KeyJ":
				world.change_snake_dir(Direction.Down);
			break;
			case "KeyK":
				world.change_snake_dir(Direction.Up);
			break;
			case "KeyH":
				world.change_snake_dir(Direction.Left);
			break;
		}
	})

	function drawWorld() {
		ctx.beginPath();

		for (let x = 0; x < worldWidth + 1; x++) {
			ctx.moveTo(CELL_SIZE * x, 0)
			ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)
		}

		for (let y = 0; y < worldWidth + 1; y++) {
			ctx.moveTo(0, CELL_SIZE * y)
			ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y)
		}


		ctx.stroke();
	}

	function drawSnake() {

		const snakeCells = new Uint32Array(
			wasm.memory.buffer,
			world.snake_cells(),
			world.snake_length()
		)

		//
		//filter out duplicates
		// .filter((cell_index, i) => !(i > 0 && cell_index === snakeCells[0]))
		//
		//reverse array
		// .slice()
		// .reverse()
		//

		snakeCells
		.slice()
		.reverse()
		.forEach( (cell_index, i) => {

			const col = cell_index % worldWidth;
			const row = Math.floor(cell_index / worldWidth);

			// Overriding snake head color by body when crushing
			// filter ->
			// ctx.fillStyle = i === 0 ? "#7878db" : "#000000";
			// reversing ->
			ctx.fillStyle = i === snakeCells.length - 1 ? "#7878db" : "#000000";

			ctx.beginPath();
			ctx.fillRect(
				col * CELL_SIZE,
				row * CELL_SIZE,
				CELL_SIZE,
				CELL_SIZE
			);
		})

		ctx.stroke();
	}

	function drawReward() {

		const index = world.reward_cell();
		const col = index % worldWidth;
		const row = Math.floor(index / worldWidth);

		ctx.beginPath();
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(
			col * CELL_SIZE,
			row * CELL_SIZE,
			CELL_SIZE,
			CELL_SIZE
		);
		ctx.stroke();

	}

	function drawGameStatus() {
		gameStatus.textContent = world.game_status_text();
		points.textContent = world.points().toString();
	}

	function paint() {
		drawWorld();
		drawSnake();
		drawReward();
		drawGameStatus();
	}

	function play () {

		const status = world.game_status();

		if (status == GameStatus.Won || status == GameStatus.Lost) {
			gameControlBtn.textContent = "Try Again";
			return;
			
		}

		console.log("playing");
		const FPS = 60;
		const fps = 1000 / FPS;
		setTimeout( () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			console.log("Updating .. ");
			world.step();
			paint();
			// The method takes a callback to be invoked before the next repaint
			requestAnimationFrame(play)
		}, fps)
	}

	paint();

})
