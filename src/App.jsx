import "./App.css"
import stevePic from "./assets/steve.png"
import { useEffect, useState } from "react"
import { getAllJokes, postNewJoke } from "./services/jokeService.jsx"

export const App = () => {
  const [newJoke, setNewJoke] = useState()
  const [allJokes, setAllJokes] = useState()
  const [untoldJokes, setUntoldJokes] = useState()
  const [toldJokes, setToldJokes] = useState()

  useEffect(() => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
      console.log("Jokes set!")
    }).then(() => {
      if (allJokes) {
        const untold = allJokes.filter(joke => joke.told === false)
        setUntoldJokes(untold)
        
        const told = allJokes.filter(joke => joke.told)
        setToldJokes(told)
      }
      
      console.log("told and untold jokes set!")
    })
  }, [])


  return ( 
  <>
    <div className="app-container">
      <div className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <h2>Add Joke</h2>
      <div className="joke-add-form">
        <input
          className="joke-input joke-input:focus::placeholder"
          type="text"
          placeholder="New One Liner"
          value={newJoke}
          onChange={(event) => {
            setNewJoke(event.target.value)
              }}>
        </input>
        <button className="joke-input-submit joke-input-submit:hover joke-input-submit:active" onClick={() => postNewJoke({joke: newJoke, told: false}).then(setNewJoke(""))}>Add</button>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>Told <span className="told-count"></span></h2>
        </div>
        <div className="joke-list-container">
          <h2>Untold <span className="untold-count"></span></h2>
        </div>
      </div>
    </div>
  </>
   )
}
