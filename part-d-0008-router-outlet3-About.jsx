import React from 'react'

import { Link, Outlet } from 'react-router-dom'


function About() {
  return (
    <div>
      <h3>About our company: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima id reiciendis adipisci doloribus eos voluptates!</h3>

      <div style={{marginTop: "15px"}}>

        <p style={{marginBottom: "10px"}}>Need our contact info?</p>

        <Link to="contact">contact info</Link>
      </div>

      <Outlet />

    </div>
  )
}

export default About
