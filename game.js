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
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === 0 && )
    }
  }
}

iterateBoard(array);

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

function whatNeighbour(array) {
  try {
    return array[row][col]; // funcion que analice la celda
  } catch {
    return 0;
  }
}

countNeighbours = (row, col) => {
  let total_neighbours = 0;
  total_neighbours += whatNeighbour(row - 1, col - 1);
  total_neighbours += whatNeighbour(row - 1, col);
  total_neighbours += whatNeighbour(row - 1, col + 1);
  total_neighbours += whatNeighbour(row, col - 1);
  total_neighbours += whatNeighbour(row, col + 1);
  total_neighbours += whatNeighbour(row + 1, col - 1);
  total_neighbours += whatNeighbour(row + 1, col);
  total_neighbours += whatNeighbour(row + 1, col + 1);
  return total_neighbours;
};

const array = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const arr = [];
function hola(array) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      // row 1
      arr[i - 1][j - 1] = array[i - 1][j - 1];
      arr[i - 1][j] = array[i - 1][j];
      arr[i - 1][j + 1] = array[i - 1][j + 1];
      // row 2
      arr[i][j - 1] = array[i][j - 1];
      arr[i][j] = array[i][j];
      arr[i][j + 1] = array[i][j + 1];
      // row 3
      arr[i + 1][j - 1] = array[i + 1][j - 1];
      arr[i + 1][j] = array[i + 1][j];
      arr[i + 1][j + 1] = array[i + 1][j + 1];
    }
  }
  return arr;
}

hola(array);
