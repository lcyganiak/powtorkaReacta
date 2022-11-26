import React, { createContext, useState } from "react";


export const GlobalStoreContext = createContext({
    userName: '',
    userId: null,
    userPassword: '',
    isLog: false,
    userChildren: [],
    userCanLog: [],
    changeLog: () => {},
    changeUserName: () => {},
    changeUserPassword: () => {},
    changeUserChildren: () => {},
    changeUserId: () => {},
    changeLogWhenUserCan: () =>{}
})


const GlobalStore = (props) => {
const [userName, setUserName] = useState('')
const [userId, setUserId ] = useState(null) 
const [userPassword, setUserPassword ] = useState('') 
const [isLog, setIsLog ] = useState(false) 
const [userChildren, setUserChildren ] = useState([]) 
const [userCanLog, setUserCanLog] = useState(["Ania", "Dmytro", "Gosia", "Marcin", "Michał", "Ola"])
const handlerChangeLog = () => {
    setIsLog((previusValue) => !previusValue)
}

const handlerChangeUserName = (newName) => {
    setUserName(newName)
}
const handlerChangeUserPassword = (newPassword) => {
    setUserPassword(newPassword)
}

const handlerChangeUserChildren = (newChild) => {
    setUserChildren((previusValue) => previusValue.push(newChild))
}

const handlerChangeUserId = (newId) => {
    setUserId(newId)
}

const handlerChangeLogWhenUserCan = (canLog) => {
    setIsLog(canLog)
}
const providerValue = {
    userName,
    userId,
    userPassword,
    isLog,
    userChildren,
    userCanLog,
    changeLog: handlerChangeLog,
    changeUserName: handlerChangeUserName,
    changeUserPassword: handlerChangeUserPassword,
    changeUserChildren: handlerChangeUserChildren,
    changeUserId: handlerChangeUserId,
    changeLogWhenUserCan :handlerChangeLogWhenUserCan,
}

    return (
        <GlobalStoreContext.Provider value={providerValue}>
            {props.children}
        </GlobalStoreContext.Provider>
    )

}

export default GlobalStore