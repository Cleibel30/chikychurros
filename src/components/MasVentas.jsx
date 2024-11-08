import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const MasVentas = () => {
    return (
        <>
            <section className='seccion mas_ventas'>
                <h2>¡Lo más vendido!</h2>
                <div className="container_seccion">
                    <article>
                        <div className="img_zoom"><img src="https://images.unsplash.com/photo-1505851498219-ee2449c18936?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="informacion_ventas">
                            <h3>CHURROS CLÁSICOS</h3>
                            <p className='mensaje'>AZÚCAR Y CANELA. BANDEJA DE 10 UNIDADES DE 10CM</p>
                            <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className='precio'>80bs <i class="fa-brands fa-whatsapp"></i></Link>
                        </div>
                    </article>

                    <article>
                        <div className="img_zoom"><img src="https://images.unsplash.com/photo-1615915848347-5ad361d3e9fd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="informacion_ventas">
                            <h3>CHURROS ESPECIALES</h3>
                            <p className='mensaje'>1 TOPPING (CHOCOLATE O AREQUIPE). BANDEJA DE 10 UNIDADES DE 10CM</p>
                            <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className='precio'>100bs <i class="fa-brands fa-whatsapp"></i></Link>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
