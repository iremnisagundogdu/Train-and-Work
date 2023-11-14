import React from 'react'

function Urun(props) {
  return (
    <div>
      <h2>{props.uObject.title}</h2>
      <h2>{props.uObject.list}</h2>
      </div>
  )
}

export default Urun