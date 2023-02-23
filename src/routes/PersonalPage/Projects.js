import React from 'react'

const Home = ({ currentTheme, corner }) => {

  const projects = [
    {
      name: "OpenAlgorithms",
      description: "An open source website made using the MERN Stack (MongoDB, ExpressJS, NodeJS, ReactJS) for developers as a learning and experimenting playground for developers, by developers.",
      showcaseLink: "",
      githubLink: "https://openalgorithms.in",
    },

    {
      name: "Dijkstra's Shortest Path Algorithm Playground",
      description: "A web app built using vanilla Javascript that allows users to create nodes and find the shortest path between any two nodes and inspect the network.",
      showcaseLink: "https://mellifluous-palmier-f666ca.netlify.app",
      githubLink: "https://github.com/Garvit48/dijkstras_algorithm",
    },

    {
      name: "Python based peer-to-peer chat app",
      description: "An app built using Python that utilizes sockets for communication between two devices. The app supports communication with multiple devices that can be saved by their name and also locally stores the previous coversations between two users.",
      showcaseLink: "",
      githubLink: "",
    },
    {
      name: "Cluster App (Flutter)",
      description: "A communications app built using Dart, Flutter and Firebase that enables secure internal communication between members of an organization. The app also enables management of members via groups managed by the administrators of the organization.",
      showcaseLink: "",
      githubLink: "https://github.com/Garvit48/flutter_chat_app",
    },
    
    
    {
      name: "Clustering App (Python)",
      description: "A web app built using vanilla Javascript that allows users to create nodes and find find the shortest path Clustering App (Python)",
      showcaseLink: "",
      githubLink: "https://github.com/Garvit48/clusteringAlgorithm",
    },
    {
      name: "Linear Regression Visualizer",
      description: "A python based program that takes a set of points or a data file as an input and displays the line of best on a graph using the matplotlib module.",
      showcaseLink: "",
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
            <button className="link" style={logoStyle} onClick={() => (project.githubLink === "") ? window.alert("No preview available yet") : window.open(project.githubLink, "_blank", "noreferrer")}>{currentTheme.icons.github}</button>.
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Home