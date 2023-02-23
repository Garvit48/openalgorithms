import React from 'react'
import '../../stylesheets/PersonalPage.css'
import Home from './Home'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Qualifications from './Qualifications'
import { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

let currentActiveButton = "homeButton"
const corners = ["left top", "left bottom", "right top", "right bottom"]

const assignedCorners = {homePage: corners[Math.floor(Math.random() * corners.length)], projectsPage: corners[Math.floor(Math.random() * corners.length)], qualificationsPage: corners[Math.floor(Math.random() * corners.length)], contactMePage: corners[Math.floor(Math.random() * corners.length)]}

const themes = {
  dark: {
    icons: {
      themeSwitcher: <FontAwesomeIcon icon={faMoon} inverse spin/>,
      github: <FontAwesomeIcon icon={faGithub} inverse/>,
      linkedin: <FontAwesomeIcon icon={faLinkedin} inverse style={{marginLeft:"64px"}}/>,
      email: <FontAwesomeIcon icon={faEnvelope} inverse style={{marginRight:"10px"}}/>,
      phone: <FontAwesomeIcon icon={faPhone} inverse style={{marginRight:"10px"}}/>
    },
    primaryColor: "#292929",
    secondaryColor: "#E4E4E4",
    accentColor: "#FF00F5",
    subtextColor: "#6A6A6A",
    paragraphColor: "#BBBBBB"
  },
  light: {
    icons: {
      themeSwitcher: <FontAwesomeIcon icon={faSun} spin/>,
      github: <FontAwesomeIcon icon={faGithub}/>,
      linkedin: <FontAwesomeIcon icon={faLinkedin} style={{marginLeft:"64px"}}/>,
      email: <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"10px"}}/>,
      phone: <FontAwesomeIcon icon={faPhone} style={{marginRight:"10px"}}/>
    },
    primaryColor: "#FFFFFF",
    secondaryColor:  "#4E4D4D",
    accentColor: "#FF00F5",
    subtextColor: "#797979",
    paragraphColor: "#ABABAB"
  }
}
const PersonalPage = () => {
  useEffect(() => {
    docuemnt.title = "Garvit Joshi";
  });
  const [currentTheme, setTheme] = useState(themes.light);

  // const removeFromView = pageID  => {
  //   let page = document.getElementById(pageID)
  //   page.style.width = "0%";
  // }

  // const bringToView = pageID => {
  //   let page = document.getElementById(pageID);
  //   page.style.width = "100%";
   
    
  // }
  let pages = [
  <Home key="homePage" corner={assignedCorners.homePage} currentTheme={currentTheme}/>,
  <Qualifications key="qualificationsPage" corner={assignedCorners.qualificationsPage} currentTheme={currentTheme} />,
  <Projects key="projectsPage" corner={assignedCorners.projectsPage} currentTheme={currentTheme} />,
  <ContactMe key="contactMePage" corner={assignedCorners.contactMePage} currentTheme={currentTheme} />
]

  const switchPage = (event, pageID) => {

    document.getElementById(event.target.id).classList.toggle("activeButton")
    document.getElementById(currentActiveButton).classList.toggle("activeButton")
    currentActiveButton = event.target.id

    let newActivePage = document.getElementById(pageID)
    pages.forEach(page => {
      let tempPage = document.getElementById(page.key)
      if (tempPage.style.zIndex > newActivePage.style.zIndex) {
        tempPage.classList.remove("activePage")
        tempPage.classList.add("inactivePage")
      } else {
        tempPage.classList.remove("inactivePage")
        tempPage.classList.add("activePage")
      }
    })
}

  const toggleTheme =() => {
    setTheme(currentTheme.primaryColor === themes.light.primaryColor ? themes.dark : themes.light)
  }

  const themeButtonStyle = {
    fontSize: 20,
    color: currentTheme.secondaryColor
  }

  document.body.style.backgroundColor = currentTheme.primaryColor;
  return (
    <div>
      
      <button id="themeSwitchButton" onClick={toggleTheme}>{currentTheme.icons.themeSwitcher}</button>
      <div id="buttonContainer">
      <button id="homeButton" className="themeButton activeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "homePage")}>Home</button>
      <button id="qualificationsButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "qualificationsPage")}>Qualifications</button>
        <button id="projectsButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "projectsPage")}>Projects</button>
        
        <button id="contactMeButton" className="themeButton" style={themeButtonStyle} onClick={(event) => switchPage(event, "contactMePage")}>Contact Me</button>
      </div>
      {pages.map(page => page)}
    </div>
  )
}
export default PersonalPage