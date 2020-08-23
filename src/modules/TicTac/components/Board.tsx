import React from "react";
import Square from "./Square";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles(() => ({
  boardRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "240px",
    height: "240px",
    padding: "5px",
    border: "1px solid #e4e4e4",
  },
}));
const Board = (props) => {
  const classes = useStyles();
  const renderSquare = (i) => {
    const winLine = props.winLine;
    console.log(winLine && winLine.includes(i));
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        highlight={winLine && winLine.includes(i)}
      />
    );
  };

  // Use two loops to make the squares
  const boardSize = 3;
  let squares: any = [];
  for (let i = 0; i < boardSize; ++i) {
    let row: any[] = [];
    for (let j = 0; j < boardSize; ++j) {
      row.push(renderSquare(i * boardSize + j));
    }
    squares.push(
      <div key={i} className={classes.boardRow}>
        {row}
      </div>
    );
  }

  return <div className={classes.row}>{squares}</div>;
};

export default Board;
