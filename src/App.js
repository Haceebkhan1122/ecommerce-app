import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/app/components/Home';
import Cart from '../src/app/components/Cart';
import Signup from '../src/app/components/Signup';
import Header from '../src/app/components/Header';
import Login from '../src/Login';
import Checkout from '../src/app/components/Checkout';
import { useDispatch } from 'react-redux';



function App() {

  return (
    <div className='app'>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </div>
  );



}

export default App;
