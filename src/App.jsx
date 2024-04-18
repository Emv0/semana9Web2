import './App.css';
import Data from './Data.jsx';
import React from 'react';

function App() {
  return (
    <div>
      <Data name="Esteban" lastName="Monsalve" age="23" isData={true}/>
      <Data name="Luis" lastName="Jimenez" age="hola mundo" isData={true}/>
      <Data name="jimmy" lastName="Neutron" age="12" isData={false}/>
      <Data/>
    </div>
  );
}

export default App;
