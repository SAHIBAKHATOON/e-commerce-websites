 
 import React from 'react';
 import './App.css';
 import { BrowserRouter, Route, Routes, } from 'react-router-dom'
 import Layout from './components/Layout'
 import Home from './pages/Home'
 import About from './pages/About'
 import Shop from './pages/Shop'
 import Contact from './pages/Contact'
 import Cart from './pages/Cart'
 import Blog from './pages/Blog'
 import ShopContext from './components/Shopcontext';
 import Details from './pages/Details';

 
 
 
 function App() {
 
   return (
     <>
    
     <ShopContext>
     <BrowserRouter>
     
     <Routes>
       <Route path='/' element={<Layout />}>
         <Route index element={<Home />} />
         <Route path='Shop' element={<Shop />} />
         <Route path='About' element={<About />} />
         <Route path='Blog' element={<Blog />} />
          <Route path='Contact' element={<Contact />} />  
         <Route path='Cart' element={<Cart />} />
         <Route path='Details' element={<Details />} /> 
      
       </Route>
     </Routes>
     </BrowserRouter>
     </ShopContext>
     </>
   )
 }
 
 export default App
