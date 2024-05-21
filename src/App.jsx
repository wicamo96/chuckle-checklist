import "./App.css"
import { useState } from "react"
import { postNewJoke } from "./services/jokeService.jsx"

export const App = () => {
  const [newJoke, setNewJoke] = useState()


  return ( 
  <>
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <h2>Add Joke</h2>
      <div className="joke-add-form">
        <input
          className="joke-input joke-input:focus::placeholder"
          type="text"
          placeholder="New One Liner"
          onChange={(event) => {
            setNewJoke(event.target.value)
              }}>
        </input>
        <button className="joke-input-submit joke-input-submit:hover joke-input-submit:active" onClick={() => postNewJoke({joke: newJoke, told: false})}>Add</button>
      </div>
    </div>
  </>
   )
}
