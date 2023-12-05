import React from 'react'
import ReactDOM  from 'react-dom/client'

function HelloWorld() {
  return(
    <div>Hello World</div>
  )
}

function Hello() {
  return(
    <span>World</span>
  )
}

function World() {
  return(
    <span>World</span>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelloWorld/>
    <Hello/> <World/>
  </React.StrictMode>
)