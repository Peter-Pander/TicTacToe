// Controls game logic.
import createPlayer from "./players.js";
import Gameboard from "./gameboard.js";
import displayController from "./displayController.js";
import { checkForWin, checkForTie } from "./gameLogic.js";

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "O"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };

  const handleClick = (event) => {
    if (gameOver) return;
    let index = parseInt(event.target.id.split("-")[1]);
    if (Gameboard.getGameboard()[index] !== "") return;

    Gameboard.update(index, players[currentPlayerIndex].mark);

    if (checkForWin(Gameboard.getGameboard())) {
      gameOver = true;
      displayController.renderMessage(`${players[currentPlayerIndex].name} wins`);
    } else if (checkForTie(Gameboard.getGameboard())) {
      gameOver = true;
      displayController.renderMessage("It's a tie!");
    } else {
      currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }
  };

  const restart = () => {
    for (let i = 0; i < 9; i++) {
      Gameboard.update(i, "");
    }
    gameOver = false;
    displayController.renderMessage("");
  };

  return { start, restart, handleClick };
})();

export default Game;
