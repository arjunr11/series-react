import React from 'react'

const Button = ({buttonText,reqType,setReqType}) => {
  return (
    <button 
        className={reqType===buttonText.toLowerCase() ? "selected":null}
        typr="button"
        onClick={()=>setReqType(buttonText.toLowerCase())}
    >
        {buttonText}
    </button>
    
  )
}

export default Button
