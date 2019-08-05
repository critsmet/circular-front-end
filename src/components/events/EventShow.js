import React, { useLayoutEffect, useState } from 'react'

  const initialState = {
    selectedEvent: {attributes: null, id: null},
  }

const getEvent = (id, callback) => {
  fetch("http://localhost:3000/events/" + id)
    .then(res => res.json())
    .then(res => callback({selectedEvent: res.data}))
  }

export const EventShow = ({match}) => {

  const [eventShowState, changeState] = useState(initialState)

  useLayoutEffect(() => getEvent(match.params.id, changeState), [eventShowState.selectedEvent.id])

  let {attributes} = eventShowState.selectedEvent

  if (eventShowState.selectedEvent.id == null) {
    return (<div></div>)
  }
  else {
    return (
    <div id="show-container">
      <img className="show-image" src={attributes.image_url} />
      <div id="show-details-container">
        <label>TYPE:</label>
        <span id="show-name" className="show-info">
          {attributes.category.toUpperCase()}
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
          {attributes.location.toUpperCase()}
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
        <label>ORAGANIZERS:</label>
        <span id="show-organizers" className="show-info">
          ORGANIZERS HERE
        </span>
      </div>
    </div>
    )
  }
}


export default EventShow
