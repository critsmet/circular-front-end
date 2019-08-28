import React, {useState, useLayoutEffect} from 'react'
import MonthViewDaySquare from './MonthViewDaySquare.js'

const initialState = {schedule: []}

const WeekViewContainer = () => {

  const [monthEventSchedule, changeMonthEventSchedule] = useState(initialState)

  const getEvents = () => {
    fetch("http://localhost:3000/events/month")
      .then(res => res.json())
      .then(res => changeMonthEventSchedule({schedule: res.data}))
  }
  //break this into a helper method to dry up code throughout

  useLayoutEffect(getEvents, [monthEventSchedule.schedule.length])

  const formatEvents = () => {
    return monthEventSchedule.schedule.map(day => {
      return (<MonthViewDaySquare key={day.date} day={day}/>)
    })
  }

  return (
    <div id="month-view-container">
      {monthEventSchedule.schedule.length > 0 && formatEvents()}
    </div>
  )

}

export default WeekViewContainer
