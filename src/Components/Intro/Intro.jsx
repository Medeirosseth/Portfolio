import React from 'react'
import "./Intro.scss"

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Seth.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World, I'm</h2>
          <h1>Seth Medeiros</h1>
          <h3><span>Designer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/DownArrow.png" alt="arrow"></img>
        </a>
      </div>
    </div>
  )
}
