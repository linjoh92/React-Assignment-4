import React from 'react'
import './App.css'


const Header = () => {
  return (
    <header className='header'>
        <div className='header-text'>
            <div>RAMVERK · JAVASCRIPT · REACT · API-ASGMT</div>
        </div>
        <div className='search-bar'>
            <input type='text' className='search' placeholder='SEARCH:'></input>
        </div>
    </header>
  )
}

export default Header