import { useState } from 'react';

// ====== component ======
function Square({ value, onSquareClick }) {
  // ==== component return ====
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // ==== state ====
  const [squares, setSquares] = useState( Array(9).fill(null) );
  const [xIsNext, setXIsNext] = useState(true);

  // ==== handler ====
  function handleClick(i) {
    // cek agar handle tidak dijalankan jika kotak yang diklik sudah ada nilai state-nya
    if(squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    /*
    // versi if-else
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    */
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = '';
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  // ==== component return ====
  return (
    <>
      <div className='status'>{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for(let i = 0; i < lines.length; i++) {
    /*
    // cara tanpa destructuring
    const a = lines[i][0]; // 0
    const b = lines[i][1]; // 1
    const c = lines[i][2]; // 2
    */
    const [a, b, c] = lines[i];

    if(squares[a] && squares[c] === squares[b] && squares[c]) {
      return squares[a];
    }
  }

  return false;
}
