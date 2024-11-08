import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from './routes/Inicio'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import "./styles/estilos.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
