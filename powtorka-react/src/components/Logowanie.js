import React, { useContext, useState, useRef } from 'react'
import { GlobalStoreContext } from '../Store/GlobalStore'
export const Logowanie = () => {
    const GlobalStore = useContext(GlobalStoreContext)
    const inputName = useRef()
    const checkUser =  () => {
        GlobalStore.changeUserName(inputName.current.value)
        // const userCanLogUp = GlobalStore.userCanLog.map(item => item.toUpperCase())
        const canLog =  GlobalStore.userCanLog.includes(GlobalStore.userName)
        console.log('canLog', canLog)
        GlobalStore.changeLogWhenUserCan(canLog)
    }
    return (
        <div>
            <h1>Logowanie</h1>
            {GlobalStore.isLog && <div >
                <h1>{GlobalStore.userName} jesteś zalogowany zalogowany</h1>
            </div>}
            {!GlobalStore.isLog && <div>
                <h1>Uzytkownik nie zalogowany</h1>
            </div>}

            <label htmlFor='name'>Podaj imię</label>
            <input type="text" ref={inputName} id='name' />
            <button onClick={checkUser}>Zloguj sporawdzając tablice z imionami</button>
        </div>
    )
}
