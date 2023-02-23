import React from 'react'

const Home = ({ currentTheme , corner}) => {

  const pageStyle = {
    backgroundColor: currentTheme.primaryColor,
    position: "fixed",
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    zIndex: 4,
    border: `2px solid ${currentTheme.secondaryColor}`,
    transformOrigin: corner
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
    marginLeft: "420px",
    marginRight: "280px"
  }

  const paragraphStyle = {
    color: currentTheme.paragraphColor,
    fontFamily: "ManropeBold",
    fontSize: 21,
    marginTop: "60px"
  }

  const linkSectionStyle = {
    marginTop: "48px",
    display: "flex",
    flexDirection: "row",
  }

  const linkStyle = {
    fontSize: "32pt",
    border: "none",
    backgroundColor: "inherit"
  }

  return (
    <div id="homePage" className="activePage" style={pageStyle}>
      <div style={contentStyle}>
        <p style={nameStyle}>Garvit Joshi</p>
        <p style={designationStyle}>Full Stack Developer</p>
        <p style={paragraphStyle}>Hey, I'm Garvit. I am a Full Stack Developer with experience in front-end technologies like HTML, CSS, ReactJS (like this website), Flutter, and backend technologies like NodeJS, Python, Java, Dart and others.</p>
        <div style={linkSectionStyle}>
        <button className='link' style={linkStyle} onClick={() => window.open("https://github.com/Garvit48")}>{currentTheme.icons.github}</button>
        <button className='link' style={linkStyle} onClick={() => window.open("https://www.linkedin.com/in/garvit-joshi-55853b263/")}>{currentTheme.icons.linkedin}</button>
        </div>
      </div>
    </div>
  )
}

export default Home