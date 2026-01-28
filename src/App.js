import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, link } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import ProductDetails from './Pages/productDetails/ProductDetails';
import CartTab from './Pages/CartTab/CartTab';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<ProductDetails/>}/>
        <Route path='/cart-tab' element={<CartTab />}/>
      </Routes>
    </div>
  );
}

export default App;
