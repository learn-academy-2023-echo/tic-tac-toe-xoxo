import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)

  const handleGamePlay = (clickedSquare) => {
   if (squares[clickedSquare] || (winnerCalc(squares))) {
    return
   }
    let updateSquare = [...squares]
    updateSquare[clickedSquare] = xIsNext ? "X" : "O"
    setSquares(updateSquare)
    setXisNext(!xIsNext)
  }
  const winnerCalc = (squares) => {
    const winningSets = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winningSets.length; i++) {
      const [x, y, z] = winningSets[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }
  const winner = winnerCalc(squares)
 let condition 
    if (winner) {
      condition = "winner: " + winner 
    } else {
      condition = "next player " + xIsNext ? "X" : "O"
    }
  const restartGame = () => {
    setSquares(Array(9).fill(null))
  }





  // condition = (winnerCalc===9) {
 // alert("")


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='condition'>{condition}
         </div>
      <div className="board">
      {squares.map((square, index) => {
        return <Square 
        square={square}
        index={index}
        key={index}
        handleGamePlay={handleGamePlay}/>
      })}
      </div>
      <br></br>
      <div className="button">
      <button onClick={restartGame}>Restart Game</button>
      </div>
    </>
  )
}

export default App