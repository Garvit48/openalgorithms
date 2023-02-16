import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { github } from '@fortawesome/free-solid-svg-icons'
import { linkedin } from '@fortawesome/free-solid-svg-icons'

const Home = ({ currentTheme }) => {

  const pageStyle = {
    backgroundColor: currentTheme.primaryColor,
    position: "fixed",
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    zIndex: 1
  }

  const nameStyle = {
    fontSize: 82,
    lineHeight: 1,
    fontFamily: "ManropeBold",
    color: currentTheme.secondaryColor ,
  }

  const designationStyle = {
    color: currentTheme.subtextColor,
    fontSize: 24,
    fontFamily: "ManropeBold"
  }

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "175px",
    marginLeft: "360px",
    marginRight: "280px"
  }

  const paragraphStyle = {
    color: currentTheme.paragraphColor,
    fontFamily: "ManropeBold",
    fontSize: 22,
    marginTop: "60px"
  }

  const linksSectionStyle = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div id="contactMePage" className="inactivePage" style={pageStyle}>
      <div style={contentStyle}>
        <p style={nameStyle}>Contact Me</p>
        <p style={designationStyle}>Full Stack Developer</p>
        <p style={paragraphStyle}>Hey, I'm Garvit. I am a Full Stack Developer. And now that you are here, feel free to explore.</p>
        <div style={linksSectionStyle}>

        </div>
      </div>
    </div>
  )
}

export default Home