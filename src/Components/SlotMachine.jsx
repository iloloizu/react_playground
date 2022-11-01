import React from 'react'

function SlotMachine(props) {
   console.log(props)
  return (
    <div>
        <h4>{props.k1} {props.k2} {props.k3}</h4>
        <h3>{props.k1 === props.k2 && props.k2 === props.k3 ? "you win!" : "you lose"}</h3>
    </div>
  )
}

export default SlotMachine