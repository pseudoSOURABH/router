import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <section  id="hero">

      <div className='container hero' >
        <h1>
          Welcome to ,<span></span>
        </h1>
        <h1>
          Let's CODE .<span></span>
        </h1>
        <a href='#' type='button' className='cta' >
         Login
        </a>
      </div>
    </section>
  )
}

export default Home