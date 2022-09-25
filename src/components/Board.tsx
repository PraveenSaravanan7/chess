import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Colors, initPiecesMap, PieceMap } from "../constant";
import * as Libs from "../libs";
import styles from "./Board.module.css";
import { Square } from "./Square";

export const Board = () => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [pieces, setPieces] = useState(initPiecesMap);
  const [turn, setTurn] = useState<Colors>(Colors.WHITE);
  const [possibleMoves, setPossibleMoves] = useState<Set<number>>(new Set());
  const [scale, setScale] = useState("1");
  const [removedPeices, setRemovedPeices] = useState<PieceMap[number][]>([]);

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
      if (pieces[to]) setRemovedPeices((prev) => [...prev, pieces[to]]);

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

  useLayoutEffect(() => {
    // const scale = String(Math.min(window.innerWidth, window.innerHeight) / 900);

    const updateSize = () =>
      setScale(String(Math.min(window.innerWidth, window.innerHeight) / 900));

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const ChessBoard = () => {
    return <div className={styles.board}>{squares}</div>;
  };

  return (
    <div className={styles.boardWrapper} style={{ scale }}>
      <ScoreBoard turn={turn} removedPeices={removedPeices} />
      <ChessBoard />
    </div>
  );
};

interface ScoreBoardProps {
  turn: Colors;
  removedPeices: PieceMap[number][];
}

const ScoreBoard = ({ turn, removedPeices }: ScoreBoardProps) => {
  const Score = ({ colour }: { colour: Colors }) => {
    return (
      <div className={`${turn === colour ? styles.active : ""}`}>
        <h2>{colour}</h2>
        <h4>Points</h4>
        {/* <h3>{Libs.getPoints(pieces, Colors.WHITE)}</h3> */}

        <div className={styles.removedPeicesContainer}>
          {removedPeices.map((piece) => {
            if (piece.color !== colour) return <img src={piece.img} alt="" />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.scoreBoard}>
      <Score colour={Colors.WHITE} />
      <Score colour={Colors.BLACK} />
    </div>
  );
};
