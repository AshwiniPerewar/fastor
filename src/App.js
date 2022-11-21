import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Otp from './pages/Otp/Otp';
import { Route, Routes } from 'react-router-dom';
import Restaurants from './pages/restaurants/Restaurants';
import Restaurant from './pages/restaurant/Restaurant';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
        <Route path="/restaurants" element={<Restaurants/>}></Route>
        <Route path="/restaurants/:id" element={<Restaurant/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
