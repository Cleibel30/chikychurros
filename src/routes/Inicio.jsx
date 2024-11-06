import React from 'react'
import { Nav } from '../components/Nav'
import { Carrousel } from "../components/Carrousel"
import { MasVentas } from '../components/MasVentas'
import { Productos } from '../components/Productos'
import { Visitar } from '../components/Visitar'

import fondo from "../assets/fondo.png"

export const Inicio = () => {
  return (
    <>

      <main className="main">

        <Carrousel></Carrousel>
      </main>

      <MasVentas></MasVentas>
      <Productos></Productos>
      <Visitar></Visitar>
      <div className="fondo"></div>
    </>
  )
}
