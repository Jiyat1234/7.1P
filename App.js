import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import TopBar from './SearchBar';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TopBar />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/signup' element = {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;