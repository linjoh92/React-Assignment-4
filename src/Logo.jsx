import React from 'react'
import './App.css'
import logotype from './assets/logo.svg'


const Logo = () => {
  return (
    <img className='logo' src={logotype} alt="logo" width='350px'/>
  )
}

export default Logo