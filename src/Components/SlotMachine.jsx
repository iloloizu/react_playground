import React from 'react'

function SlotMachine(props) {

    const stack = []
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.pop(stack.length)
    console.log(stack)
    
  return (
    <div>
        <h4>{props.k1} {props.k2} {props.k3}</h4>
        <h3>{props.k1 === props.k2 && props.k2 === props.k3 ? "you win!" : "you lose"}</h3>
    </div>
  )
}

export default SlotMachine