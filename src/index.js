import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>This is john and this is my retry component
  </h4>;
}

ReactDom.render(<Greeting/>,document.getElementById('root'))