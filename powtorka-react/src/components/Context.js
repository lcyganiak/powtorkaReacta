import React, { useContext, useState, useRef} from 'react'
import { GlobalStoreContext } from '../Store/GlobalStore'
export const Context = () => {
    const GlobalStore = useContext(GlobalStoreContext)
    console.log(GlobalStore)
    const inputName= useRef(null)
    const logowanie = () => {
        if(GlobalStore.isLog === false) {
            GlobalStore.changeUserName(inputName.current.value)  
        } else {
            GlobalStore.changeUserName('')  
        }
        GlobalStore.changeLog()

    }
    return (
        <div>
            {GlobalStore.isLog &&<div >
                <h1>{GlobalStore.userName} jesteś zalogowany zalogowany</h1>
                <button onClick={logowanie}>Wyloguj</button>
            </div>}
           {!GlobalStore.isLog && <div>
                <h1>Uzytkownik nie zalogowany</h1>
                <input type="text" ref={inputName} />

                <button onClick={logowanie}>Zaloguj</button>
            </div>}
        </div>
    )
}
