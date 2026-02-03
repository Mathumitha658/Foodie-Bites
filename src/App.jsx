// import { useState } from 'react'
import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Meals from './Meals';
import Veg from './Veg';
import NonVeg from './Nonveg';
import SpecialCombo from './SpecialCombo';
import Register from './Register';
import Login from './Login';
import Layout from './Layout';
import TrendingRecipes from './TrendingRecipes';
import Cart from './Cart';
import Order from './Order';
import ConfirmOrder from './Confirmorder';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    
     
      <Routes>
        <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>} />

               <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
          <Route path="/meals" element={<Meals/>} />
            <Route path="/meals/veg" element={<Veg/>} />
              <Route path="/meals/nonveg" element={<NonVeg/>} />
         <Route path="/meals/special" element={<SpecialCombo/>} />
              <Route path="/trending" element={<TrendingRecipes/>} />
                  <Route path="/cart" element={<Cart/>} />
                    <Route path="/order" element={<Order/>} />
                      <Route path="/confirm" element={<ConfirmOrder/>} />
                  
         </Route>
         
        
      </Routes>
 
 
      
          
    </>
  )
}

export default App
