import React from 'react'

const WeekViewEvent = ({event}) => {
  return (
    <div class="week-view-event">
      <div class="week-view-info">
        <span class="left-info">
          {event.time}
        </span>
        <span class="right-info">
          {event.category}
        </span>
      </div>
      <img src={event.image_url}/>
      <div class="event-name bold">
        {event.name}
      </div>
      <br/>
      <div class="event-description">
        {event.description}
      </div>
      <br/>
      <div class="event-location">
        {event.location}
      </div>
      <br/>
        TAGS GO HERE
    </div>
  )
}

export default WeekViewEvent
