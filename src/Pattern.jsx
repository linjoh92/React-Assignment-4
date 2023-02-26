import React from 'react'
import './App.css'
import pattern from './assets/Design_element.png'
import patternTablet from './assets/Design_element_tablet.svg'


const Pattern = () => {
  return (
    <div className='pattern-container'>
        <img className='pattern' src={pattern} alt="pattern"/>
        <img className='pattern-tablet' src={patternTablet} alt="pattern"/>
    </div>
    )
}

export default Pattern