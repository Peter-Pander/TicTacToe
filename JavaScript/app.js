// This file initializes the game.
import Game from "./game.js";

document.querySelector("#start-button").addEventListener("click", Game.start);
document.querySelector("#restart-button").addEventListener("click", Game.restart);
console.log("main.js loaded!");
