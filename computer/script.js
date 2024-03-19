// JavaScript code
let board;
let turn;
let gameActive;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const winModal = document.getElementById('winModal');
const winnerText = document.getElementById('winner');
const winMessage = document.getElementById('winnerText');

// Load the audio file
const audio = new Audio('sound.mp3');
audio.addEventListener('canplaythrough', function() {
    console.log('Audio loaded successfully!');
});

startGame();

function startGame() {
    board = Array.from(Array(9).keys());
    turn = Math.floor(Math.random() * 2) == 0 ? 'X' : 'O'; // Randomly determine who plays first
    gameActive = true;
    message.textContent = `Player ${turn}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.removeProperty('color');
        cell.style.removeProperty('background-color');
        cell.classList.remove('winning-cell');
        cell.classList.add('cell-hover'); // Add hover effect to all cells
    });
    winModal.classList.remove('show');
    if (turn === 'O') {
        setTimeout(makeComputerMove, 500); // Computer plays first with a short delay
    }
}

function placeMarker(cellIndex) {
    if (gameActive && typeof board[cellIndex] === 'number') {
        board[cellIndex] = turn;
        cells[cellIndex].textContent = turn;
        cells[cellIndex].style.color = turn === 'X' ? '#388e3c' : '#d32f2f';
        if (checkWin(turn)) {
            gameActive = false;
            if (turn === 'O') {
                message.textContent = 'Computer wins!';
            } else {
                message.textContent = `Player ${turn} wins!`;
            }
            winModal.classList.add('show');
            winnerText.textContent = `${turn}`;

            // Highlight winning cells
            highlightWinningCells(turn);
        } else if (checkDraw()) {
            gameActive = false;
            message.textContent = 'It\'s a draw!';
            winModal.classList.add('show');
            winMessage.textContent = 'It\'s a draw!';
        } else {
            turn = turn === 'X' ? 'O' : 'X';
            message.textContent = `Player ${turn === 'X' ? 'X' : 'Computer'}'s turn`;
            if (turn === 'O') {
                setTimeout(makeComputerMove, 500); // Computer's turn after a short delay
            }
        }
        // Play the audio after checking game conditions
        audio.play()
            .then(() => console.log('Audio started playing!'))
            .catch(error => console.error('Error playing audio:', error));
    }
}

function checkWin(player) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function checkDraw() {
    return board.every(cell => {
        return typeof cell === 'string';
    });
}

function highlightWinningCells(player) {
    WINNING_COMBINATIONS.forEach(combination => {
        if (combination.every(index => board[index] === player)) {
            combination.forEach(index => {
                cells[index].classList.add('winning-cell');
                // Remove hover effect from winning cells
                cells[index].classList.remove('cell-hover');
            });
        }
    });
}

function makeComputerMove() {
    // Make a random move
    const availableMoves = board.filter(cell => typeof cell === 'number');
    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    placeMarker(move);
}

function resetBoard() {
    startGame();
}

function closeWinModal() {
    winModal.classList.remove('show');
}
