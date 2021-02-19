import './App.css';
import { useState } from 'react';
import Bathtub from './components/bathtub.jsx';

function App() {
  // cock status : -1: decrease Water 0: nothing 1: increase water
  const [cockStatus, setCockStatus] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bathtub Testing
        </p>
        <Bathtub cockStatus={cockStatus}/>
        <button className="btn btn-default" onClick={() => setCockStatus(1)}>Increase Water</button>
        <button className="btn btn-default" onClick={() => setCockStatus(-1)}>Decrease Water</button>
      </header>
    </div>
  );
}



export default App;
