import React, { useState } from 'react'

export default function Header({handleLiftupState}) {
    const[userInput, setUserInput]=useState(''); 

    const addData=()=>{
        handleLiftupState(userInput)
        setUserInput('');
    }

  return (
    <>
        <input type='text'  value={userInput} onChange={(e)=> setUserInput(e.target.value)}/>
        <button onClick={addData} disabled={userInput===""}>Lift state</button>
    </>
  )
}
