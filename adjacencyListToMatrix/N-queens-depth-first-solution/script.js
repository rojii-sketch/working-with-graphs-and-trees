function dfsNQueens(n) {
  // User Story: If n is less than 1, return an empty array
  if (n < 1) {
    return [];
  }

  const solutions = [];
  
  // Helper function to check if a queen can safely be placed at (row, col)
  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      const prevCol = board[i];
      
      // 1. Check if another queen is in the same column
      if (prevCol === col) {
        return false;
      }
      
      // 2. Check diagonals: If the row distance equals the column distance, they share a diagonal
      if (Math.abs(prevCol - col) === Math.abs(i - row)) {
        return false;
      }
    }
    return true;
  }

  // Recursive DFS function to explore board states row by row
  function solve(row, currentBoard) {
    // Base Case: If we successfully placed queens in all rows, save the solution
    if (row === n) {
      solutions.push([...currentBoard]);
      return;
    }

    // Try placing a queen in each column of the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(currentBoard, row, col)) {
        // Place the queen
        currentBoard[row] = col;
        
        // Dive deeper: Move to the next row
        solve(row + 1, currentBoard);
        
        // Backtrack: Clear the slot (implied when the loop overwrites currentBoard[row])
      }
    }
  }

  // Start the DFS traversal from row 0 with an empty board array
  solve(0, new Array(n));

  return solutions;
}