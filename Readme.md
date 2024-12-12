# 2048 Game

A simple implementation of the popular 2048 game using HTML, CSS, and JavaScript. The goal is to combine tiles with the same number to reach the 2048 tile.

---

## Features

- Fully functional 2048 game.
- Dynamic grid updates and animations.
- Responsive design for different screen sizes.
- Simple and clean user interface.

---

## How to Play

1. Use the **arrow keys** on your keyboard to move tiles in the desired direction:
   - **Up Arrow**: Move tiles up.
   - **Down Arrow**: Move tiles down.
   - **Left Arrow**: Move tiles left.
   - **Right Arrow**: Move tiles right.

2. When two tiles with the same number collide, they merge into one with a value equal to the sum of both tiles.

3. The game ends if there are no valid moves left or if you reach the **2048 tile**.

4. Click **New Game** to reset the game and start again.

---

## Setup Instructions

1. Clone or download this repository to your local machine.

2. Ensure the following files are in the project directory:
   - `index.html`: The main HTML file.
   - `style.css`: Contains the styling for the game.
   - `script.js`: Contains the JavaScript logic for the game.

3. Open the `index.html` file in a web browser to play the game.

---

## Project Structure

```
2048-game/
├── index.html     # The main HTML structure.
├── style.css      # Stylesheet for the game.
├── script.js      # JavaScript logic for the game mechanics.
```

---

## Game Logic Overview

- **Game Grid**: A 4x4 matrix represented as a 2D array.
- **Tile Movement**: Tiles move based on the arrow key input. Tiles merge if they have the same number.
- **Random Tile Generation**: A new tile (2 or 4) is added to an empty cell after each valid move.
- **Score**: Increments as tiles merge.
- **Win Condition**: The game congratulates the player upon creating a tile with a value of 2048.
- **Game Over**: Triggers if no moves are possible.

---

## Screenshots

![2048 Game](https://img.tapimg.net/market/images/479f899a0226f4fa0e74300d95501323.jpg/appicon)

---

## Technologies Used

- **HTML5**: For the game structure and layout.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For implementing the game logic and interactivity.

---

## Credits

- Inspired by the original 2048 game by Gabriele Cirulli.
- Logo sourced from [TapTap](https://img.tapimg.net/).

---

Enjoy playing the 2048 Game!

