// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

const array = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// Recorrer el tablero y clasificar segun el numero de vecinos:
function iterateBoard(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j] = 2;
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

function iterateBoard(array) {
  const arr = [
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      //row 1
      arr[i - 1][j - 1] = array[i - 1][j - 1];
      arr[i - 1][j] = array[i - 1][j];
      arr[i - 1][j + 1] = array[i - 1][j + 1];
      //row 2
      arr[i][j - 1] = array[i][j - 1];
      arr[i][j] = array[i][j];
      arr[i][j + 1] = array[i][j + 1];
      //row 3
      arr[i + 1][j - 1] = array[i + 1][j - 1];
      arr[i + 1][j] = array[i + 1][j];
      arr[i + 1][j + 1] = array[i + 1][j + 1];
    }
  }
  return arr;
}

iterateBoard(array);

for (let i = 0; i < 5; i++) {
  active_array[i] = [];
  for (let j = 0; j < 5; j++) {
    active_array[i][j] = 0;
  }
}

console.log(active_array);
