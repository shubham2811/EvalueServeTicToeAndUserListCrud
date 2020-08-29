import React from "react";
import Board from "./components/Board";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Button, InputTextBox } from "../../shared/components";
class TicTacContainer extends React.Component<any> {
  state = {
    side: null,
    tossed: 0,
    history: [
      {
        squares: Array(9).fill(null),
        latestMoveSquare: null,
      },
    ],
    stepNumber: 0,
    xIsNext: false,
    isGameBegin: false,
    player1: "",
    player2: "",
  };

  /**
   * Trigger when click on squareBox
   */
  handleClick = (i) => {
    const history: any = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: [
        ...history,
        {
          squares: squares,
          // Store the index of the latest moved square
          latestMoveSquare: i,
        },
      ],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  /**
   * This finction runs on every click of box to check the game status
   *    */
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
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
  };

  /**
   * This function is called when toss coin button is clicked
   */
  tossCoin = () => {
    const landedOn = Math.round(Math.random());
    this.setState({
      side: landedOn,
      tossed: this.state.tossed + 1,
      xIsNext: landedOn === 1,
    });
  };

  /**
   * Function will call when reset button is pressed
   */
  reset = () => {
    this.setState({
      side: null,
      tossed: 0,
      history: [
        {
          squares: Array(9).fill(null),
          latestMoveSquare: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  };

  /**
   * This function triggers when player name will be taken as input
   */
  handlePlayerInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

/**
 * Function called when both players enter their names and click on Go to Game button
 */
  goToGame = () => {
    this.setState({ isGameBegin: true });
  };

  /**
 * Function called when user click on exit button .Everything will be reset including playerNames
 */
  exitGame = () => {
    this.setState({ isGameBegin: false, player1: "", player2: "" }, () => {
      this.reset();
    });
  };
  render() {
    const {
      history,
      stepNumber,
      side,
      tossed,
      player1,
      player2,
      isGameBegin,
    } = this.state;
    const current = history[stepNumber];
    const winInfo = this.calculateWinner(current.squares);
    const winner = winInfo.winner;
    const status = winner
      ? `Winner Is: ${winner === "X" ? player1 : player2}`
      : winInfo.isDraw
      ? "The match is Draw"
      : "Next player is: " + (this.state.xIsNext ? player1 : player2);
    return (
      <>
        {!isGameBegin && (
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item md={3} xs={12}>
              <InputTextBox
                name="player1"
                label="Player 1"
                placeholder="Please Enter Player 1 Name"
                variant="outlined"
                fullWidth
                value={player1}
                onChange={this.handlePlayerInputChange}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <InputTextBox
                name="player2"
                label="Player 2"
                value={player2}
                placeholder="Please Enter Player 2 Name"
                variant="outlined"
                fullWidth
                onChange={this.handlePlayerInputChange}
              />
            </Grid>
            <Grid item md={2} xs={12} sm={12}>
              <Button
                color="primary"
                onClick={this.goToGame}
                fullWidth
                disabled={player1 === "" || player2 === ""}
                size="medium"
              >
                Go To game
              </Button>
            </Grid>
          </Grid>
        )}
        {isGameBegin && (
          <>
            {tossed > 0 && (
              <Grid container spacing={2} justify="center">
                <Board
                  squares={current.squares}
                  onClick={(i) => this.handleClick(i)}
                  winLine={winInfo.line}
                />
              </Grid>
            )}
            <Grid container spacing={2} style={{ margin: "1em" }}>
              {tossed > 0 && (
                <Grid item md={3}>
                  <Typography variant="h5">{status}</Typography>
                </Grid>
              )}
              <Grid item md={2}>
                <Button
                  color="primary"
                  onClick={this.tossCoin}
                  fullWidth
                  disabled={winner}
                  size="medium"
                >
                  Toss Coin
                </Button>
              </Grid>

              <Grid item md={3}>
                <Button
                  color="primary"
                  onClick={this.reset}
                  fullWidth
                  size="medium"
                  disabled={tossed === 0}
                >
                  Reset The Game
                </Button>
              </Grid>

              <Grid item md={3}>
                <Button
                  color="primary"
                  onClick={this.exitGame}
                  fullWidth
                  size="medium"
                >
                  Exit Game
                </Button>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5">
                  The coin has been tossed {tossed} times.
                </Typography>
                {/* <Typography variant="h5">
                  {tossed > 0 && (
                    <p>It landed on {side === 1 ? "heads" : "tails"}</p>
                  )}
                </Typography> */}
              </Grid>
            </Grid>
          </>
        )}
      </>
    );
  }
}

export default TicTacContainer
