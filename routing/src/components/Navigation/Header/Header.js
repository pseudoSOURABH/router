import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
// const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile=document.querySelector('.header .nav-bar .nav-list ul');

// const header=document.querySelector('.header .container ');

// hamburger.addEventListener('click',()=>{
//   hamburger.classList.toggle('active');
// })
const Header = () => {

  const [isActive, setActive] = useState(false);

  const ClickHamburger = () => {
    if (isActive === true)
      setActive(false);

    else
      setActive(true);
  }
  return (

    <div>

      <section id='header'>
        <div className='header container'>
          <div className='nav-bar'>


            <div className='brand'>
              <a href='https://www.w3schools.com' >
                <h1>
                  <span>LET'S </span>code
                </h1>
              </a>
            </div>
            <div className='nav-list'>
              <div className={isActive ? "hamburger active" : "hamburger"} onClick={ClickHamburger} >
                <div className='bar'>

                </div>
              </div>
              <ul className={isActive ? " active" : ""}>
                <li>  <div data-after="Home"><Link to='/' >Home</Link></div></li>

                <li> <div data-after="Learn"><Link to='/Learn'>Learn</Link></div></li>
                <li><div data-after="Contact"><Link to='/Contact'>Contact Us</Link></div></li>
                <li> <div data-after="Topics" ><Link to='/Topics'>Topics</Link></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header