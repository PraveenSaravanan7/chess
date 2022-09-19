import pawnBlack from "./pieces/pawn-black.svg";
import pawnWhite from "./pieces/pawn-white.svg";

import kingBlack from "./pieces/king-black.svg";
import kingWhite from "./pieces/king-white.svg";

import queenBlack from "./pieces/queen-black.svg";
import queenWhite from "./pieces/queen-white.svg";

import bishopBlack from "./pieces/bishop-black.svg";
import bishopWhite from "./pieces/bishop-white.svg";

import knightBlack from "./pieces/knight-black.svg";
import knightWhite from "./pieces/knight-white.svg";

import rookBlack from "./pieces/rook-black.svg";
import rookWhite from "./pieces/rook-white.svg";

export enum Colors {
  WHITE = "white",
  BLACK = "black",
}

export enum PieceType {
  PAWN = "pawn",
  KING = "king",
  QUEEN = "queen",
  BISHOP = "bishop",
  KNIGHT = "knight",
  ROOK = "rook",
}

export interface PieceMap {
  [id: number]: { img: string; color: Colors; type: PieceType };
}

export const initPiecesMap: PieceMap = {
  0: { img: rookWhite, color: Colors.WHITE, type: PieceType.ROOK },
  1: { img: knightWhite, color: Colors.WHITE, type: PieceType.KNIGHT },
  2: { img: bishopWhite, color: Colors.WHITE, type: PieceType.BISHOP },
  3: { img: queenWhite, color: Colors.WHITE, type: PieceType.QUEEN },
  4: { img: kingWhite, color: Colors.WHITE, type: PieceType.KING },
  5: { img: bishopWhite, color: Colors.WHITE, type: PieceType.BISHOP },
  6: { img: knightWhite, color: Colors.WHITE, type: PieceType.KNIGHT },
  7: { img: rookWhite, color: Colors.WHITE, type: PieceType.ROOK },
  8: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  9: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  10: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  11: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  12: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  13: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  14: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  15: { img: pawnWhite, color: Colors.WHITE, type: PieceType.PAWN },
  48: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  49: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  50: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  51: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  52: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  53: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  54: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  55: { img: pawnBlack, color: Colors.BLACK, type: PieceType.PAWN },
  56: { img: rookBlack, color: Colors.BLACK, type: PieceType.ROOK },
  57: { img: knightBlack, color: Colors.BLACK, type: PieceType.KNIGHT },
  58: { img: bishopBlack, color: Colors.BLACK, type: PieceType.BISHOP },
  59: { img: queenBlack, color: Colors.BLACK, type: PieceType.QUEEN },
  60: { img: kingBlack, color: Colors.BLACK, type: PieceType.KING },
  61: { img: bishopBlack, color: Colors.BLACK, type: PieceType.BISHOP },
  62: { img: knightBlack, color: Colors.BLACK, type: PieceType.KNIGHT },
  63: { img: rookBlack, color: Colors.BLACK, type: PieceType.ROOK },
};
