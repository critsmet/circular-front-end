import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

  const initialState = {
    searchResults: [],
  }

const getEvents = (filter, param, callback) => {
  fetch("http://localhost:3000/search?filter=" + filter + "&param=" + param)
    .then(res => res.json())
    .then(res => callback({searchResults: res.data}))
  }

const renderEvent = ({id, attributes}) => {
  return(
  <div key={"event-" + id} className="search-event">
    <Link to={'/events/' + id}>
      <img alt={id + "-photo"} src={attributes.image_url} />
    </Link>
    <span id="show-name" className="show-info">
      {attributes.name.slice(0, 30) + (attributes.name.length > 30 ? "..." : "")}
    </span>
    <br/>
    <br/>
    <span id="show-description" className="show-info">
      {attributes.description.slice(0, 30) + (attributes.description.length > 30 ? "..." : "")}
    </span>
  </div>
  )
}

export const EventIndex = ({match, location}) => {

  const [eventIndexState, changeState] = useState(initialState)
  const values = queryString.parse(location.search)

  useLayoutEffect(() => {
    getEvents(values.filter, values.param, changeState)
  }, [eventIndexState.events, values.param])

  return (
    <div id="search-events-container">
      {eventIndexState.searchResults.map(renderEvent)}
    </div>
  )


}


export default EventIndex
