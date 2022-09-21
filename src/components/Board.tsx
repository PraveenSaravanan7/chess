import React, { useEffect, useMemo, useState } from "react";
import { Colors, initPiecesMap } from "../constant";
import * as Libs from "../libs";
import styles from "./Board.module.css";
import { Square } from "./Square";

export const Board = () => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [pieces, setPieces] = useState(initPiecesMap);
  const [turn, setTurn] = useState<Colors>(Colors.WHITE);
  const [possibleMoves, setPossibleMoves] = useState<Set<number>>(new Set());

  const updateSelectedSquare = (id: number | null) => {
    if (id === null || selectedSquare === id) setSelectedSquare(null);
    else {
      const piece = pieces[id];
      if (piece && piece.color === turn) setSelectedSquare(id);
      else if (selectedSquare) movePeice(selectedSquare, id);
    }
  };

  const movePeice = (from: number, to: number) => {
    if (pieces[from]?.color === pieces[to]?.color) return;
    if (possibleMoves.has(to)) {
      setPossibleMoves(new Set());
      setPieces((prev) => {
        const newPieces = { ...prev };
        newPieces[to] = newPieces[from];
        delete newPieces[from];
        return newPieces;
      });
      updateSelectedSquare(null);
      setTurn((prev) => (prev === Colors.WHITE ? Colors.BLACK : Colors.WHITE));
    }
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
          highlight={possibleMoves.has(id)}
        />
      );

    return arr;
  }, [pieces, selectedSquare, possibleMoves]);

  useEffect(() => {
    setPossibleMoves(() =>
      selectedSquare ? Libs.possibleMoves(selectedSquare, pieces) : new Set()
    );
  }, [selectedSquare]);

  return <div className={styles.board}>{squares}</div>;
};
