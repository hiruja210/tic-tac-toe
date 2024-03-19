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
const audio = new Audio('../sounds/sound.mp3');
audio.addEventListener('canplaythrough', function() {
    console.log('Audio loaded successfully!');
});

startGame();

function startGame() {
    board = Array.from(Array(9).keys());
    turn = 'X';
    gameActive = true;
    message.textContent = `Player ${turn}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.removeProperty('background-color');
        cell.classList.remove('winning-cell');
    });
    winModal.classList.remove('show');
}

function placeMarker(cellIndex) {
    if (gameActive && typeof board[cellIndex] === 'number') {
        board[cellIndex] = turn;
        cells[cellIndex].textContent = turn;
        cells[cellIndex].style.color = turn === 'X' ? '#388e3c' : '#d32f2f';
        if (checkWin(turn)) {
            gameActive = false;
            message.textContent = `Player ${turn} wins!`;
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
            message.textContent = `Player ${turn}'s turn`;
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
            });
        }
    });
}

function resetBoard() {
    startGame();
}

function closeWinModal() {
    winModal.classList.remove('show');
}
