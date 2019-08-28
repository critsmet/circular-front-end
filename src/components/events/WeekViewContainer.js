import React, { useLayoutEffect, useState } from 'react'

import WeekViewDayColumn from './WeekViewDayColumn'

const initialState = {schedule: []}

const WeekView = () => {

  const [weekEventSchedule, changeWeekEventSchedule] = useState(initialState)

  const getEvents = () => {
    fetch("http://localhost:3000/events/week")
      .then(res => res.json())
      .then(res => changeWeekEventSchedule({schedule: res.data}))
  }
  //break this into a helper method to dry up code throughout

  useLayoutEffect(getEvents, [weekEventSchedule.schedule.length])
  //what is the best way to stop this from repainting? the length of the schedule doesn't seem right.
  //I only ever want it to happen when the component mounts...
  //Maybe once the app is more dynamic and the user can change through the weeks, then the selected week will be what triggers the re-fetch

  const formatEvents = () => {
    return weekEventSchedule.schedule.slice(0, 4).map(day => {
      return (<WeekViewDayColumn key={day.date} day={day}/>)
    })
  }

  return (
    <div id="week-view-container">
      {weekEventSchedule.schedule.length > 0 && formatEvents() }
    </div>
  )
}

export default WeekView
