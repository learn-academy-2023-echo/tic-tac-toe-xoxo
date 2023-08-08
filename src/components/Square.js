import React from 'react'

const Square = ({ square, index, handleGamePlay }) => {
  const style = square === "X" ? "square x" : "square o"
  const handleClick = () => {
    handleGamePlay(index)
  }
  
  return (
    <div className={style} onClick={handleClick}>{square}</div>
  )
}
export default Square
