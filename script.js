const SIZE = 4;
let Matrix = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
let score = 0;

function initializeGame() {
    Matrix = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
    score = 0;
    document.getElementById("score").textContent = score;
    generateRandomTile();
    generateRandomTile();
    updateGrid();
}

function updateGrid() {
    const container = document.getElementById("grid-container");
    container.innerHTML = "";
    Matrix.forEach(row => {
        row.forEach(cell => {
            const tile = document.createElement("div");
            tile.className = `tile tile-${cell}`;
            tile.textContent = cell > 0 ? cell : "";
            container.appendChild(tile);
        });
    });
}

function handleMovement(event) {
    let moved = false;
    switch (event.keyCode) {
        case 38: moved = moveUp(); break;       // Up arrow
        case 40: moved = moveDown(); break;     // Down arrow
        case 37: moved = moveLeft(); break;     // Left arrow
        case 39: moved = moveRight(); break;    // Right arrow
    }
    if (moved) {
        score += 1;
        document.getElementById("score").textContent = score;
        generateRandomTile();
        updateGrid();
        checkGameStatus();
    }
}

function generateRandomTile() {
    const emptyTiles = [];
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (Matrix[i][j] === 0) emptyTiles.push({ i, j });
        }
    }
    if (emptyTiles.length > 0) {
        const { i, j } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        Matrix[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
}

function checkGameStatus() {
    if (Matrix.some(row => row.includes(2048))) {
        alert("Congratulations! You won!");
        resetGame();
    }
    if (!Matrix.some(row => row.includes(0)) && !canMove()) {
        alert("Game Over!");
        resetGame();
    }
}

function resetGame() {
    initializeGame();
}

function canMove() {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (Matrix[i][j] === 0) return true;
            if (j < SIZE - 1 && Matrix[i][j] === Matrix[i][j + 1]) return true;
            if (i < SIZE - 1 && Matrix[i][j] === Matrix[i + 1][j]) return true;
        }
    }
    return false;
}

// Move Up Function
function moveUp() {
    let moved = false;
    for (let col = 0; col < SIZE; col++) {
        let stack = [];
        for (let row = 0; row < SIZE; row++) {
            if (Matrix[row][col] !== 0) stack.push(Matrix[row][col]);
        }
        let newColumn = mergeStack(stack);
        for (let row = 0; row < SIZE; row++) {
            if (Matrix[row][col] !== newColumn[row]) moved = true;
            Matrix[row][col] = newColumn[row];
        }
    }
    return moved;
}

// Move Down Function
function moveDown() {
    let moved = false;
    for (let col = 0; col < SIZE; col++) {
        let stack = [];
        for (let row = SIZE - 1; row >= 0; row--) {
            if (Matrix[row][col] !== 0) stack.push(Matrix[row][col]);
        }
        let newColumn = mergeStack(stack).reverse();
        for (let row = 0; row < SIZE; row++) {
            if (Matrix[row][col] !== newColumn[row]) moved = true;
            Matrix[row][col] = newColumn[row];
        }
    }
    return moved;
}

// Move Left Function
function moveLeft() {
    let moved = false;
    for (let row = 0; row < SIZE; row++) {
        let stack = [];
        for (let col = 0; col < SIZE; col++) {
            if (Matrix[row][col] !== 0) stack.push(Matrix[row][col]);
        }
        let newRow = mergeStack(stack);
        for (let col = 0; col < SIZE; col++) {
            if (Matrix[row][col] !== newRow[col]) moved = true;
            Matrix[row][col] = newRow[col];
        }
    }
    return moved;
}

// Move Right Function
function moveRight() {
    let moved = false;
    for (let row = 0; row < SIZE; row++) {
        let stack = [];
        for (let col = SIZE - 1; col >= 0; col--) {
            if (Matrix[row][col] !== 0) stack.push(Matrix[row][col]);
        }
        let newRow = mergeStack(stack).reverse();
        for (let col = 0; col < SIZE; col++) {
            if (Matrix[row][col] !== newRow[col]) moved = true;
            Matrix[row][col] = newRow[col];
        }
    }
    return moved;
}

// Merge stack of numbers
function mergeStack(stack) {
    let newStack = [];
    while (stack.length > 0) {
        if (stack.length > 1 && stack[0] === stack[1]) {
            newStack.push(stack.shift() * 2);
            stack.shift();
            score += newStack[newStack.length - 1];
        } else {
            newStack.push(stack.shift());
        }
    }
    while (newStack.length < SIZE) newStack.push(0);
    return newStack;
}

document.addEventListener("DOMContentLoaded", initializeGame);
document.addEventListener("keydown", handleMovement);
