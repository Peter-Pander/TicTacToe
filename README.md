# Tic-Tac-Toe Game

## Overview
This is a simple Tic-Tac-Toe game built using JavaScript, HTML, and CSS.
The game allows two players to take turns marking the grid until one wins or the game ends in a tie.

## File Structure
The project follows a modular JavaScript structure for better maintainability and readability. Below is the order in which the files interact:

### 1. `app.js`
- Initializes the game.
- Sets up event listeners for the Start and Restart buttons.

### 2. `players.js`
- Defines the `createPlayer` function to create player objects.

### 3. `gameboard.js`
- Manages the game board.
- Handles rendering and updating the board when players make moves.

### 4. `displayController.js`
- Updates UI elements such as the message display.

### 5. `gameLogic.js`
- Contains functions for checking wins and ties.

### 6. `game.js`
- Controls the overall game flow.
- Manages turns, win conditions, and game state.

## How to Run the Game
1. Open `index.html` in a web browser.
2. Enter player names and click "Start Game."
3. Click on the board to place marks.
4. The game will determine a winner or a tie.
5. Click "Restart Game" to play again.
