import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactelement = {
  type: "a",
  props : {
      href : "https://google.com" ,
      target : " _blank",
  },
  children : "click me to vist there !"
}
// it can't work becaouse render expect some parameters 

const Element = (
  <a href="https://google.com" target="_blank">
  click me to visit there
</a>
)
const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click to visit google',
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/> 
)
