function generateBoard(whiteQueen, blackQueen) {
  let board = []; // initialize empty array for the board

  for (let x = 0; x < 8; x++) {
    // x will add consecutive arrays to the board to
    // represent rows
    let row = [];
    for (let y = 0; y < 8; y++) {
      // y will create the arrays for each row to 
      // represent columns
      row.push(0);
    }
    board.push(row);
  }

  // add the two Queens based on their coordinates
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

function queenThreat(board) {
  let isThreat = false;

  // check each row
  for (x = 0; x < 8; x++){
  let numberQueens = 0;
    for (y = 0; y < 8; y++) {
      if (board[x][y] === 1) {
        numberQueens++;
      }
    }
    if (numberQueens === 2) {
      isThreat = true;
    }
  }

  // check each column
  for (y = 0; y < 8; y++){
    let numberQueens = 0;
      for (x = 0; x < 8; x++) {
        if (board[x][y] === 1) {
          numberQueens++;
        }
      } 
      if (numberQueens === 2) {
        isThreat = true;
      }
    }

  // check "forward slash" diagonal
  // Queens are on the same diagonal if the sum of their coordinates
  // are the same
  if ((whiteQueen[0] + whiteQueen[1]) === (blackQueen[0] + blackQueen[1])) {
    isThreat = true;
  }

  // check the "backslash" diagonal
  // Queens are on the same diagonal if the difference between their
  // coordinates are the same
  if ((whiteQueen[0] - whiteQueen[1]) === (blackQueen[0] - blackQueen[1])) {
    isThreat = true;
  }

  // return IsThreat which states whether the Queens are a threat
  return isThreat;
}

let whiteQueen = [5, 1];
let blackQueen = [6, 2];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));