import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)

  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares]
    updateSquare[clickedSquare] = xIsNext ? "X" : "O"
    setSquares(updateSquare)
    setXisNext(!xIsNext)
  }

  const restartGame = () => {
    setSquares(Array(9).fill(null))
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
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