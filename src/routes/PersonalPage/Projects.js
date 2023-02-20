import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = ({ currentTheme, corner }) => {

  const projects = [
    {
      name: "OpenAlgorithms",
      description: "An open source website made using the MERN Stack (MongoDB, ExpressJS, NodeJS, ReactJS) for developers as a learning and experimenting playground for developers, by developers.",
      showcaseLink: "www.youtube.com",
      githubLink: "https://openalgorithms.in",
    },
    {
      name: "Cluster App (Flutter)",
      description: "A communications app built using Dart, Flutter and Firebase that enables secure internal communication between members of an organization. The app also enables management of members via groups managed by the administrators of the organization.",
      showcaseLink: "www.youtube.com",
      githubLink: "https://github.com/Garvit48/flutter_chat_app",
    },
    {
      name: "Python based peer-to-peer chat app",
      description: "An app built using Python that utilizes sockets for communication between two devices. The app supports communication with multiple devices that can be saved by their name and also locally stores the previous coversations between two users.",
      showcaseLink: "www.youtube.com",
      githubLink: "",
    },
    {
      name: "Dijkstra's Shortest Path Algorithm Playground",
      description: "A web app built using vanilla Javascript that allows users to create nodes and find find the shortest path between any two nodes using said algorithm. The app also allows users to inspect individual nodes and see their properties.",
      showcaseLink: "www.youtube.com",
      githubLink: "https://github.com/Garvit48/dijkstras_algorithm",
    },
    {
      name: "Clustering App (Python)",
      description: "A web app built using vanilla Javascript that allows users to create nodes and find find the shortest path Clustering App (Python)",
      showcaseLink: "www.youtube.com",
      githubLink: "https://github.com/Garvit48/clusteringAlgorithm",
    },
    {
      name: "Linear Regression Visualizer",
      description: "A python based program that takes a set of points or a data file as an input and displays the line of best on a graph using the matplotlib module.",
      showcaseLink: "www.youtube.com",
      githubLink: "https://github.com/Garvit48/linear_regression_app",
    }
  ]
  const pageStyle = {
    backgroundColor: currentTheme.primaryColor,
    position: "fixed",
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    zIndex: 2,
    border: `2px solid ${currentTheme.secondaryColor}`,
    transformOrigin: corner,
    overflowY: "scroll"
  }

  const nameStyle = {
    marginTop: "145px",
    marginLeft: "750px",
    fontSize: 48,
    lineHeight: 1,
    fontFamily: "ManropeBold",
    color: currentTheme.secondaryColor ,
  }

  const contentStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "60px",
    marginLeft: "375px",
    marginRight: "80px"
  }

  const logoStyle = {
    fontSize: "32pt",
    border: "none",
    backgroundColor: "inherit",
    margin: "20px"
  }

  const projectNameStyle = {
    color: currentTheme.secondaryColor
  }

  const projectDescStyle = {
    color: currentTheme.paragraphColor
  }

  return (
    <div id="projectsPage" className="inactivePage" style={pageStyle}>
        <p style={nameStyle}>Projects</p>
      <div style={contentStyle}>
        {projects.map(project => 
        <div className="cardContainer">
        <div className="card" onClick={() => window.open(project.showcaseLink, "_blank", "noreferrer")}>
            <p className="projectName" style={projectNameStyle}>{project.name}</p>
            <p className="projectDesc" style={projectDescStyle}>{project.description}</p>
            <button className="link" style={logoStyle} onClick={() => window.open(project.githubLink, "_blank", "noreferrer")}>{currentTheme.icons.github}</button>.
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Home