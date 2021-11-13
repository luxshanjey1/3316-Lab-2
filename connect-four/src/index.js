import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()} style = {{background: this.props.value}}> </button> //allows background of squares to change colour
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(42).fill(null), //create array of size 42
      redIsNext: true,
    };
  }

  handleClick(i) {
    
    const squares = this.state.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.redIsNext ? 'Red' : 'Yellow';
    this.setState({
      squares: squares,
      redIsNext: !this.state.redIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares); //call winner function to determine winner
    let status;
    if (winner) {
      status = 'Winner: ' + winner; //displays winner
    } else {
      status = 'Next player: ' + (this.state.redIsNext ? 'Red' : 'Yellow'); //displays next persons turn
    }
    //create board
    return ( 
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
        </div>
        <div className="board-row">
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="board-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
        <div className="board-row">
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
        </div>
        <div className="board-row">
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [

    // win in rows
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17], 
    [15, 16, 17, 18], 
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24], 
    [22, 23, 24, 25], 
    [23, 24, 25, 26], 
    [24, 25, 26, 27],
    [28, 29, 30, 31], 
    [29, 30, 31, 32], 
    [30, 31, 32, 33], 
    [31, 32, 33, 34],
    [35, 36, 37, 38], 
    [36, 37, 38, 39], 
    [37, 38, 39, 40], 
    [38, 39, 40, 41],


    // win in column
    [0, 7, 14, 21], 
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22], 
    [8, 15, 22, 29], 
    [15, 22, 29, 36],
    [2, 9, 16, 23], 
    [9, 16, 23, 30], 
    [16, 23, 30, 37],
    [3, 10, 17, 24], 
    [10, 17, 24, 31], 
    [17, 24, 31, 38],
    [4, 11, 18, 25], 
    [11, 18, 25, 32], 
    [18, 25, 32, 39],
    [5, 12, 19, 26], 
    [12, 19, 26, 33], 
    [19, 26, 33, 40],
    [6, 13, 20, 27], 
    [13, 20, 27, 34], 
    [20, 27, 34, 41], 
  ];
  for (let i = 0; i < lines.length; i++) { //for every line in the array 
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) { //checks to see if it meets the line requirments
      return squares[a];
    }
  }
  return null;
}
