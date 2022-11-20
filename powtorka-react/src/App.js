import './App.css';

import { Link, Outlet, useParams } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FormUseState } from './components/FormUseState';
import { NoMatch } from './components/NoMatch';
import { ContactUSA } from './components/ContactUSA';
import { FormUseRef } from './components/FormUseRef';

import {  Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Router - usePAramas, useHistory</li>
          <li>Hook - useref, useState, useEffect</li>
          <li> Globalny Store z useContext;</li>
          <li>stylowanie</li>
          <li>--------</li>
        </ul>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Kontakt</Link>
          </li>
          <li>
            <Link to='/about'>O Mnie</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/contact/USA' element={<ContactUSA/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/formUseState' element={<FormUseState/>} /> 
          <Route path='/formUseRef' element={<FormUseRef/>} /> 
          <Route path='/*' element={<NoMatch/>} />
      </Routes>

    </div>
  );
}

export default App;
