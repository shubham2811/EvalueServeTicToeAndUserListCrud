import React from 'react';
import Square from './Square';
class Board extends React.Component<any> {
    renderSquare = (i:any) => {
      const winLine = this.props.winLine;
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          highlight={winLine && winLine.includes(i)}
        />
      );
    }
  
    render() {
      // Use two loops to make the squares
      const boardSize = 3;
      let squares:any = [];
      for (let i = 0; i < boardSize; ++i) {
        let row:any[] = [];
        for (let j = 0; j < boardSize; ++j) {
          row.push(this.renderSquare(i * boardSize + j));
        }
        squares.push(<div key={i} className="board-row">{row}</div>);
      }
  
      return (
        <div>{squares}</div>
      );
    }
  }

  export default Board;