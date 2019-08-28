import React from 'react'
import { Link } from 'react-router-dom'

const DayViewEvent = ({event, event: { id, attributes }}) => {
  console.log(event);
  return (
    <div key={"event-" + id} className="day-view-event">
    <label className="time">
      TIME: {attributes.time}
    </label>
    <Link to={'/events/' + id}>
      <img alt={attributes.handle + "-photo"} src={attributes.image_url} />
    </Link>
    <span id="show-name" className="show-info">
      <Link to={"/search?filter=category&param=" + attributes.category}>
        {attributes.category.toUpperCase()}
      </Link>
    </span>
    <br/>
    <br/>
    <label>WHAT:</label>
    <span id="show-name" className="show-info">
      {attributes.name.toUpperCase()}
    </span>
    <br/>
    <br/>
    <label>WHERE:</label>
    <span id="show-location" className="show-info">
      {attributes.location ? attributes.location.toUpperCase() : attributes.venues.data[0].attributes.handle.toUpperCase() }
    </span>
    <br/>
    <br/>
    <label>DESCRIPTION:</label>
    <span id="show-description" className="show-info">
      {attributes.description.slice(0, 100) + (attributes.description.length > 100 ? "..." : "")}
    </span>
  </div>
  )
}

export default DayViewEvent
