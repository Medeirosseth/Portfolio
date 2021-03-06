import React from 'react'
import './Topbar.scss'
import { Mail } from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SPM</a>
          <div className="itemContainer">
            <Mail className="topbarContact" />
            <span className="topbarContact">MedeirosSeth@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
