import React, { useState } from 'react'
import Square from './components/Square'

import './App.css'
import brickWall from "./assets/hard-sketch-brick-wall.jpg"


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)

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
  
  const winner = winnerCalc(squares);
  let status;
  if (winner){
    status = "Winner: " + winner;
    
  }else if (squares.includes(null)){
    status = "Next player: " + (xIsNext ? "X" : "O")
  } else {
    status = "It's a Draw!"
  }

  const handleGamePlay = (clickedSquare) => {
    if (squares[clickedSquare] || winnerCalc(squares)){
      return
    } 
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
    <div className="main" style={{ backgroundImage: `url(${brickWall})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'}}>
      <h1><span style={{color: '#0D82CE'}}>Tic</span> <span style={{color: '#CE0D4A'}}>Tac</span> <span style={{color: '#0D82CE'}}>Toe</span></h1>
      <div className="big-container">
      <div className="status">{status}</div>
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
      <div className="button-container">
      <button onClick={restartGame}>Restart Game</button>
      </div>
      </div>
      
      <footer>&copy; 2023 | Created by: Peter and Raquel</footer>
    
      </div>
     
      </>
  )
}

export default App