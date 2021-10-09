const { createBoard, whatCell } = require("./gameOfLife");

describe("Given the function createBoard()", () => {
  describe("When it receives a number 5 and a number 5", () => {
    test("Then it should return [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]'", () => {
      // Arrange
      const row = 5;
      const col = 5;
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      // Act
      const result = createBoard(row, col);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});

describe("Given the function whatCell()", () => {
  describe("When it receives an array [[0, 1, 0], [0, 1, 0], [0, 1, 0]], a number -1 and a number 1", () => {
    test("Then it should return 0", () => {
      // Arrange
      const array = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];
      const row = -1;
      const col = 1;
      const expected = 0;

      // Act
      const result = whatCell(array, row, col);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
