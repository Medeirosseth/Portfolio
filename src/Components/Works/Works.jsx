import React from 'react'
import "./Works.scss"
export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slidebar">
        <div className="container">
          <div className="item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EytGpcXZi64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nJnCmR_YQj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/p7Y5FOo31FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
