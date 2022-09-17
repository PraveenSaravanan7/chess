import React, { useMemo, useState } from "react";
import { initPiecesMap } from "../constant";
import styles from "./Board.module.css";
import { Square } from "./Square";

export const Board = () => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [pieces, setPieces] = useState(initPiecesMap);
  const [turn, setTurn] = useState<"white" | "black">("white");

  const updateSelectedSquare = (id: number | null) => {
    if (id === null) setSelectedSquare(null);
    else {
      const piece = pieces[id];
      if (piece && piece.color === turn) setSelectedSquare(id);
      else if (selectedSquare) movePeice(selectedSquare, id);
    }
  };

  const movePeice = (from: number, to: number) => {
    if (pieces[from]?.color === pieces[to]?.color) return;

    setPieces((prev) => {
      const newPieces = { ...prev };
      newPieces[to] = newPieces[from];
      delete newPieces[from];
      return newPieces;
    });
    updateSelectedSquare(null);
    setTurn((prev) => (prev === "white" ? "black" : "white"));
  };

  const squares = useMemo(() => {
    const arr = [];

    for (let id = 0; id < 64; id++)
      arr.push(
        <Square
          id={id}
          key={id}
          selected={selectedSquare === id}
          piece={pieces[id]}
          onSelect={updateSelectedSquare}
          movePeice={movePeice}
          turn={turn}
        />
      );

    return arr;
  }, [pieces, selectedSquare]);

  return <div className={styles.board}>{squares}</div>;
};
