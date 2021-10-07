import React from 'react'
import './Gallery.css'

const rowOne = [1, 2, 3, 4]
const rowTwo = [5, 6, 7, 8]

export const Gallery = () => {
  const Creep = ({ index }) => {
    return (
      <div className="gallery-item">
        <img src={`./assets/images/creep-${index}.gif`} alt="" />
      </div>
    )
  }

  return (
    <div className="gallery-container">
      <div className="gallery-row">
        {
          rowOne.map((i) => <Creep index={i} />)
        }
      </div>
      <div className="gallery-row">
        {
          rowTwo.map((i) => <Creep index={i} />)
        }
      </div>
    </div>
  )
}