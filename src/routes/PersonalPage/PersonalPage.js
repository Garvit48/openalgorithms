import React from 'react'
import '../../stylesheets/PersonalPage.css'
import Home from './Home'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Qualifications from './Qualifications'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

let currentActivePage = "homePage"
let currentActiveButton = "homeButton"

const PersonalPage = () => {

  const darkTheme = {
    icon: <FontAwesomeIcon icon={faMoon} inverse spin/>,
    primaryColor: "#292929",
    secondaryColor: "#E4E4E4",
    accentColor: "#FF00F5",
    subtextColor: "#6A6A6A",
    paragraphColor: "#BBBBBB"
  }

  const lightTheme = {
    icon: <FontAwesomeIcon icon={faSun} spin/>,
    primaryColor: "#FFFFFF",
    secondaryColor:  "#4E4D4D",
    accentColor: "#FF00F5",
    subtextColor: "#797979",
    paragraphColor: "#ABABAB"
  }

  const switchPage = (event, pageId) => {
    document.getElementById(currentActivePage).classList.toggle("inactivePage")
    document.getElementById(currentActiveButton).classList.toggle("activeButton")
    currentActivePage = pageId
    currentActiveButton = event.target.id
    document.getElementById(currentActivePage).classList.toggle("inactivePage")
    document.getElementById(currentActiveButton).classList.toggle("activeButton")
  }

  const [currentTheme, setTheme] = useState(lightTheme);

  const toggleTheme =() => {
    setTheme(currentTheme.primaryColor === lightTheme.primaryColor ? darkTheme : lightTheme)
  }

  const themeButtonStyle = {
    fontSize: 20,
    color: currentTheme.secondaryColor
  }

  document.body.style.backgroundColor = currentTheme.primaryColor;

  return (
    <div>
      
      <button id="themeSwitchButton" onClick={toggleTheme}>{currentTheme.icon}</button>
      <div id="buttonContainer">
      <button id="homeButton" className="themeButton activeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "homePage")}>Home</button>
        <button id="projectsButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "projectsPage")}>Projects</button>
        <button id="qualificationsButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "qualificationsPage")}>Qualifications</button>
        <button id="contactMeButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "contactMePage")}>Contact Me</button>
      </div>
      <Home currentTheme={currentTheme}/>
      <Projects currentTheme={currentTheme} />
      <Qualifications currentTheme={currentTheme} />
      <ContactMe currentTheme={currentTheme} />
    </div>
  )
}
export default PersonalPage