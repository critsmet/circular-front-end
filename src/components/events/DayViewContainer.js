import React, { useState, useLayoutEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DayViewEvent from './DayViewEvent'

const initialState = {schedule: []}

const DayViewContainer = ({day, filter, match}) => {

  const [dayEventSchedule, changeDayEventSchedule] = useState(initialState)

  const getEvents = () => {
    fetch("http://localhost:3000/events/day/" + match.params.day)
      .then(res => res.json())
      .then(res => changeDayEventSchedule({schedule: res.data}))
  }

  useLayoutEffect(getEvents, [dayEventSchedule.schedule.length])

  const formatEvents = (events) => {
    return events.map(event => {
      return <DayViewEvent key={event.id} event={event} />
    })
  }

  const filterEvents = (events) => {
    let filteredEvents = events.filter(event => {
      return event.attributes.category === filter
    })
    console.log(filteredEvents);
    return formatEvents(filteredEvents)
  }

  return(
    <div id="day-view-container">
      {filter !== "all" ? filterEvents(dayEventSchedule.schedule) : formatEvents(dayEventSchedule.schedule)}
    </div>
  )

}

const mapStateToProps = ({nav}) => {
  return {filter: nav.filter}
}

export default connect(mapStateToProps)(DayViewContainer)
