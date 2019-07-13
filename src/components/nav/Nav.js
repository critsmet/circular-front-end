import React from 'react'

import discover from "../../assets/discover.png"
import week from "../../assets/week.png"
import day from "../../assets/day.png"
import profile from "../../assets/profile.png"

const Nav = () => {

  return (
    <div id="nav">
      <div id="main-logo">
        CIRCULAR
      </div>
      <div id="nav-search-container">
        <input id="nav-search" type="text"/>
      </div>
      <div id="icons-container">
        <img src={discover} alt="Discover"/>
        <img src={week} alt="Week"/>
        <img src={day} alt="Day"/>
        <img src={profile} alt="Profile"/>
      </div>
    </div>
  )
}

export default Nav
