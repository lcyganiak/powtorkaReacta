import React, { useRef, useState, useEffect } from 'react'
import './FormUseRef.css';

export const FormUseRef = () => {

const [counter, setCounter] =useState(0);

const [errorMsg, setErrorMsg] = useState(false)

    // useref dla form
    const refForm = useRef(null)
    const getFormValue = (event) => {   
        event.preventDefault()
        console.log( typeof refForm.current)

    }

    // useRef dla pojedyńczego inputa 
    const refOneInput = useRef(null)
   const getInputRef = () => {
    console.log( typeof refOneInput.current)
   } 

   // to zadziala ale jest mało wydajne
//    useEffect(() => {
//     console.log('useEffect', refOneInput)
//     setCounter(refOneInput.current.value.length)


//    }, [refOneInput.current.value]);

   // onchange jak działa 
   const changeInputVal = (event) => {
    const value = event.target.value
    console.log(value)
    if(value.length < 8) {
        setErrorMsg(true)
    } else {

        setErrorMsg(false)
    }
   }
    return (
        <div>
            <form ref={refForm} >
                <h2>UseRef na form</h2>
                <input type="number" />
                <p>lorem    </p>
                <input type="password" />
                <button onClick={getFormValue} type='submitt'>Get Form</button>
            </form>
            <div>
                <h2>UseRef na pojedyńczy input</h2>
                <input ref={refOneInput} onChange={(event) => changeInputVal(event)} type="text" />
                 {errorMsg && <p>Musi być min. 8 znaków</p>}
                <button onClick={getInputRef} >Get Input</button>
            </div>
        </div>
    )
}

