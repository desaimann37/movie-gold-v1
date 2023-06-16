import './App.css'
import Appbar from './componets/Appbar'
import Student from './componets/student';
import AxiosConfiguration from './appi/AxiosConfiguration';
import { Component, useState } from 'react';


function App(){
  const[showComponent , setshowComponent] = useState(false);
  const handleClick = ()=>{
    setshowComponent(true);
  }

  return (
      <div className="App">
        <Appbar/>
        <Student/>
        <button onClick={handleClick}>Get All Data From BackEnd</button>

        {showComponent && <ComponentNew/>}
      </div>
  );
}

const ComponentNew = ()=>{
  return <h3>
    <AxiosConfiguration />
  </h3>
}

export default App;