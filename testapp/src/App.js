import './App.css';
import {useState} from 'react'
import Header from './components/Header';



function App() {
  const [string, setString]=useState([]);

  const handleLiftupState=(data)=>{
    setString([...string, data])
  }

  return (
    <div className="App">
      <h1>test APP</h1>
      <Header handleLiftupState={handleLiftupState}/>
      {
        string?.map((item,i)=>(
          <p key={i} >{i+1}.{item}</p>
        ))
      }
    </div>
  );
}

export default App;
