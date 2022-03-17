import { useState } from 'react'
import Home from './components/home/Home';
import Info from './components/info/Info';

import './styles/Main.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Rotas from './Rotas';


function App() {
  const [info, setInfo] = useState(false);

  function handleInfo() {
    setInfo(!info);
  }

 return (
   <Router>
      <Info
        info={info}
      />
      <Home
        info={info}
        change={handleInfo}
      />

    <Rotas />

   </Router>
  )
}

export default App
