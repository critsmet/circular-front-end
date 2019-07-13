import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getEvents } from './eventsMod'

import WeekViewDayColumn from './WeekViewDayColumn'

const WeekView = ({eS, view, getEvents}) => {
  console.log(eS);

  useLayoutEffect(getEvents, [view])

  const formatEvents = () => {
    return eS.slice(0, 4).map(day => {
      return (<WeekViewDayColumn key={day.date} day={day}/>)
    })
  }

  return (
    <div id="week-view-container">
      {formatEvents()}
    </div>
  )
}

const mapStateToProps = ({events}) => {
  return {
    eS: events.eventSchedule,
    view: "week"
  }
}

export default connect(mapStateToProps, {getEvents})(WeekView)
