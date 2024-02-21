import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
     
    
    
         <Routes>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<Signup/>}/>
          <Route path='/counter' element={<Counter/>}/>
         
          <Route path='/statebasics' element={<StateBasics/>}/>
          <Route path='/useeffect' element={<UseEffect/>}/>
         </Routes>
    </div>
  );
}

export default App;
