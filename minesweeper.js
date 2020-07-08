document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true
    }
  ]
} 

// var board = createBoard();
// //create game board with a default size 4x4
// function createBoard(row = 4) {
//   if (row > 6)
//     row = 6
//   col = row;
//   var board = {
//     cells: []
//   }
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       board.cells.push({
//         row: i,
//         col: j,
//         isMine: Math.random() >= 0.85,
//         hidden: true
//       });
//     }
//   }
//   return board;
// }

function startGame() {
  var cells = board.cells;
  for (let i = 0; i < cells.length; i++) {
    cells[i].surroundingMines = countSurroundingMines(cells[i]);
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  lib.initBoard();
}

function checkForWin() {
  let cells = board.cells;
  for (let i = 0; i < cells.length; i++) {
    if ((cells[i].isMine && !cells[i].isMarked) || (!cells[i].isMine && cells[i].hidden))
      return;
  }

  lib.displayMessage('You win!')
}

function countSurroundingMines (cell) {
  const surroundingMines = lib.getSurroundingCells(cell.row, cell.col);
  return surroundingMines.filter(x => x.isMine).length;
}