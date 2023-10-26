import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Medicals from './Pages/Medicals';
import Food from './Pages/Food';
import Kuli from './Pages/Kuli';
import Onboard from './Pages/OnbardFacilities';
import Alerts from './Pages/Alerts';
import Cart from './Pages/Carts';
import Order from './Pages/Order';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/medicals" element={<Medicals />}></Route>
        <Route path="/foods" element={<Food />}></Route>
        <Route path="/kuli" element={<Kuli />}></Route>
        <Route path="/onboard-facilities" element={<Onboard />}></Route>
        <Route path="/alerts" element={<Alerts />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
