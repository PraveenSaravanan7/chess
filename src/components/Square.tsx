import React, { DragEvent, useState } from "react";
import { PieceMap } from "../constant";

import styles from "./Square.module.css";

interface SquareProps {
  id: number;
  piece?: PieceMap[number];
  selected: boolean;
  onSelect: (id: number) => void;
  movePeice: (from: number, to: number) => void;
  turn: "white" | "black";
}

export const Square = ({
  id,
  piece,
  selected,
  onSelect,
  movePeice,
  turn,
}: SquareProps) => {
  const row = Math.floor(id / 8);
  const col = id % 8;
  const isBlack = (row + col) % 2 === 1;
  const color = isBlack ? "#7fa650" : "#e9ffce";

  const classname = `${styles.square} ${selected ? styles.selected : ""}`;

  const handleClick = () => onSelect(id);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("from", id.toString());
    handleClick();
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();
    movePeice(parseInt(event.dataTransfer.getData("from")), id);
  };

  const allowDrop = (event: DragEvent) => event.preventDefault();

  return (
    <div
      className={classname}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      onDrop={onDrop}
      onDragOver={allowDrop}
    >
      {!!piece && (
        <img
          alt=""
          src={piece.img}
          width="90px"
          height="90px"
          draggable={piece.color === turn}
          onDragStart={onDragStart}
        />
      )}
    </div>
  );
};
