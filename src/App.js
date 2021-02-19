import './App.css';
import { useState } from 'react';
import Bathtub from './components/bathtub.jsx';

function App() {
  const [status, setStatus] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bathtub Testing
        </p>
        <Bathtub status={status}/>
        <button className="btn btn-default" onClick={() => setStatus(1)}>Increase Water</button>
        <button className="btn btn-default" onClick={() => setStatus(-1)}>Decrease Water</button>
      </header>
    </div>
  );
}



export default App;
