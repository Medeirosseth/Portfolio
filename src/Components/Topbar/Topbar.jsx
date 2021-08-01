import React from 'react'
import './Topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SPM</a>
           <div className="itemContainer">
            <Person className="icon" />
            <span>2255295919</span>
           </div>
           <div className="itemContainer">
            <Mail />
            <span>MedeirosSeth@gmail.com</span>
           </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
