//The EventShow and EntityShow are similar, is there a way to make them one component or is it worth keeping them separate because they're different enough?

import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

  const initialState = {
    selectedEntity: {attributes: null, id: null},
  }

const getEntity = (id, callback) => {
  fetch("http://localhost:3000/entities/" + id)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      callback({selectedEntity: res.data})
    })
  }

  const renderEvent = ({id, attributes}) => {
    return(
    <div key={attributes.name} class="entity-show-event">
      <Link to={'/events/' + id}>
        <img alt={attributes.name + "-photo"} src={attributes.image_url} />
      </Link>
    </div>
    )
  }

export const EntityShow = ({match}) => {

  const [eventShowState, changeState] = useState(initialState)

  useLayoutEffect(() => getEntity(match.params.id, changeState), [eventShowState.selectedEntity.id])

  let {attributes} = eventShowState.selectedEntity

  if (eventShowState.selectedEntity.id == null) {
    return (<div></div>)
  }
  else {
    return (
    <div id="show-container">
      <img alt={attributes.handle + "-photo"} className="show-image" src={attributes.image_url} />
      <div id="show-details-container">
        <label>TYPE:</label>
        <span id="show-name" className="show-info">
          {attributes.entity_type.toUpperCase()}
        </span>
        {attributes.name == null ? null :
          <React.Fragment>
            <br/>
            <br/>
            <label>NAME:</label>
            <span id="show-name" className="show-info">
              {attributes.name.toUpperCase()}
            </span>
          </React.Fragment>
        }
        <br/>
        <br/>
        <label>HANDLE:</label>
        <span id="show-location" className="show-info">
          {attributes.handle.toUpperCase()}
        </span>
        <br/>
        <br/>
        {attributes.organizing_events.data.length === 0 ? null :
          <React.Fragment>
            <label>ORGANIZING:</label>
            <span id="show-description" className="entity-show-events-container">
              {attributes.organizing_events.data.map(renderEvent)}
            </span>
          </React.Fragment>
        }
        {attributes.attending_events.data.length === 0 ? null :
        <React.Fragment>
          <label>ATTENDING:</label>
          <span id="show-description" className="entity-show-events-container">
            {attributes.attending_events.data.map(renderEvent)}
          </span>
        </React.Fragment> }
        {attributes.hosting_events.data.length === 0 ? null :
          <React.Fragment>
            <label>HOSTING:</label>
            <span id="show-description" className="entity-show-events-container">
              {attributes.hosting_events.data.map(renderEvent)}
            </span>
          </React.Fragment>
        }
      </div>
    </div>
    )
  }
}


export default EntityShow
