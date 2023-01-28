import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  let a = () => console.log("Hello World")
  let buttons = [{key: 1, text: "Login / Signup", onClick: a}, {key: 2, text: "Courses", onClick: a}, {key: 3, text: "Donate", onClick: a}, {key: 4, text: "About", onClick: a}]
  return (
    <div>
      <Navbar buttons={buttons}/>
    </div>
  )
}

export default App