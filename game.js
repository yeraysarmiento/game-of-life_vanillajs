//La suma de los valores sus vecinos nos da la cantidad de celdas vivas/muertas, comparo el valor suma con el central para aplicar norma

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
let row;
let col;

// Función que crea el board de juego con todo resetado a 0.
function createBoard(row, col) {
  const board = [];
  for (let i = 0; i < row; i += 1) {
    board[i] = [];
    for (let j = 0; j < col; j += 1) {
      board[i][j] = 0;
    }
  }
  return board;
}

// Función que recorre el tablero:
function iterateBoard(board) {
  for (row = 0; row < board.length; row += 1) {
    for (col = 0; col < board.length; col += 1) {
      countCells(board, row, col);
    }
  }
  return board;
}

// Función que descarta celdas/columnas fuera del tablero y devuelve el valor de las celdas:
function whatCell(array, row, col) {
  if (row < 0 || row > array.length || col < 0 || col > array.length) {
    return 0;
  }
  return array[row][col];
}

// Dada una coordenada row y col busca a sus vecinos y le aplica una función:
countCells = (array, row, col) => {
  const sumCells = 0;
  // Fila superior
  sumNeighbours += whatCell(row - 1, col - 1);
  sumNeighbours += whatCell(row - 1, col);
  sumNeighbours += whatCell(row - 1, col + 1);
  // Fila central
  sumNeighbours += whatCell(row, col - 1);
  sumNeighbours += whatCell(row, col + 1);
  // Fila inferior
  sumNeighbours += whatCell(row + 1, col - 1);
  sumNeighbours += whatCell(row + 1, col);
  sumNeighbours += whatCell(row + 1, col + 1);
  return sumCells;
};

// Aplicar las normas del juego:
// Si esta viva:
// Si 2 o 3 vecinos vivos - VIVE
// Else - MUERE
// Si está muerta:
// Si 3 vecinos vivos - VIVE
// Else - MUERE

// Generar un nuevo array con las celdas cambiados.
