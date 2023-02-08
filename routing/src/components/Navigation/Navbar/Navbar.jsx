import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>

                <li>
                  
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/About' >About</Link>
                    <Link to='/Learn'>Learn</Link>
                    <Link to='/Topics'>Topics</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar