import React, { useRef } from 'react'
import fondo from "../assets/fondo.png"


export const Visitar = () => {
    return (
        <>
            <div className="imagen_local ">
                <div className="publicidad_cont">
                    <p className="publi">¡Reconocido por sus mejores churros!</p>
                    <p className="mensaje_publicidad">La mejor churrería de La Victoria</p>
                    <div className="boton_div"><a href="" className="ver_ubicacion">VER UBICACIÓN</a></div>
                </div>
                <img src={fondo} alt="" className="img_publi" />
            </div>
        </>
    )
}
