import * as React from 'react';
import './App.css';
import Home from './components/home' ;
import NavBar from './components/navbar' ;
import Products from './components/productsList' ;
import About from "./components/About";
import ProductDetails from './components/details';
import { useParams } from "react-router-dom"; 
// import GetProduct from './components/product';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<><NavBar /><Products /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/Details/:id" element={<><NavBar /><GetProduct  /></>} />
        </Routes>
      </Router>
    </>
  );
}
function GetProduct(){
  let {id} = useParams();
  return (
      <ProductDetails id={id}/>
  )
}

export default App;
