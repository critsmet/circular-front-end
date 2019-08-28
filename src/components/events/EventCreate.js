import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

const initialState = {
  name: '',
  description: '',
  date: '',
  location: '',
  category: '',
  image_url: '',
  tags: '',
  'self_destruct?': null
}

const EventCreate = ({history}) => {

  const [eventFormState, changeEventFormState] = useState(initialState)

  const handleUpdateForm = (e) => {
    changeEventFormState({...eventFormState, [e.target.name]: e.target.value})
    console.log(eventFormState)
  }

  const submitEvent = () => {
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({event: eventFormState})
    })
    .then(res => res.json())
    .then(res => history.push("/events/" + res.event_id))
  }

  return (
    <div id="event-form-container">
      <input id="event-name-form-input" value={eventFormState.name}name="name" placeholder="Name" className="event-form-input" type="text" onChange={handleUpdateForm} />
      <input id="event-decription-form-input" name="description" placeholder="Description" className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <input id="event-date-form-input" name="date" placeholder="YYYY/MM/DD H:M A/PM" className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <input id="event-location-form-input" name="location" placeholder="Location" className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <input id="event-category-form-input" name="category" placeholder="category" className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <input id="even-image-form-input" name="image_url" placeholder="Image Link" className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <input id="event-tags-form-input" name="tags" placeholder="tags (separate w/ comma)"className="event-form-input" type="text" onChange={handleUpdateForm}/>
      <label id="event-destruct-form-label">
        <input id="event-destruct-form-input" type="checkbox" name="self_destruct?" value="1" onChange={handleUpdateForm}/>
        <span>Self Destruct?</span>
      </label>
      <input id="event-form-submit" type="submit" onClick={submitEvent}/>
    </div>
  )
}

export default withRouter(EventCreate)
