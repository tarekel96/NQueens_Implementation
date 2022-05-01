import { DEFAULT_BOARD } from '../lib/data';

// Source: https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/
// JavaScript program to solve N Queen
// Problem using backtracking

// A utility function to check if a queen can
// be placed on board[row][col]. Note that this
// function is called when "col" queens are
// already placed in columns from 0 to col -1.
// So we need to check only left side for
// attacking queens
export const isSafe = (board, row, col, N) => {
	// Check this row on left side
	for (let i = 0; i < col; i++) {
		if (board[row][i].isQueen) return false;
	}

	// Check upper diagonal on left side
	for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j].isQueen) return false;

	// Check lower diagonal on left side
	for (let i = row, j = col; j >= 0 && i < N; i++, j--) if (board[i][j].isQueen) return false;

	return true;
};

export const solveNQUtil = (board, col, N) => {
	console.log(board);
	// base case: If all queens are placed
	// then return true
	if (col >= N) return true;

	// Consider this column and try placing
	// this queen in all rows one by one
	for (let i = 0; i < N; i++) {
		if (isSafe(board, i, col, N) === true) {
			// Place this queen in board[i][col]
			board[i][col].isQueen = true;

			// recur to place rest of the queens
			if (solveNQUtil(board, col + 1, N) === true) return true;

			// If placing queen in board[i][col
			// doesn't lead to a solution, then
			// queen from board[i][col]
			board[i][col].isQueen = false;
		}
	}
	// if the queen can not be placed in any row in
	// this column col then return false
	return false;
};

// This function solves the N Queen problem using
// Backtracking. It mainly uses solveNQUtil() to
// solve the problem. It returns false if queens
// cannot be placed, otherwise return true and
// placement of queens in the form of 1s.
// note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.
export const solveNQ = (board = DEFAULT_BOARD, N = 4) => {
	if (solveNQUtil(board, 0, N) === false) {
		console.log('Solution does not exist');
		return;
	}
	return board;
	// console.log(board);
	// return true;
};

// Driver Code
// solveNQ();
