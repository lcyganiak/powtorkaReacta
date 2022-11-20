import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Contact = () => {
const navigate = useNavigate()
    const goToFormComponetUseState = () => {
        navigate('/formUseState')
    }
    const goToFormComponetUseRef = () => {
        navigate('/formUseRef')
    }
  return (
    <div>
        <h1>Contact</h1>
        <button onClick={goToFormComponetUseState}>Go to Formularz Z użyciem useState</button>
        <button onClick={goToFormComponetUseRef}>Go to formularz z urzyciem useRefa</button>
    </div>
  )
}
// Kroki 
//1 . import import { useNavigate } from 'react-router-dom'
//2. tworzymy zminną const navigate = useNavigate(), 
// 3. zminna navigate to funkcja któura potrzebuje jednego parametru. Jeżeli podamy -1 cofnie nas o jedną krok w tył.
// Jak podamy link z app.js   <Route path='/form' element={<Form/>} />  z path to zabierze nas do componentu Form