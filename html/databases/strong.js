
//Older Codes
// JavaScript code
// let board;
// let turn;
// let gameActive;
// let gameHistory = []; // Array to store game history

// const WINNING_COMBINATIONS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const cells = document.querySelectorAll('.cell');
// const message = document.getElementById('message');
// const winModal = document.getElementById('winModal');
// const winnerText = document.getElementById('winner');
// const winMessage = document.getElementById('winnerText');

// // Load the audio file
// const audio = new Audio('sound.mp3');
// audio.addEventListener('canplaythrough', function() {
//     console.log('Audio loaded successfully!');
// });

// startGame();

// function startGame() {
//     board = Array.from(Array(9).keys());
//     turn = Math.floor(Math.random() * 2) == 0 ? 'X' : 'O'; // Randomly determine who plays first
//     gameActive = true;
//     message.textContent = `Player ${turn}'s turn`;
//     cells.forEach(cell => {
//         cell.textContent = '';
//         cell.style.removeProperty('color');
//         cell.style.removeProperty('background-color');
//         cell.classList.remove('winning-cell');
//         cell.classList.add('cell-hover'); // Add hover effect to all cells
//     });
//     winModal.classList.remove('show');
//     if (turn === 'O') {
//         setTimeout(makeComputerMove, 500); // Computer plays first with a short delay
//     }
// }

// function placeMarker(cellIndex) {
//     if (gameActive && typeof board[cellIndex] === 'number') {
//         board[cellIndex] = turn;
//         cells[cellIndex].textContent = turn;
//         cells[cellIndex].style.color = turn === 'X' ? '#388e3c' : '#d32f2f';
//         gameHistory.push(cellIndex); // Record the move
//         if (checkWin(turn)) {
//             gameActive = false;
//             if (turn === 'O') {
//                 message.textContent = 'Computer wins!';
//             } else {
//                 message.textContent = `Player ${turn} wins!`;
//             }
//             winModal.classList.add('show');
//             winnerText.textContent = `${turn}`;

//             // Highlight winning cells
//             highlightWinningCells(turn);
//         } else if (checkDraw()) {
//             gameActive = false;
//             message.textContent = 'It\'s a draw!';
//             winModal.classList.add('show');
//             winMessage.textContent = 'It\'s a draw!';
//         } else {
//             turn = turn === 'X' ? 'O' : 'X';
//             message.textContent = `Player ${turn === 'X' ? 'X' : 'Computer'}'s turn`;
//             if (turn === 'O') {
//                 setTimeout(makeComputerMove, 500); // Computer's turn after a short delay
//             }
//         }
//         // Play the audio after checking game conditions
//         audio.play()
//             .then(() => console.log('Audio started playing!'))
//             .catch(error => console.error('Error playing audio:', error));
//     }
// }

// function checkWin(player) {
//     return WINNING_COMBINATIONS.some(combination => {
//         return combination.every(index => {
//             return board[index] === player;
//         });
//     });
// }

// function checkDraw() {
//     return board.every(cell => {
//         return typeof cell === 'string';
//     });
// }

// function highlightWinningCells(player) {
//     WINNING_COMBINATIONS.forEach(combination => {
//         if (combination.every(index => board[index] === player)) {
//             combination.forEach(index => {
//                 cells[index].classList.add('winning-cell');
//                 // Remove hover effect from winning cells
//                 cells[index].classList.remove('cell-hover');
//             });
//         }
//     });
// }

// function makeComputerMove() {
//     // AI logic using minimax algorithm
//     let bestScore = -Infinity;
//     let move;
//     for (let i = 0; i < board.length; i++) {
//         if (typeof board[i] === 'number') {
//             board[i] = 'O';
//             let score = minimax(board, 0, false);
//             board[i] = i; // Undo the move
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = i;
//             }
//         }
//     }
//     placeMarker(move);
// }

// function minimax(board, depth, isMaximizing) {
//     if (checkWin('X')) {
//         return -10;
//     } else if (checkWin('O')) {
//         return 10;
//     } else if (checkDraw()) {
//         return 0;
//     }

