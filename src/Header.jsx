import React from 'react'
import './App.css'


const Header = () => {
  return (
    <header className='header'>
        <div className='header-text'>
          <span>RAMVERK</span>
          <span>·</span>
          <span>JAVASCRIPT</span> 
          <span>·</span>
          <span>REACT</span> 
          <span>·</span>
          <span>API-ASGMT</span>
        </div>
        <div className='search-bar'>
            <div className='search'>SERACH:<span>This is just for design</span></div>
        </div>
    </header>
  )
}

export default Header