import React from 'react'
import { useState } from 'react'

export default function Section( { username} ) {

    const [counter,setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    
    if( counter === 5){
        throw new Error('Error!')
    }

  return (
    <div>
        <p>{ username }</p>
        <p>{ counter }</p>
        <button onClick={increment}>+</button>
    </div>
  )
}
