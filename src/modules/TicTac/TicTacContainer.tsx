// import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import withStyles from "@material-ui/styles/withStyles";
// import Board  from "./components/Board";
// const useStyles = (theme: any) => ({
//   root: {
//     padding: theme.spacing(4),
//   },
//   avatar: {
//     width: "100%",
//     height: "100%",
//   },
// });
// const TicTacContainer = () => {
//   const [side, setSide] = useState(1);
//   const [tossed, setTossed] = useState(0);
//   const tossCoin = () => {
//     const landedOn = Math.round(Math.random());
//     setSide(landedOn);
//     setTossed(tossed + 1);
//   };
//   return (
//     <div>
//       <p>The coin has been tossed {tossed} times.</p>
//       <p>It landed on {side === 1 ? "heads" : "tails"}</p>
//       <button onClick={tossCoin}>Toss coin</button>
//       <Board/>
//     </div>
//   );
// };

// export default TicTacContainer;

import React from "react";
import "./index.css";
import Board from "./components/Board";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme: any) => ({
  root: {
    padding: theme.spacing(4),
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});
class TicTacContainer extends React.Component<any> {
  state = {
    history: [
      {
        squares: Array(9).fill(null),
        latestMoveSquare:null
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  };

  /**
   * Trigger when click on squareBox
   */
  handleClick = (i) => {
    const history: any = this.state.history.slice(0, this.state.stepNumber + 1);
    console.log('history',history)
    const current = history[history.length - 1];
    console.log(current)
    const squares = current.squares.slice();
    if (this.calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          // Store the index of the latest moved square
          latestMoveSquare: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo(step) {
    console.log(step)
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i],
          isDraw: false,
        };
      }
    }
  
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
        break;
      }
    }
    return {
      winner: null,
      line: null,
      isDraw: isDraw,
    };
  }
  
  render() {
    const {history, stepNumber} = this.state;

    const current = history[stepNumber];
    console.log('stepNumber',stepNumber)
    const winInfo = this.calculateWinner(current.squares);
    const winner = winInfo.winner;
    let moves = history.map((step:any, move) => {
      const latestMoveSquare = step.latestMoveSquare;
      const col = 1 + (latestMoveSquare % 3);
      const row = 1 + Math.floor(latestMoveSquare / 3);
      const desc = move
        ? `Go to move #${move} (${col}, ${row})`
        : "Go to game start";
      return (
        <li key={move}>
          {/* Bold the currently selected item */}
          <button
            className={move === stepNumber ? "move-list-item-selected" : ""}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      if (winInfo.isDraw) {
        status = "Draw";
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winLine={winInfo.line}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(TicTacContainer);
