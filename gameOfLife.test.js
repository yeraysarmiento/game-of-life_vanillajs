const createBoard = require("./gameOfLife");

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
      expect(result).toBe(expected);
    });
  });
});
