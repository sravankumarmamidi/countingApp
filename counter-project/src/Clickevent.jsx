



import React from 'react'
import { useState } from 'react'



const Clickevent = () => {

    const [number,setNumber] = useState(0)

    const inc = () => {
        setNumber(number + 1)
    }

    const dec = () => {
        if (number > 0) {
        setNumber(number - 1)
    }
}

    const rest = () => {
        setNumber(0)
    }

  return (
    <div>
    <h1>{number}</h1>
    <button onClick = {inc}>increment</button>
    <button onClick = {dec}> decrement</button>
    <button onClick = {rest}> reset </button>

    </div>
  )
}

export default Clickevent