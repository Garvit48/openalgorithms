import React from 'react'
import cssLogo from '../../assets/icons/css.svg'
import htmlLogo from '../../assets/icons/html.svg'
import reactLogo from '../../assets/icons/react.svg'
import nodejsLogo from '../../assets/icons/nodejs.svg'
import expressLogo from '../../assets/icons/expressjs.svg'
import javaLogo from '../../assets/icons/java.svg'
import flutterLogo from '../../assets/icons/flutter.svg'
import dartLogo from '../../assets/icons/dart.svg'
import cLogo from '../../assets/icons/c.svg'
import cppLogo from '../../assets/icons/cpp.svg'
import csLogo from '../../assets/icons/cs.svg'
import postmanLogo from '../../assets/icons/postman.svg'
import pythonLogo from '../../assets/icons/python.svg'
import mongodbLogo from '../../assets/icons/mongodb.svg'
import mysqlLogo from '../../assets/icons/mysql.svg'
import gitLogo from '../../assets/icons/git.svg'
import githubLogo from '../../assets/icons/github.svg'
import unityLogo from '../../assets/icons/unity.svg'
import phpLogo from '../../assets/icons/php.svg'
import latexLogo from '../../assets/icons/latex.svg'
import figmaLogo from '../../assets/icons/figma.svg'
import canvaLogo from '../../assets/icons/canva.svg'
import azureLogo from '../../assets/icons/azure.svg'
import bootstrapLogo from '../../assets/icons/bootstrap.svg'
import firebaseLogo from '../../assets/icons/firebase.svg'
import jsLogo from '../../assets/icons/js.svg'
import awsLogo from '../../assets/icons/aws.svg'


const Home = ({ currentTheme, corner }) => {

  const pageStyle = {
    backgroundColor: currentTheme.primaryColor,
    position: "fixed",
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    zIndex: 3,
    border: `2px solid ${currentTheme.secondaryColor}`,
    transformOrigin: corner
  }

  const titleStyle = {
    fontSize: 82,
    lineHeight: 1,
    display: "inline",
    fontFamily: "ManropeBold",
    color: currentTheme.secondaryColor ,
  }

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "175px",
    marginLeft: "420px",
    marginRight: "280px"
  }

  const textStyle = {
    fontSize: 20,
    display: "inline",
    marginTop: "16px",
    fontFamily: "ManropeBold",
    color: currentTheme.secondaryColor ,
  }

  const flexboxStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "40px"
  }
  return (
    <div id="qualificationsPage" className="inactivePage" style={pageStyle}>
      <div style={contentStyle}>
        <p style={titleStyle}>Qualifications</p>
        <div style={flexboxStyle}>
        <p style={textStyle}>Programming Languages:</p>
        <img className="qualificationIcon" alt="" src={javaLogo} />
        <img className="qualificationIcon" alt="" src={jsLogo} />
        <img className="qualificationIcon" alt="" src={cLogo} />
        <img className="qualificationIcon" alt="" src={cppLogo} />
        <img className="qualificationIcon" alt="" src={csLogo} />
        <img className="qualificationIcon" alt="" src={dartLogo} />
        <img className="qualificationIcon" alt="" src={phpLogo} />
        </div>
        <div style={flexboxStyle}>
        <p style={textStyle}>Web Technologies:</p>
        <img className="qualificationIcon" alt="" src={nodejsLogo} />
        <img className="qualificationIcon" alt="" src={expressLogo} />
        <img className="qualificationIcon" alt="" src={reactLogo} />
        <img className="qualificationIcon" alt="" src={htmlLogo} />
        <img className="qualificationIcon" alt="" src={cssLogo} />
        <img className="qualificationIcon" alt="" src={bootstrapLogo} />
        </div>
        <div style={flexboxStyle}>
        <p style={textStyle}>Programming Languages: </p>
        <img className="qualificationIcon" alt="" src={javaLogo} />
        <img className="qualificationIcon" alt="" src={jsLogo} />
        <img className="qualificationIcon" alt="" src={cLogo} />
        <img className="qualificationIcon" alt="" src={cppLogo} />
        <img className="qualificationIcon" alt="" src={csLogo} />
        <img className="qualificationIcon" alt="" src={dartLogo} />
        <img className="qualificationIcon" alt="" src={phpLogo} />
        </div>
      </div>
    </div>
  )
}

export default Home