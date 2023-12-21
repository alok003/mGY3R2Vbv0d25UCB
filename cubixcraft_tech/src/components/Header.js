import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
        <h1>ALOK KUMAR</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/BMIcalc'>BMI Calculator</Link></li>
            <li><Link to='https://drive.google.com/file/d/1zcL6dkzeHQzoNiEzHn76uT9z1extlUg3/view?usp=drive_link'>Resume</Link></li>
        </ul>
    </div>
    </>
    
  )
}

export default Header