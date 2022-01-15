import Navbar from "./Components/Navbar";
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import { useContext } from "react";
import ProductContextProvider from "./data/producstData/productContext";
import DetailProduct from './Components/DetailProduct'
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart";
import NavList from "./Components/Products";
import { CartContext } from "./Components/CartContext";
import Contact from "./Components/Contact";
import Products from './Components/Products'
import './scss/reponsive.scss'
import Catalog from "./Components/Catalog";
import Login from "./Components/LogInOut/Login";
import Register from "./Components/LogInOut/Register";
import {UserAccountProvider} from './data/UserAccount/UserAccount'
import User from "./Components/User";


function App() {



  return (

    <div className="App">



      <CartContextProvider>
        <Navbar />
        <ProductContextProvider>
          <UserAccountProvider>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id/:name" element={<DetailProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user/" element={<Login />} />

              <Route path="/user/login" element={<Login />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/user/:userId" element={<User />} />


            </Routes>
          </UserAccountProvider>
        </ProductContextProvider>
      </CartContextProvider>



    </div>


  );
}

export default App;
