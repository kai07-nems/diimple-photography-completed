import React from 'react';
import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './routes/Home';
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer"

export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path= "/"element={ <Home/>}/>
            <Route path= "/about"element={ <About/>}/>
            <Route path= "/services"element={ <Services/>}/>
            <Route path= "/contact"element={ <Contact/>}/>
            <Route  path= "/footer"element={ <Footer/>}/>
        </Routes>
    
   <Navbar/>
        
    </div>
  )
  }

