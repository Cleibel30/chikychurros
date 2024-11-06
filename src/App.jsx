import { useState } from 'react'
import { Inicio } from './routes/Inicio'
import { Fondo2 } from './components/Fondo2'
import { Fondo1 } from './components/Fondo1'
import { Fondo3 } from './components/Fondo3'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import "./styles/estilos.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {

  return (
    <>
    <Nav></Nav>
    <Inicio></Inicio>
    <Footer></Footer>
    </>
    
    // <Fondo3></Fondo3>
  )
}

export default App
