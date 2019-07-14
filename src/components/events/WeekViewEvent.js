import React from 'react'
import { Link } from 'react-router-dom'

const WeekViewEvent = ({event, event: { attributes }}) => {
  return (
    <div className="week-view-event">
      <div className="week-view-info">
        <span className="left-info">
          {attributes.time}
        </span>
        <span className="right-info">
          {attributes.category}
        </span>
      </div>
      <img alt={attributes.name + "-image"} src={attributes.image_url}/>
      <div className="event-name bold">
        <Link to={"/events/" + event.id}>
          {attributes.name}
        </Link>
      </div>
      <br/>
      <div className="event-description">
        {attributes.description}
      </div>
      <br/>
      <div className="event-location">
        {attributes.location}
      </div>
      <br/>
        TAGS GO HERE
    </div>
  )
}

export default WeekViewEvent
