import React, { useState } from 'react'

export const FormUseState = () => {
    const [surName, setSurName] = useState('Kowlski')
    // surName = 'kkkkkk' // błąd, działa ale nie zapewnia nam nowego Rendera
 

   // jak działa set dokładnie
    const [obj, setObj] = useState({kurs: 'SDA', teacher: "Łukasz"})

    const [arr, setArr] = useState([1, 8, 6,9,66])


    const changeSurName = () => {
        // surName = 'kkkkkk' // błąd, działa ale nie zapewnia nam nowego Rendera
        setSurName('kkkkkkk')
    }

    let name = "Lewandowski"
    const changeName = () => {
        // to nie będzie działać, zminna się zmini, ale w komponecie nie zauważymy zmiany
        name = "Milik"
        console.log(name)
    }

    const changeOBJ = () => {
        // setObj({teacher: "Michał"}) nowy Obj to będzie {teacher: "Michał"} stary nie istnieje
        // setObj({...obj,teacher: "Michał"}
        setObj(
            (poprzedniStan) => {
            console.log(poprzedniStan)
            return {...poprzedniStan, teacher: "Michał", topic: 'jak działa map'}
            
        }) // {kurs: 'SDA', teacher: "Michał"}
    }
    return (
        <div>
            <h1>Form</h1>
            <div>
                <p>{surName}</p>
                <button onClick={changeSurName}>Zmina surName</button>
            </div>

            <div>
                <p>{name}</p>
                <button onClick={changeName}>Zmina name</button>
            </div>


            <div>
                <button onClick={changeOBJ}>Zmina OBJ</button>
            </div>
            <input type="text" />

        </div>
    )
}


