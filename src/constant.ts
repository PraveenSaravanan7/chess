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

export interface PieceMap {
  [id: number]: { img: string; color: "white" | "black" };
}

export const initPiecesMap: PieceMap = {
  0: { img: rookWhite, color: "white" },
  1: { img: knightWhite, color: "white" },
  2: { img: bishopWhite, color: "white" },
  3: { img: queenWhite, color: "white" },
  4: { img: kingWhite, color: "white" },
  5: { img: bishopWhite, color: "white" },
  6: { img: knightWhite, color: "white" },
  7: { img: rookWhite, color: "white" },
  8: { img: pawnWhite, color: "white" },
  9: { img: pawnWhite, color: "white" },
  10: { img: pawnWhite, color: "white" },
  11: { img: pawnWhite, color: "white" },
  12: { img: pawnWhite, color: "white" },
  13: { img: pawnWhite, color: "white" },
  14: { img: pawnWhite, color: "white" },
  15: { img: pawnWhite, color: "white" },
  48: { img: pawnBlack, color: "black" },
  49: { img: pawnBlack, color: "black" },
  50: { img: pawnBlack, color: "black" },
  51: { img: pawnBlack, color: "black" },
  52: { img: pawnBlack, color: "black" },
  53: { img: pawnBlack, color: "black" },
  54: { img: pawnBlack, color: "black" },
  55: { img: pawnBlack, color: "black" },
  56: { img: rookBlack, color: "black" },
  57: { img: knightBlack, color: "black" },
  58: { img: bishopBlack, color: "black" },
  59: { img: queenBlack, color: "black" },
  60: { img: kingBlack, color: "black" },
  61: { img: bishopBlack, color: "black" },
  62: { img: knightBlack, color: "black" },
  63: { img: rookBlack, color: "black" },
};
