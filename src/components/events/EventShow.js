//The EventShow and EntityShow are similar, is there a way to make them one component or is it worth keeping them separate because they're different enough?

import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

  const initialState = {
    selectedEvent: {attributes: null, id: null},
  }

const getEvent = (id, callback) => {
  fetch("http://localhost:3000/events/" + id)
    .then(res => res.json())
    .then(res => callback({selectedEvent: res.data}))
  }

const renderEntity = ({id, attributes}) => {
  return(
  <div key={attributes.handle} className="entity-show-event">
    <Link to={'/entities/' + id}>
      <img alt={attributes.handle + "-photo"} src={attributes.image_url} />
    </Link>
  </div>
  )
}

export const EventShow = ({match}) => {

  const [eventShowState, changeState] = useState(initialState)

  useLayoutEffect(() => getEvent(match.params.id, changeState), [eventShowState.selectedEvent.id])

  let {attributes} = eventShowState.selectedEvent

  if (eventShowState.selectedEvent.id === null) {
    return (<div></div>)
  }
  else {
    return (
    <div id="show-container">
      <img alt={attributes.name + "-photo"} className="show-image" src={attributes.image_url} />
      <div id="show-details-container">
        <label>TYPE:</label>
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
          {attributes.description.toUpperCase()}
        </span>
        <br/>
        <br/>
        <label>TAGS:</label>
        <span id="show-tags" className="show-info">
          TAGS HERE
        </span>
        <br/>
        <br/>
        {attributes.organizers.data.length === 0 ? null :
          <React.Fragment>
            <label>ORGANIZERS:</label>
            <span id="show-description" className="entity-show-events-container">
              {attributes.organizers.data.map(renderEntity)}
            </span>
          </React.Fragment>
        }
        {attributes.attendees.data.length === 0 ? null :
          <React.Fragment>
            <label>ATTENDEES:</label>
            <span id="show-description" className="entity-show-events-container">
              {attributes.attendees.data.map(renderEntity)}
            </span>
          </React.Fragment>
        }
      </div>
    </div>
    )
  }
}


export default EventShow
