import React, {useEffect} from 'react'
import './StudentHome.css'
import CardClass from '../../components/ClassCardv2/ClasCardv2.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'

function StudentHome() {

  useEffect(() => {
    document.title = 'Home';
    const icon = document.getElementById("010101")
    icon.setAttribute("href", "../src/assets/images/house-solid.svg")
  })

  return (
    <div className='student-home'>
      <NavBar/>
      <div className='student-home__cards'>
        TeacherClass
      </div>
      
    </div>
  )
}

export default StudentHome