//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (typeof board[i] === 'number') {
//                 board[i] = 'O';
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = i; // Undo the move
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (typeof board[i] === 'number') {
//                 board[i] = 'X';
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = i; // Undo the move
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// }

// function resetBoard() {
//     startGame();
// }

// function closeWinModal() {
//     winModal.classList.remove('show');
// }

// // Event listener for the copy button
// document.getElementById('copyButton').addEventListener('click', function() {
//     saveGameHistory(gameHistory);
// });

// function saveGameHistory(history) {
//     // Convert game history to a formatted string
//     let gameString = history.join(' ') + ' | ' + (history.length % 2 === 0 ? 'O' : 'X') + ' | ' + (checkDraw() ? 'Draw' : (checkWin('X') ? 'X wins' : 'O wins')) + ' #';

//     // Add the game string to a textarea element
//     let textarea = document.createElement('textarea');
//     textarea.value = gameString;
//     document.body.appendChild(textarea);

//     // Copy the contents of the textarea to the clipboard
//     textarea.select();
//     document.execCommand('copy');

//     // Remove the textarea from the DOM
//     document.body.removeChild(textarea);

//     // Inform the user that the game history has been copied
//     alert('Game history has been copied to clipboard!');
// }







//Old Code

// // JavaScript code
// let board;
// let turn;
// let gameActive;
// let gameHistory = []; // Array to store game history

// const WINNING_COMBINATIONS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const cells = document.querySelectorAll('.cell');
// const message = document.getElementById('message');
// const winModal = document.getElementById('winModal');
// const winnerText = document.getElementById('winner');
// const winMessage = document.getElementById('winnerText');

// // Load the audio file
// const audio = new Audio('sound.mp3');
// audio.addEventListener('canplaythrough', function() {
//     console.log('Audio loaded successfully!');
// });

// startGame();

// function startGame() {
//     board = Array.from(Array(9).keys());
//     turn = Math.floor(Math.random() * 2) == 0 ? 'X' : 'O'; // Randomly determine who plays first
//     gameActive = true;
//     message.textContent = `Player ${turn}'s turn`;
//     cells.forEach(cell => {
//         cell.textContent = '';
//         cell.style.removeProperty('color');
//         cell.style.removeProperty('background-color');
//         cell.classList.remove('winning-cell');
//         cell.classList.add('cell-hover'); // Add hover effect to all cells
//     });
//     winModal.classList.remove('show');
//     if (turn === 'O') {
//         setTimeout(makeComputerMove, 500); // Computer plays first with a short delay
//     }
// }

// function placeMarker(cellIndex) {
//     if (gameActive && typeof board[cellIndex] === 'number') {
//         board[cellIndex] = turn;
//         cells[cellIndex].textContent = turn;
//         cells[cellIndex].style.color = turn === 'X' ? '#388e3c' : '#d32f2f';
//         gameHistory.push(cellIndex); // Record the move
//         if (checkWin(turn)) {
//             gameActive = false;
//             if (turn === 'O') {
//                 message.textContent = 'Computer wins!';
//             } else {
//                 message.textContent = `Player ${turn} wins!`;
//             }
//             winModal.classList.add('show');
//             winnerText.textContent = `${turn}`;

//             // Highlight winning cells
//             highlightWinningCells(turn);
//         } else if (checkDraw()) {
//             gameActive = false;
//             message.textContent = 'It\'s a draw!';
//             winModal.classList.add('show');
//             winMessage.textContent = 'It\'s a draw!';
//         } else {
//             turn = turn === 'X' ? 'O' : 'X';
//             message.textContent = `Player ${turn === 'X' ? 'X' : 'Computer'}'s turn`;
//             if (turn === 'O') {
//                 setTimeout(makeComputerMove, 500); // Computer's turn after a short delay
//             }
//         }
//         // Play the audio after checking game conditions
//         audio.play()
//             .then(() => console.log('Audio started playing!'))
//             .catch(error => console.error('Error playing audio:', error));
//     }
// }

// function checkWin(player) {
//     return WINNING_COMBINATIONS.some(combination => {
//         return combination.every(index => {
//             return board[index] === player;
//         });
//     });
// }

// function checkDraw() {
//     return board.every(cell => {
//         return typeof cell === 'string';
//     });
// }

// function highlightWinningCells(player) {
//     WINNING_COMBINATIONS.forEach(combination => {
//         if (combination.every(index => board[index] === player)) {
//             combination.forEach(index => {
//                 cells[index].classList.add('winning-cell');
//                 // Remove hover effect from winning cells
//                 cells[index].classList.remove('cell-hover');
//             });
//         }
//     });
// }

// function makeComputerMove() {
//     // AI logic using minimax algorithm
//     let bestScore = -Infinity;
//     let move;
//     for (let i = 0; i < board.length; i++) {
//         if (typeof board[i] === 'number') {
//             board[i] = 'O';
//             let score = minimax(board, 0, false);
//             board[i] = i; // Undo the move
//             if (score > bestScore) {
//                 bestScore = score;
//                 move = i;
//             }
//         }
//     }
//     placeMarker(move);
// }

// function minimax(board, depth, isMaximizing) {
//     if (checkWin('X')) {
//         return -10;
//     } else if (checkWin('O')) {
//         return 10;
//     } else if (checkDraw()) {
//         return 0;
//     }

//     if (isMaximizing) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (typeof board[i] === 'number') {
//                 board[i] = 'O';
//                 let score = minimax(board, depth + 1, false);
//                 board[i] = i; // Undo the move
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < board.length; i++) {
//             if (typeof board[i] === 'number') {
//                 board[i] = 'X';
//                 let score = minimax(board, depth + 1, true);
//                 board[i] = i; // Undo the move
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// }

// function resetBoard() {
//     startGame();
// }

// function closeWinModal() {
//     winModal.classList.remove('show');
// }


// // Function to convert string to binary
// function stringToBinary(str) {
//     let binary = '';
//     for (let i = 0; i < str.length; i++) {
//         binary += str[i].charCodeAt(0).toString(2) + ' ';
//     }
//     return binary.trim(); // Remove trailing space
// }


// // Event listener for the copy button
// document.getElementById('copyButton').addEventListener('click', function() {
//     saveGameHistory(gameHistory);
// });

// function saveGameHistory(history) {
//     // Convert game history to a formatted string
//     let gameString = history.join(' ') + ' | ' + (history.length % 2 === 0 ? 'O' : 'X') + ' | ' + (checkDraw() ? 'Draw' : (checkWin('X') ? 'X wins' : 'O wins')) + ' #';

//     // Convert the game history string to binary
//     let binaryGameString = stringToBinary(gameString);

//     // Add the binary game string to a textarea element
//     let textarea = document.createElement('textarea');
//     textarea.value = binaryGameString;
//     document.body.appendChild(textarea);

//     // Copy the contents of the textarea to the clipboard
//     textarea.select();
//     document.execCommand('copy');

//     // Remove the textarea from the DOM
//     document.body.removeChild(textarea);

//     // Inform the user that the game history has been copied
//     alert('Game history has been copied to clipboard in binary format!');
// }

// // Function to convert string to binary
// function stringToBinary(str) {
//     let binary = '';
//     for (let i = 0; i < str.length; i++) {
//         binary += str[i].charCodeAt(0).toString(2) + ' ';
//     }
//     return binary.trim(); // Remove trailing space
// }


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
// let gameHistory = []; // Array to store game history

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

        // Save the game move to history
        gameHistory.push(cellIndex);
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
    // AI logic using minimax algorithm
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < board.length; i++) {
        if (typeof board[i] === 'number') {
            board[i] = 'O';
            let score = minimax(board, 0, false);
            board[i] = i; // Undo the move
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    placeMarker(move);
}

function minimax(board, depth, isMaximizing) {
    if (checkWin('X')) {
        return -10;
    } else if (checkWin('O')) {
        return 10;
    } else if (checkDraw()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (typeof board[i] === 'number') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = i; // Undo the move
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (typeof board[i] === 'number') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = i; // Undo the move
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function resetBoard() {
    startGame();
}

function closeWinModal() {
    winModal.classList.remove('show');
}

// Function to convert string to binary
function stringToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        binary += str[i].charCodeAt(0).toString(2) + ' ';
    }
    return binary.trim(); // Remove trailing space
}

// Event listener for the copy button
document.getElementById('copyButton').addEventListener('click', function() {
    saveGameHistory(gameHistory);
});


// Ensure gameHistory is declared globally
let gameHistory = gameHistory || '';

function saveGameHistory(history) {
    // Convert game history to a formatted string
    let gameString = history.join(' ') + ' | ' + (history.length % 2 === 0 ? 'O' : 'X') + ' | ' + (checkDraw() ? 'Draw' : (checkWin('X') ? 'X wins' : 'O wins')) + ' #';

    // Append the game string to the game history
    gameHistory += gameString;

    // Convert the game history string to binary
    let binaryGameString = stringToBinary(gameHistory);

    // Add the binary game string to a textarea element
    let textarea = document.createElement('textarea');
    textarea.value = binaryGameString;
    document.body.appendChild(textarea);

    // Copy the contents of the textarea to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Inform the user
    alert('Game history copied to clipboard in binary format!');
}




