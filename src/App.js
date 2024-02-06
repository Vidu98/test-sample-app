 import {useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to Uses Pages</h1>
      <button className='uses-button' onClick={()=>navigate('/users')}>Click Here</button>
    </div>
  );
}

export default App;
