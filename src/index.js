import React from 'react'
import ReactDOM  from 'react-dom/client'

function HelloWorld() {
  return(
    <div>Hello World</div>
  )
}
function Hello() {
  return(
    <span>Hello</span>
  )
}
function World() {
  return(
    <span>World</span>
  )
}

function SubmitButton() {
  const buttonLabel = "Submit";
  return (
    <button>{buttonLabel}</button>
  );
}

function ValidIndicator() {
  const isValid = true
  return (
    <span>{isValid ? 'True' : 'False' }</span>
  )
}
  


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelloWorld/>
    <Hello/> <World/>
    <SubmitButton />
    <ValidIndicator />
  </React.StrictMode>
)