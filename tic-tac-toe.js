var TicTacToe = function(board) {
  this.board = board;
};

TicTacToe.prototype.winner = function() {
  var row1 = this.board[0];
  var row2 = this.board[1];
  var row3 = this.board[2];

  // row checks

  if (row1[0] == "o" && row1[1] == "o" && row1[2] == "o") {
    return "o";
  }

  if (row2[0] == "o" && row2[1] == "o" && row2[2] == "o") {
    return "o"
  }

  if (row3[0] == "o" && row3[1] == "o" && row3[2] == "o") {
    return "o"
  }

  if (row1[0] == "x" && row1[1] == "x" && row1[2] == "x") {
    return "x"
  }

  if (row2[0] == "x" && row2[1] == "x" && row2[2] == "x") {
    return "x"
  }

  if (row3[0] == "x" && row3[1] == "x" && row3[2] == "x") {
    return "x"
  }

  // column checks

  if (row1[0] == "o" && row2[0] == "o" && row3[0] == "o") {
    return "o"
  }

  if (row1[1] == "o" && row2[1] == "o" && row3[1] == "o") {
    return "o"
  }

  if (row1[2] == "o" && row2[2] == "o" && row3[2] == "o") {
    return "o"
  }

  if (row1[0] == "x" && row2[0] == "x" && row3[0] == "x") {
    return "x"
  }

  if (row1[1] == "x" && row2[1] == "x" && row3[1] == "x") {
    return "x"
  }

  if (row1[2] == "x" && row2[2] == "x" && row3[2] == "x") {
    return "x"
  }

  // diagonal checks

  if (row1[0] == "o" && row2[1] == "o" && row3[2] == "o") {
    return "o"
  }

  if (row1[2] == "o" && row2[1] == "o" && row3[0] == "o") {
    return "o"
  }

  if (row1[0] == "x" && row2[1] == "x" && row3[2] == "x") {
    return "x"
  }

  if (row1[2] == "x" && row2[1] == "x" && row3[0] == "x") {
    return "x"
  }

  return "draw"
};

module.exports = TicTacToe;
