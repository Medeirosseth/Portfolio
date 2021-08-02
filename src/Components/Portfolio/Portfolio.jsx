import React from 'react'
import './Portfolio.scss'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
      </ul>
      <div className="container">
        <div className="item">
           <a href="https://github.com/Medeirosseth/MovieMatcher">
            <img src="assets/Github.png"
            alt="github logo"></img>
            <h3>andChill</h3>
          </a>
        </div>
        <div className="item">
           <a href="https://github.com/Medeirosseth/ReadyCheckGo">
            <img src="assets/Github.png"
            alt="github logo"></img>
            <h3>ReadyCheckGo</h3>
          </a>
        </div>
      </div>
    </div>
  )
}
