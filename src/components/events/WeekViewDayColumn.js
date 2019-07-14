import React from 'react'

import WeekViewEvent from './WeekViewEvent'

const WeekViewDayColumn = ({day}) => {
  const split_date = day.date.split(", ")
  const weekday = split_date[0]
  const date = split_date[1]

  const formatEvents = (events) => {
    return events.map(event => {
      return <WeekViewEvent key={event.id} event={event}/>
    })
  }

  return (
    <div className="week-day-column-container">
      <span className="left-info bold">
        {weekday}
      </span>
      <span className="right-info">
        {date}
      </span>
      <div className="week-day-column">
        {formatEvents(day.events.data)}
      </div>
    </div>
  )
}

export default WeekViewDayColumn
