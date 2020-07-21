document.addEventListener('DOMContentLoaded', startGame);


//reset board on click of reset button
document.getElementById("reset").addEventListener("click", resetBoard);
document.getElementById("smaller").addEventListener("click", smallerBoard);
document.getElementById("bigger").addEventListener("click", biggerBoard);

document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

//manual board
// var board = {
//   cells: [
//     {
//       row: 0,
//       col: 0,
//       isMine: true,
//       hidden: true
//     },
//     {
//       row: 0,
//       col: 1,
//       isMine: false,
//       hidden: true
//     },
//     {
//       row: 1,
//       col: 0,
//       isMine: false,
//       hidden: true
//     },
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       hidden: true
//     }
//   ]
// } 

//create game board with a default size 4x4
function createBoard(row=4) {
  //max size of 6x6
  if (row > 6)
    row = 6
  col = row;
  var board = {
    cells: []
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board.cells.push({
        row: i,
        col: j,
        //add random number of mines to board
        isMine: Math.random() >= 0.8,
        //all cells begin hidden
        hidden: true
      });
    }
  }
  return board;
}

function startGame() {
  

  //add surrounding mines count to cells
  var cells = board.cells;
  for (let i = 0; i < cells.length; i++) {
    cells[i].surroundingMines = countSurroundingMines(cells[i]);
  }

  lib.initBoard();
}

board = createBoard();

function checkForWin() {
  var cells = board.cells;

  //check if all mines and non-mines are marked correctly
  for (let i = 0; i < cells.length; i++) {
    if ((cells[i].isMine && !cells[i].isMarked) || (!cells[i].isMine && cells[i].hidden))
      return;
  }

  lib.displayMessage('You win!')
}

function countSurroundingMines(cell) {
  const surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  //returns number of surrounding cells that are mines
  return surroundingCells.filter(x => x.isMine).length;
}

function resetBoard() {
  //get current board size
  var cells = board.cells.length;
  var currentSize;
  for (let i = cells - 1; i > 0; i--) {
    if (i * i === cells) {
      currentSize = i;
      break;
    }
  }

  //clear board
  board = {};
  document.querySelector(".board").innerHTML = "";
  
  //re-initialize board
  board = createBoard(currentSize);

  startGame();
}

function smallerBoard() {
  var cells = board.cells.length;
  var currentSize;
  for (let i = cells - 1; i > 0; i--) {
    if (i * i === cells) {
      currentSize = i;
      break;
    }
  }
  
  if (currentSize < 4)
    currentSize = 4;

  board = {};
  document.querySelector(".board").innerHTML = "";
  
  board = createBoard(currentSize - 1);

  startGame();
}

function biggerBoard() {
  var cells = board.cells.length;
  var currentSize;
  for (let i = cells - 1; i > 0; i--) {
    if (i * i === cells) {
      currentSize = i;
      break;
    }
  }
  
  if (currentSize > 4)
    currentSize = 4;

  board = {};
  document.querySelector(".board").innerHTML = "";
  
  board = createBoard(currentSize + 1);

  startGame();
}