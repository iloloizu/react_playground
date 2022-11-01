import React from 'react'
import SlotMachine from './SlotMachine'

function Title() {
  return (
    <div>
        <h3> Slot Machine</h3>
        <SlotMachine k1="x" k2="y" k3="z"/>
        <h3> Slot Machine</h3>
        <SlotMachine k1="y" k2="y" k3="y"/>
    </div>

  )
}

export default Title