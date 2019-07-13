import React from 'react'

import WeekViewEvent from './WeekViewEvent'

const WeekViewDayColumn = ({day}) => {
  const split_date = day.date.split(", ")
  const weekday = split_date[0]
  const date = split_date[1]

  const formatEvents = (events) => {
    return events.map(event => {
      debugger
      return <WeekViewEvent event={event.attributes}/>
    })
  }

  return (
    <div class="week-day-column-container">
      <span class="left-info bold">
        {weekday}
      </span>
      <span class="right-info">
        {date}
      </span>
      <div class="week-day-column">
        {formatEvents(day.events.data)}
      </div>
    </div>
  )
}

export default WeekViewDayColumn
