import { PieceMap } from "../constant";

export const possibleMoves = (id: number, pieces: PieceMap): Set<number> => {
  const piece = pieces[id];
  if (!piece) return new Set();

  const { color, type } = piece;
  const row = Math.floor(id / 8);
  const col = id % 8;
  const moves: Set<number> = new Set();

  const addMove = (id: number) => {
    if (pieces[id]?.color !== color) moves.add(id);
  };

  switch (type) {
    case "pawn":
      if (color === "white") {
        if (row === 1 && !pieces[id + 8] && !pieces[id + 16])
          moves.add(id + 16);
        if (!pieces[id + 8]) moves.add(id + 8);
        if (pieces[id + 7]?.color === "black") moves.add(id + 7);
        if (pieces[id + 9]?.color === "black") moves.add(id + 9);
      } else {
        if (row === 6 && !pieces[id - 8] && !pieces[id - 16])
          moves.add(id - 16);
        if (!pieces[id - 8]) moves.add(id - 8);
        if (pieces[id - 7]?.color === "white") moves.add(id - 7);
        if (pieces[id - 9]?.color === "white") moves.add(id - 9);
      }
      break;

    case "rook":
      for (let i = row + 1; i < 8; i++) {
        addMove(i * 8 + col);
        if (pieces[i * 8 + col]) break;
      }
      for (let i = row - 1; i >= 0; i--) {
        addMove(i * 8 + col);
        if (pieces[i * 8 + col]) break;
      }
      for (let i = col + 1; i < 8; i++) {
        addMove(row * 8 + i);
        if (pieces[row * 8 + i]) break;
      }
      for (let i = col - 1; i >= 0; i--) {
        addMove(row * 8 + i);
        if (pieces[row * 8 + i]) break;
      }
      break;

    case "knight":
      if (row + 2 < 8) {
        if (col + 1 < 8) addMove((row + 2) * 8 + col + 1);
        if (col - 1 >= 0) addMove((row + 2) * 8 + col - 1);
      }
      if (row - 2 >= 0) {
        if (col + 1 < 8) addMove((row - 2) * 8 + col + 1);
        if (col - 1 >= 0) addMove((row - 2) * 8 + col - 1);
      }
      if (col + 2 < 8) {
        if (row + 1 < 8) addMove((row + 1) * 8 + col + 2);
        if (row - 1 >= 0) addMove((row - 1) * 8 + col + 2);
      }
      if (col - 2 >= 0) {
        if (row + 1 < 8) addMove((row + 1) * 8 + col - 2);
        if (row - 1 >= 0) addMove((row - 1) * 8 + col - 2);
      }
      break;

    case "bishop":
      for (let i = 1; row + i < 8 && col + i < 8; i++) {
        addMove((row + i) * 8 + col + i);
        if (pieces[(row + i) * 8 + col + i]) break;
      }
      for (let i = 1; row + i < 8 && col - i >= 0; i++) {
        addMove((row + i) * 8 + col - i);
        if (pieces[(row + i) * 8 + col - i]) break;
      }
      for (let i = 1; row - i >= 0 && col + i < 8; i++) {
        addMove((row - i) * 8 + col + i);
        if (pieces[(row - i) * 8 + col + i]) break;
      }
      for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        addMove((row - i) * 8 + col - i);
        if (pieces[(row - i) * 8 + col - i]) break;
      }
      break;

    case "queen":
      for (let i = 1; row + i < 8 && col + i < 8; i++) {
        addMove((row + i) * 8 + col + i);
        if (pieces[(row + i) * 8 + col + i]) break;
      }
      for (let i = 1; row + i < 8 && col - i >= 0; i++) {
        addMove((row + i) * 8 + col - i);
        if (pieces[(row + i) * 8 + col - i]) break;
      }
      for (let i = 1; row - i >= 0 && col + i < 8; i++) {
        addMove((row - i) * 8 + col + i);
        if (pieces[(row - i) * 8 + col + i]) break;
      }
      for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        addMove((row - i) * 8 + col - i);
        if (pieces[(row - i) * 8 + col - i]) break;
      }
      for (let i = row + 1; i < 8; i++) {
        addMove(i * 8 + col);
        if (pieces[i * 8 + col]) break;
      }
      for (let i = row - 1; i >= 0; i--) {
        addMove(i * 8 + col);
        if (pieces[i * 8 + col]) break;
      }
      for (let i = col + 1; i < 8; i++) {
        addMove(row * 8 + i);
        if (pieces[row * 8 + i]) break;
      }
      for (let i = col - 1; i >= 0; i--) {
        addMove(row * 8 + i);
        if (pieces[row * 8 + i]) break;
      }
      break;

    case "king":
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          if (row + i >= 0 && row + i < 8 && col + j >= 0 && col + j < 8) {
            addMove((row + i) * 8 + col + j);
          }
        }
      }
      break;
  }

  return moves;
};
