import React from 'react'

const Home = ({ currentTheme , corner}) => {

  const pageStyle = {
    backgroundColor: currentTheme.primaryColor,
    position: "fixed",
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    zIndex: 1,
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

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "80px",
    justifyContent: "space-between"
  }

  const contactInfoTextStyle = {
    fontSize: "16pt",
    color: currentTheme.secondaryColor
  }

  return (
    <div id="contactMePage" className="inactivePage" style={pageStyle}>
      <div style={contentStyle}>
        <p style={nameStyle}>Contact Me</p>
        <div style={contactInfoStyle}>
        <p style={contactInfoTextStyle}>{currentTheme.icons.email}joshi.garvit22@gmail.com </p>
        <br />
        <p style={contactInfoTextStyle}>{currentTheme.icons.phone}+91-7037082789 </p>
        </div>
      </div>
    </div>
  )
}

export default Home