
import './App.css';
import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Categorydetails from './components/Category/Categorydetails';
import Subcategorydetails from './components/Subcategory/Subcategorydetails';
import Home from './components/Adminpanel/Home';
import Sidebar from './components/Adminpanel/Sidebar';
import Topbar from './components/Adminpanel/Topbar';
import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Navsidebar from './utils/Navbar/Navsidebar';
import Addpro from './utils/Addpro';
import Homeu from './utils/Homeu';
import Addcrt from './utils/Addcrt';
import SignupPage from './utils/signup/Signup';
import Signup from './utils/signup/Signup';
import About from './utils/Navbar/About';
import Contact from './utils/Navbar/Contact';

  function App() {
    
  
  return (
    <div className='App'>
            {/* <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Navsidebar</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Router> */}
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Homeu/>}></Route>
        <Route path={'/nav'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home />}></Route>
        <Route path={'/Addp'} element={<Addpro/>}></Route>
        <Route path={'/Addc'} element={<Addcrt/>}></Route>
        <Route path={'/sgn'} element={<Signup/>}></Route>
        <Route path={'/abt'} element={<About/>}></Route>
        <Route path={'/cont'} element={<Contact/>}></Route>


        <Route path={'/viewdetails'}element={<Categorydetails method='get'/>}></Route>
        <Route path={'/sview'}element={<Subcategorydetails method='get'/>}></Route>
        
       <Route path='/s'element={<Subcategory method='post'/>}/>
      <Route path='/c'element={<Category method='post'/>}/>
      
      </Routes>
     </BrowserRouter>
     <Footer/>
    
    </div>
  );
}

export default App; 
