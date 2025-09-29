import React from 'react'

const Input = ({colorValue,setColorValue}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>   
        <label htmlFor="colorInput">Enter Color Value: </label>
        <input type="text" value={colorValue} onChange={(e)=>setColorValue(e.target.value)} placeholder='Enter Color Value'  required/>
    </form>
  )
}

export default Input
