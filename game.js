// Crear el board de juego con todo resetado a 0.

let row;
let col;

function createBoard(row, col) {
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// Recorrer el tablero:
function iterateBoard(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      countNeighbours(i, j);
    }
  }
  return array;
}

iterateBoard(board);

// Clasificar según cuántos vecinos tenga: 3, 5, 8:
// Contar los vecinos vivos/muertos de cada celda cuando sean esquinas:
// Contar los vecinos vivos/muertos de cada celda cuando sean extremo no esquina:
// Contar los vecinos vivos/muertos de cada celda central:

// Aplicar las normas del juego:
// Si esta viva:
// Si 2 o 3 vecinos vivos - VIVE
// Else - MUERE
// Si está muerta:
// Si 3 vecinos vivos - VIVE
// Else - MUERE

// Generar un nuevo array con las celdas cambiados.

// Función que descarta celdas/columnas fuera del tablero y devuelve el valor de las celdas:
function whatNeighbour(array, row, col) {
  if (row < 0 || row > array.length || col < 0 || col > array.length) {
    return 0;
  }
  return array[row][col];
}

// Dada una coordenada row y col busca a sus vecinos y le aplica una función:
countNeighbours = (array, row, col) => {
  let sumNeighbours = 0;
  sumNeighbours += whatNeighbour(row - 1, col - 1);
  sumNeighbours += whatNeighbour(row - 1, col);
  sumNeighbours += whatNeighbour(row - 1, col + 1);
  sumNeighbours += whatNeighbour(row, col - 1);
  sumNeighbours += whatNeighbour(row, col + 1);
  sumNeighbours += whatNeighbour(row + 1, col - 1);
  sumNeighbours += whatNeighbour(row + 1, col);
  sumNeighbours += whatNeighbour(row + 1, col + 1);
  return sumNeighbours;
};
