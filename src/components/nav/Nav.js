import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import discover from "../../assets/discover.png"
import week from "../../assets/month.png"
import month from "../../assets/week.png"
import profile from "../../assets/profile.png"

import { setFilter } from "./navMod"

let timeout


const Nav = ({history, lIE, setFilter}) => {

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
    <div id="nav-filter-container">
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
          <Link to="/events/month">
            <img src={month} alt="Month"/>
          </Link>
          <Link to="/events/week">
            <img src={week} alt="Week"/>
          </Link>
          <Link to={"/entities/" + lIE.id}>
            <img src={profile} alt="Profile" />
          </Link>
        </div>
      </div>
      <div id="filter">
        <div id="all">
          <label id="all-label">
          <input type="radio" defaultChecked name="filter" onClick={setFilter}/>
          all
          <span className="radio" id="filter-music-radio"/>
          </label>
        </div>
        <div id="music">
          <label id="music-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          music
          <span className="radio" id="filter-music-radio"/>
          </label>
        </div>
        <div id="art">
          <label id="art-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          art
          <span className="radio" id="filter-art-radio"/>
          </label>
        </div>
        <div id="film">
          <label id="film-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          film
          <span className="radio" id="filter-film-radio"/>
          </label>
        </div>
        <div id="performance">
          <label id="performance-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-performance-radio"/>
          performance
          </label>
        </div>
        <div id="food">
          <label id="food-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-food-radio"/>
          food</label>
        </div>
        <div id="protest">
          <label id="protest-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-protest-radio"/>
          protest</label>
        </div>
        <div id="class">
          <label id="class-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-class-input"/>
          class</label>
        </div>
        <div id="workshop">
          <label id="workshop-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-workshop-radio" />
          workshop</label>
        </div>
        <div id="gathering">
          <label id="gathering-label">
          <input type="radio" name="filter" onClick={setFilter}/>
          <span className="radio" id="filter-gathering-radio"/>
          gathering</label>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({app}) => {
  return {
    lIE: app.loggedInEntity,
  }
}

export default connect(mapStateToProps, { setFilter })(withRouter(Nav))
