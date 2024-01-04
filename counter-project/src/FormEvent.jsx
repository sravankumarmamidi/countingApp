


import React from 'react'
import './App.css'
import { useState } from 'react'

const FormEvent = () => {

const [changeuser,Setchange] = useState("")

const userchange = (event) => {
    Setchange(event.target.value)
}

const [newchangeuser,Setnewchange] = useState("")

const submitbtn = (event) => {
    Setnewchange(changeuser)
}



  return (

    <div className = "bg-container">
        <h1>{newchangeuser}</h1>

    <div className = "">
    <input className = "input-style" onChange = {userchange} type = "text" placeholder='Enter a Value ?'></input>
    <br />
    <button onClick = {submitbtn}>Submit</button>
    </div>
    </div>
  )
}

export default FormEvent