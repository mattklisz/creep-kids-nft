import React from 'react'
import './Gallery.css'

const rowOne = [1, 2, 3]
const rowTwo = [4, 0, 5]
const rowThree = [6, 7, 8]

export const Gallery = () => {
  const Creep = ({ index }) => {
    return (
      <div className="gallery-item" key={`gallery-item-${index}`}>
        <img src={`./assets/images/creep-${index}.gif`} alt="" />
      </div>
    )
  }

  const MysteryCreep = () => {
    return (
      <div className="gallery-item">
        <img src={`./assets/images/question_mark.gif`} alt="" />
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
          rowTwo.map((i) => {
            return i !== 0 ? <Creep index={i} /> : <MysteryCreep />
          })
        }
      </div>
      <div className="gallery-row">
        {
          rowThree.map((i) => <Creep index={i} />)
        }
      </div>
    </div>
  )
}