// La suma de los valores sus vecinos nos da la cantidad de celdas vivas/muertas, comparo el valor suma con el central para aplicar norma
/*
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]; */

//
const cols = 50;
const rows = 50;
let game = false;

let board = createBoard();
let finalBoard = createBoard();

let rounds;

// Función que CREA el board (array) de juego con todo resetado a 0.
function createBoard() {
  const board = [];
  for (let i = 0; i < rows; i += 1) {
    board[i] = [];
    for (let j = 0; j < cols; j += 1) {
      board[i][j] = 0;
    }
  }
  return board;
}

// Funcion que resetea todo el board:
function resetBoard() {
  const rowcol = this.id.split("-");
  const row = rowcol[0];
  const col = rowcol[1];

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      board[i][j] = 0;
      const resetCell = document.getElementById(`${i}-${j}`);
      resetCell.setAttribute("class", "dead");
    }
  }
  return board;
}

// Función que DIBUJA el board de juego con todo resetado a 0.
function drawBoard() {
  const gridContainer = document.querySelector(".board-container");
  const table = document.createElement("div");

  table.setAttribute("class", "board-table");
  gridContainer.appendChild(table);

  for (let i = 0; i < rows; i += 1) {
    const rowsNumber = document.createElement("div");
    for (let j = 0; j < cols; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("id", `${i}-${j}`);
      cell.setAttribute("class", "dead");
      rowsNumber.appendChild(cell);
      cell.onclick = cellToLife;
    }
    table.appendChild(rowsNumber);
  }
}

// El usuario revive las celdas con clicks (asigna 1 o 0 en cada click):
function cellToLife() {
  const rowcol = this.id.split("-");
  const row = rowcol[0];
  const col = rowcol[1];

  if (board[row][col] === 0) {
    this.setAttribute("class", "alive");
    board[row][col] = 1;
  } else {
    this.setAttribute("class", "dead");
    board[row][col] = 0;
  }
  return board;
}

// Función que descarta celdas/columnas fuera del tablero y devuelve el valor de las celdas:
function whatCell(array, row, col) {
  let cellValue;
  if (row < 0 || row > array.length - 1 || col < 0 || col > array.length - 1) {
    cellValue = 0;
  } else {
    cellValue = array[row][col];
  }
  return cellValue;
}

// Dada una coordenada row y col busca a sus vecinos y le aplica una función:
function countCells(array, row, col) {
  let sumCells = 0;
  // Fila superior
  sumCells += whatCell(array, row - 1, col - 1);
  sumCells += whatCell(array, row - 1, col);
  sumCells += whatCell(array, row - 1, col + 1);
  // Fila central
  sumCells += whatCell(array, row, col - 1);
  sumCells += whatCell(array, row, col + 1);
  // Fila inferior
  sumCells += whatCell(array, row + 1, col - 1);
  sumCells += whatCell(array, row + 1, col);
  sumCells += whatCell(array, row + 1, col + 1);
  return sumCells;
}

// Aplicar las normas del juego:
// Si esta viva:
// Si 2 o 3 vecinos vivos - VIVE
// Else - MUERE
// Si está muerta:
// Si 3 vecinos vivos - VIVE
// Else - MUERE
// DOM: Cuando cambie a 1/0 que cambie su clase a dead/alive:
function applyRules(cellValue, sumCells) {
  let newCellValue;
  if (cellValue === 0 && sumCells === 3) {
    newCellValue = 1;
  } else if (cellValue === 1) {
    if (sumCells === 2 || sumCells === 3) {
      newCellValue = 1;
    } else {
      newCellValue = 0;
    }
  } else {
    newCellValue = 0;
  }
  return newCellValue;
}

// Modifica el finalBoard (Array) en función de los valores de board original resultantes:
function drawFinalBoard() {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      const cellValue = board[row][col];
      const sumCells = countCells(board, row, col);
      finalBoard[row][col] = applyRules(cellValue, sumCells);
    }
  }
  renovateCells();
  board = finalBoard;
  finalBoard = createBoard(rows, cols);

  setTimeout(drawFinalBoard, 500);
}

// Modifica las clases de las celdas en función del finalBoard (Array):
function renovateCells() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const drawCell = document.getElementById(`${i}-${j}`);
      if (finalBoard[i][j] === 1) {
        drawCell.className = "alive";
      } else {
        drawCell.className = "dead";
      }
    }
  }
}

// Botones de control
function startButtonPush() {
  const startButton = document.getElementById("button-start");
  game = true;
  startButton.onclick = drawFinalBoard;
}

function stopButtonPush() {
  const stopButton = document.getElementById("button-stop");
  game = false;
  stopButton.onclick = resetBoard;
}

// Inicio del programa;
function initiateScreen() {
  createBoard();
  drawBoard();
  startButtonPush();
  stopButtonPush();
}

window.onload = initiateScreen;

/* module.exports = {
  createBoard,
  whatCell,
  countCells,
  applyRules,
  gameOfLife,
}; */
