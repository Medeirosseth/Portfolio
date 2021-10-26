import React from 'react'
import './Portfolio.scss'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="item">
          <a href="https://github.com/Medeirosseth/MovieMatcher">
            <img src="assets/epicouch.png"
            alt="github logo"></img>
            <h3>andChill</h3>
          </a>
        </div>
        <div className="item">
          <a href="https://www.mcmonsterart.com">
            <img src="assets/Mcmonster.png"
            alt="github logo"></img>
            <h3>Artist Portfolio Website</h3>
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/Medeirosseth/ReadyCheckGo">
            <img src="assets/ReadyCheckGo.png"
            alt="github logo"></img>
            <h3>ReadyCheckGo</h3>
          </a>
        </div>
        <div className="item">
        <a href="https://github.com/Medeirosseth/Give-Me-SpaceX">
          <img src="assets/SpaceX.png"
          alt="github logo"></img>
          <h3>Give Me SpaceX</h3>
        </a>
      </div>
      <div className="item">
      <a href="https://github.com/Medeirosseth/Picture-Library">
        <img src="assets/Picture-Viewer.png"
        alt="github logo"></img>
        <h3>Image Finder</h3>
      </a>
    </div>
      </div>
    </div>
  )
}
