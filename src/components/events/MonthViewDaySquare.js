import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MonthViewDaySquare = ({day, filter}) => {
  const split_date = day.date.split(", ")
  const weekday = split_date[0].slice(0, 3)
  const date = split_date[1].split(" ").slice(0, 2).join(" ")

  const formatEvents = (events) => {
    return events.map(event => {
      let {attributes} = event
      return (
        <div key={attributes.name}>
          - <Link to={"/events/" + event.id}>
            {attributes.name}
            </Link>
        </div>
      )
    })
  }

  const filterEvents = (events) => {
    let filteredEvents = events.filter(event => {
      return event.attributes.category === filter
    })
    return formatEvents(filteredEvents)
  }

  return (
    <div className="month-day-square-container">
      <span className="left-info bold">
        {weekday}
      </span>
      <span className="right-info">
        {date}
      </span>
      <br/>
      <br/>
      <div className="month-day-square">
        {filter !== "all" ? filterEvents(day.events.data) : formatEvents(day.events.data)}
      </div>
    </div>
  )
}

const mapStateToProps = ({nav}) => {
  return {filter: nav.filter}
}

export default connect(mapStateToProps)(MonthViewDaySquare)
