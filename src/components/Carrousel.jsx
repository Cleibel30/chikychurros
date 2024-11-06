import { useEffect, useState } from "react"
import Slider from 'react-slick';


import { Fondo1 } from "./Fondo1";
import { Fondo2 } from './Fondo2'
import { Fondo3 } from './Fondo3'
// import { Fondow } from "./Fondo1";

const images = [
  'https://media.istockphoto.com/id/1808237503/es/foto/receta-casera-de-churros-rellenos.jpg?s=2048x2048&w=is&k=20&c=V700LqikAJUsUvSHARJZJD8JLsEamtt3oPA_GAkv6nE=',
  'https://media.istockphoto.com/id/157693206/es/foto/churros.jpg?s=2048x2048&w=is&k=20&c=mXh_wVONCqJyWV1Quwbffuyst-Rt9I1gj8p5v3Vuo9c=',
  'https://media.istockphoto.com/id/1441732227/es/foto/plato-de-churros-y-taza-de-chocolate-caliente.jpg?s=2048x2048&w=is&k=20&c=tOK63S9oUWOlElwzoSxGAfu0BwOHFtskP_YvBL9Gb3I=',
];

export const Carrousel = () => {
  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Permite el deslizamiento infinito
    speed: 300, // Velocidad de transición
    slidesToShow: 1, // Número de imágenes a mostrar
    slidesToScroll: 1, // Número de imágenes a desplazar
    autoplay: true, // Activa el modo automático
    autoplaySpeed: 4000, // Intervalo entre cambios automáticos
    // arrows: true
    
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <Fondo1></Fondo1>
        <Fondo2></Fondo2>
        <Fondo3></Fondo3>
      </Slider>
    </div>
  )
}
