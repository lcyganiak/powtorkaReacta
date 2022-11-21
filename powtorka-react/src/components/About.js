import React, {useContext} from 'react'
import { GlobalStoreContext } from '../Store/GlobalStore'

export const About = () => {
  const GlobalStore = useContext(GlobalStoreContext)

  return (
    <div>
      
   {GlobalStore.isLog && <div>Fanie że jesteś zalogowany {GlobalStore.userName}</div>}
   {!GlobalStore.isLog && <div> idzi co strony z logowaniem</div>}
    </div>
  )
}
