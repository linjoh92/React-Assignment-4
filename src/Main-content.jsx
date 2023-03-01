import React from 'react'
import './App.css'
import logotype from './assets/logo.svg'
import { useEffect, useState } from 'react'

const Main = () => {

  const [data, setData] = useState({})
  const [userName, setUserName] = useState({ first: 'Name', last: 'Surname' });
  const [userContry, setUserContry] = useState({ city: 'City', country: 'Country' });
  const [userAge, setUserAge] = useState({age: 'Years'});
  const [user, setUser] = useState({cell: 'Phone number', email: 'E-mail' , age: 'Years'})

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const result = await response.json();
      setData(result);
      const activUser = (data.results[0])

      setUserName(activUser.name)    
      setUserContry(activUser.location) 
      setUser(activUser) 
      setUserAge(activUser.dob)
      console.log(data)
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <main>
        <img className='logo' src={logotype} alt="logo"/>

        <div className='content-container'>
          <div className='rubrik-container'>
              <h1 className='rubrik'>{userName.first} {userName.last}</h1>
              <h2>{userContry.city}, {userContry.country}</h2>
          </div>

          <div className='text-btn-conatiner'>
            <div className='text-content-container'>
              <p className='text-content'>Age:{userAge.age}, T:{user.cell }</p>
              <p className='text-content'>E:{user.email}</p>
            </div>
            <div className='btn-container'>
              <button onClick={handleButtonClick} className='btn'>NEW USER</button>
              <a href="https://www.freepik.com/free-psd/landing-page-graphic-design-courses_14573156.htm#&position=4&from_view=user"><button className='btn'>FREEPIK - UX</button></a>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Main