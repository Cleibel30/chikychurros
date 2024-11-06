import React from 'react'
import color from '../assets/color.png'

export const Fondo1 = () => {
    return (
        <>
            <div className="fondo_cont">
                <div className="img_fondo">
                </div>
                <div className="fondo_mensaje">
                    <div className="fondo_todo">
                        <h2 className="fondo_titulo">¡Churros!</h2>
                        <p className='fondo_info'>
                            ¡Descubre el sabor único de ChikyChurros! Nuestros churros son crujientes por fuera, esponjosos por dentro y siempre hechos con amor. Ven y disfruta de una experiencia dulce inigualable, perfecta para cualquier momento del día. ¡Te esperamos para endulzar tu vida!
                        </p>
                        <a href="" className="btn">Ver Churros</a>
                    </div>
                    <img className="color_fondo" src={color} alt="" />
                </div>

            </div>
        </>
    )
}
