import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ContactUs from './components/contactus/ContactUs';
import About from './pages/about/About';
import Products from './pages/products/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/register" element={<Register/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
