import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import discover from "../../assets/discover.png"
import week from "../../assets/week.png"
import day from "../../assets/day.png"
import profile from "../../assets/profile.png"

let timeout


const Nav = ({history, lIE}) => {

  const triggerUpdate = (e) => {
    clearTimeout(timeout)
    let search = e.target.value
    timeout = setTimeout(function() {
      if (search.trim().length === 0){
        //this is pretty ugly, clean this up!
        history.push("/")
      } else {
        history.push("/search?filter=name&param=" + search)
    }}, 500);
  }

  return (
    <div id="nav">
      <Link to="/">
        <div id="main-logo">
          CIRCULAR
        </div>
      </Link>
      <div id="nav-search-container">
        <input id="nav-search" type="text" onKeyUp={triggerUpdate}/>
      </div>
      <div id="icons-container">
        <img src={discover} alt="Discover"/>
        <img src={week} alt="Week"/>
        <img src={day} alt="Day"/>
        <Link to={"/entities/" + lIE.id}>
          <img src={profile} alt="Profile" />
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = ({app}) => {
  return {
    lIE: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(withRouter(Nav))
