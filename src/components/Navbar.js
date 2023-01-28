import React from 'react'
import './Navbar.css'
import Hr from './Hr'
//buttons  = [text, command]
const Navbar = ({buttons}) => {

  return (
    <div>
      <nav id='navigation'>
        <p id='logo'>OpenAlgorithms</p>
        <div id='navButtonsContainer'>
          {React.Children.toArray(
            buttons.map(button => <button className='navButton' id={button.key} onClick={button.onClick}> {button.text} </button>)
          )}
          <img id='profilePicture' src="https://reactjs.org/logo-og.png" alt="Display Profile" />
        </div>
      </nav>
      <Hr />
    </div>
    
  )
}

export default Navbar