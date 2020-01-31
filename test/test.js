var TicTacToe = require("../tic-tac-toe");
var assert = require("assert");

describe("TicTacToe", function () {
  describe("rows", function () {
    it("returns the correct winner when match found on the first row", function () {
      var board_o = [
        ["o", "o", "o"],
        ["x", "x", " "],
        [" ", " ", " "]
      ];

      var board_x = [
        ["x", "x", "x"],
        ["o", "o", " "],
        ["o", " ", " "]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });

    it("returns the correct winner when match found on the second row", function() {
      var board_o = [
        ["x", "x", " "],
        ["o", "o", "o"],
        [" ", " ", " "]
      ];

      var board_x = [
        ["o", "o", " "],
        ["x", "x", "x"],
        ["o", " ", " "]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });

    it("returns the correct winner when match found on the third row", function() {
      var board_o = [
        ["x", "x", " "],
        [" ", " ", " "],
        ["o", "o", "o"]
      ];

      var board_x = [
        ["o", "o", " "],
        ["o", " ", " "],
        ["x", "x", "x"]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });
  });

  describe("columns", function () {
    it("returns the correct winner when match found on the first column", function() {
      var board_o = [
        ["o", "x", " "],
        ["o", "x", " "],
        ["o", " ", " "]
      ];

      var board_x = [
        ["x", "o", " "],
        ["x", "o", " "],
        ["x", " ", "o"]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });

    it("returns the correct winner when match found on the second column", function() {
      var board_o = [
        ["x", "o", " "],
        ["x", "o", " "],
        [" ", "o", " "]
      ];

      var board_x = [
        ["o", "x", " "],
        ["o", "x", " "],
        [" ", "x", "o"]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });

    it("returns the correct winner when match found on the third column", function() {
      var board_o = [
        ["x", " ", "o"],
        ["x", " ", "o"],
        [" ", " ", "o"]
      ];

      var board_x = [
        ["o", " ", "x"],
        ["o", " ", "x"],
        [" ", "o", "x"]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });
  });


  describe("diagonals", function () {
    it("returns the correct winner when match found in backward diagonal", function() {
      var board_o = [
        ["o", "x", " "],
        ["x", "o", " "],
        [" ", " ", "o"]
      ];

      var board_x = [
        ["x", "o", " "],
        ["o", "x", " "],
        ["o", " ", "x"]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });

    it("returns the correct winner when match found in forward diagonal", function() {
      var board_o = [
        [" ", "x", "o"],
        ["x", "o", " "],
        ["o", " ", " "]
      ];

      var board_x = [
        ["o", "o", "x"],
        ["o", "x", " "],
        ["x", " ", " "]
      ];

      assert.equal((new TicTacToe(board_o)).winner(), "o");
      assert.equal((new TicTacToe(board_x)).winner(), "x");
    });
  });

  describe("draws", function () {
    it("returns 'draw' when the board is a draw", function() {
      var board = [
        ["o", "x", "o"],
        ["o", "x", "x"],
        ["x", "o", "o"]
      ];

      assert.equal((new TicTacToe(board)).winner(), "draw");
    });
  });

  describe("5 x 5 board", function () {
    it("returns the correct winner when match found on a row", function () {
      var board = [
        ["o", "o", "o", "o", "o"],
        ["x", "x", " ", " ", " "],
        ["x", "x", "x", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "]
      ];

      assert.equal((new TicTacToe(board)).winner(), "o");
    });

    it("returns the correct winner when match found on a column", function () {
      var board = [
        ["o", "x", "x", " ", " "],
        ["o", "x", " ", " ", " "],
        ["o", "x", "x", " ", " "],
        ["o", " ", " ", " ", " "],
        ["o", " ", " ", " ", " "]
      ];

      assert.equal((new TicTacToe(board)).winner(), "o");
    });

    it("returns the correct winner when match found on a forward diagonal", function () {
      var board = [
        [" ", "x", "x", " ", "o"],
        [" ", "x", " ", "o", " "],
        ["x", "x", "o", " ", " "],
        [" ", "o", " ", " ", " "],
        ["o", " ", " ", " ", " "]
      ];

      assert.equal((new TicTacToe(board)).winner(), "o");
    });

    it("returns the correct winner when match found on a backward diagonal", function () {
      var board = [
        ["o", "x", "x", " ", " "],
        [" ", "o", " ", "x", " "],
        ["x", "x", "o", " ", " "],
        [" ", " ", " ", "o", " "],
        [" ", " ", " ", " ", "o"]
      ];

      assert.equal((new TicTacToe(board)).winner(), "o");
    });
  });

  describe("unfinished", function () {
    it("returns 'unfinished' when the board not finished yet", function () {
      var board = [
        ["o", "x", "o"],
        ["o", "x", "x"],
        ["x", "o", " "]
      ];

      assert.equal((new TicTacToe(board)).winner(), "unfinished");
    });
  });
});

