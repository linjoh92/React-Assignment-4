import React from 'react'
import './App.css'


const Header = () => {
  return (
    <header className='header'>
        <div className='header-text'>
            <div>RAMVERK · JAVASCRIPT · REACT · API-ASGMT</div>
        </div>
        <div className='search-bar'>
            <div type='text' className='search'>SERACH:<span>This is just for design</span></div>
        </div>
    </header>
  )
}

export default Header