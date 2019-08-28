import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import WeekViewEvent from './WeekViewEvent'

const WeekViewDayColumn = ({day, filter}) => {
  console.log(filter);
  const split_date = day.date.split(", ")
  const weekday = split_date[0]
  const date = split_date[1]

  const formatEvents = (events) => {
    return events.map(event => {
      return <WeekViewEvent key={event.id} event={event}/>
    })
  }

  const filterEvents = (events) => {
    let filteredEvents = events.filter(event => {
      return event.attributes.category === filter
    })
    return formatEvents(filteredEvents)
  }

  return (
    <div className="week-day-column-container">
      <span className="left-info bold">
        {weekday}
      </span>
      <span className="right-info">
      {console.log(date)}
      <Link to={"/events/day/" + date.split(" ").join("-").toLowerCase()}>
      {date}
      </Link>
      </span>
      <div className="week-day-column">
        {filter !== "all" ? filterEvents(day.events.data) : formatEvents(day.events.data)}
      </div>
    </div>
  )
}

const mapStateToProps = ({nav}) => {
  return {filter: nav.filter}
}

export default connect(mapStateToProps)(WeekViewDayColumn)
