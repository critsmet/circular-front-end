import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'

import { getEvent } from './eventsMod'

export const EventShow = ({sE, sE: { attributes }, getEvent, match}) => {
  console.log(sE);
  useLayoutEffect(() => getEvent(match.params.id), [match.params.id])
  if (sE.attributes) {
    return (
      <div id="event-show-container">
        <img className="event-show-image" src={attributes.image_url} />
        <div id="event-show-details-container">
          <label>TYPE:</label>
          <span id="event-show-name" class="event-show-info">
            {attributes.category.toUpperCase()}
          </span>
          <br/>
          <br/>
          <label>WHAT:</label>
          <span id="event-show-name" class="event-show-info">
            {attributes.name.toUpperCase()}
          </span>
          <br/>
          <br/>
          <label>WHERE:</label>
          <span id="event-show-location" class="event-show-info">
            {attributes.location.toUpperCase()}
          </span>
          <br/>
          <br/>
          <label>DESCRIPTION:</label>
          <span id="event-show-description" class="event-show-info">
            {attributes.description.toUpperCase()}
          </span>
          <br/>
          <br/>
          <label>TAGS:</label>
          <span id="event-show-tags" class="event-show-info">
            TAGS HERE
          </span>
          <br/>
          <br/>
          <label>ORAGANIZERS:</label>
          <span id="event-show-organizers" class="event-show-info">
            ORGANIZERS HERE
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = ({events: { selectedEvent }}) => {
  return {
    sE: selectedEvent
  }
}

export default connect(mapStateToProps, { getEvent })(EventShow)
