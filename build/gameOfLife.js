document.body.onload = changeColor();

const grid = document.querySelector(".board-container");

grid.addEventListener("click", () => {
  grid.style.background = "blue";
});

changeColor();

function createTable() {
  const gridContainer = document.querySelector(".board-game");
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      //
      const cell = document.createElement("td");
      cell.setAttribute("id", `${i}_${j}`);
      cell.setAttribute("class", "celda");
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}

// La suma de los valores sus vecinos nos da la cantidad de celdas vivas/muertas, comparo el valor suma con el central para aplicar norma
/*
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]; */

// Función que crea el board de juego con todo resetado a 0.
function createBoard(rows, cols) {
  const board = [];
  for (let i = 0; i < rows; i += 1) {
    board[i] = [];
    for (let j = 0; j < cols; j += 1) {
      board[i][j] = 0;
    }
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

// Generar un nuevo array con las celdas cambiados.

function gameOfLife(board) {
  for (let i = 0; i < 100; i += 1) {
    const newBoard = createBoard(board.length, board.length);
    for (let row = 0; row < board.length; row += 1) {
      for (let col = 0; col < board.length; col += 1) {
        const cellValue = board[row][col];
        const sumCells = countCells(board, row, col);
        newBoard[row][col] = applyRules(cellValue, sumCells);
      }
    }
    console.log(newBoard);
    gameOfLife(newBoard);
  }
}

module.exports = {
  createBoard,
  whatCell,
  countCells,
  applyRules,
  gameOfLife,
};
