import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';


function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/heroku"
        image="https://tilt-games.herokuapp.com/tilt.png"
        title="tilt"
        category="Desktop App"
      />
    </div>
  )
}

export default Projects;