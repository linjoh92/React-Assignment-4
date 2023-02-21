import React from 'react'
import Logo from './Logo'
import './App.css'


const Main = () => {
  return (
    <main>
        <Logo/>

        <div className='content-container'>

        <div className='rubrik-container'>
            <h1 className='rubrik'>ASSIGNMENT 4</h1>
            <h2>RAMVERK JAVASCRIPT</h2>
        </div>

        <div className='text-btn-conatiner'>
            <p className='text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className='btn-container'>
                <a href="https://www.figma.com/file/vokBV6hYal4725w39uboUO/Untitled?node-id=0%3A1&t=D9iMaszH60yXU5Ub-0" target="_blank"><button className='btn'>FIGMA</button></a>
                <a href="https://www.freepik.com/free-psd/landing-page-graphic-design-courses_14573156.htm#&position=4&from_view=user" target="_blank"><button className='btn'>FREEPIK</button></a>
            </div>
        </div>
        </div>
    </main>
  )
}

export default Main