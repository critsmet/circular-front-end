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
        <Link to={"/search?filter=category&param=" + attributes.category}>
          {attributes.category}
        </Link>
        </span>
      </div>
      <Link to={"/events/" + event.id}>
        <img alt={attributes.name + "-image"} src={attributes.image_url}/>
      </Link>
      <div className="event-name bold">
        <Link to={"/events/" + event.id}>
          {attributes.name}
        </Link>
      </div>
      <br/>
      <div className="event-description">
        {attributes.description.slice(0, 280) + (attributes.description.length > 280 ? "..." : "")}
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
