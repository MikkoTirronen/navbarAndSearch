import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePageComponent from './pages/HomePageComponent';

function App() {
  
  return (
    
      <Routes>
        <Route path="/" element={<HomePageComponent/>}></Route>
      </Routes>
    
  );
}

export default App;
