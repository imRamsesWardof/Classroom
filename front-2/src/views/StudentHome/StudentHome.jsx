import React, {useEffect} from 'react'
import './StudentHome.css'
import CardClass from '../../components/ClassCard/CardClass.jsx'
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
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
        <CardClass/>
      </div>
      
    </div>
  )
}

export default StudentHome