import React, { useRef } from 'react'
import fondo from "../assets/fondo.png"


export const Visitar = () => {
    return (
        <>
            <div className="imagen_local ">
                <div className="publicidad_cont">
                    <p className="publi">¡Reconocido por sus mejores churros!</p>
                    <p className="mensaje_publicidad">La mejor churrería de La Victoria</p>
                    <div className="boton_div"><a href="https://www.google.com/maps/place/C.+C.+Ciudad+Morichal/@10.2285887,-67.3191229,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a9e9c79b32633:0xf92875a464a1a449!8m2!3d10.2285887!4d-67.316548!16s%2Fg%2F1xgzctyf?hl=es&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="ver_ubicacion">VER UBICACIÓN</a></div>
                </div> 
                <img src={fondo} alt="" className="img_publi" />
            </div>
        </>
    )
}
