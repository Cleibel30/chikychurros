import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Productos = () => {

    const churros = useRef(null);
    const bebidas = useRef(null);
    const golosinas = useRef(null);

    const removeClass = (e)=>{
        const padre = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        padre.classList.remove('over_menu')
        const hijo = e.target.parentNode.parentNode.parentNode.parentNode.children[1]
        // hijo.classList.add("menu_efecto")

        console.log(padre)


        window.scrollBy(0, 500);
    }

    const addClass = (e)=>{
        const padre = e.target.parentNode.parentNode.parentNode
        padre.classList.add('over_menu')

        const hijo = e.target.parentNode.parentNode.children[0].id

        if(hijo == "churros"){
            scrollToSection(churros)
        }else if(hijo == "bebidas"){
            scrollToSection(bebidas)
        }else if(hijo == "golosinas"){
            scrollToSection(golosinas)
        }
        
    }

    const scrollToSection = (sectionRef) => { if (sectionRef.current) { sectionRef.current.scrollIntoView({ behavior: 'smooth' }); } };

    return (
        <section className='seccion seccion_border'>
            <h2 className='margin'>Productos</h2>
            <div className="productos_container over_menu ">
                <div className="pruducto_cont">
                    <div className="cont" ref={churros} id='churros'>
                        <div className="img_container"><img src="https://hips.hearstapps.com/hmg-prod/images/churros-index-661d4692d05e4.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" alt="" /></div>
                        <div className="info_producto churros">
                            <h3>CHURROS</h3>
                            <p>Los churros son más que un simple postre; son una experiencia gastronómica que nos transporta a momentos especiales.</p>
                            <div className="boton_ver"><button onClick={removeClass} className="link_producto link_churro">VER OPCIONES</button></div>
                        </div>
                    </div>

                    <div className="menu">
                    <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                      
                    </div>

                    <div className="boton"><button onClick={addClass} className='dejar_ver'>Dejar de ver <i class="fa-solid fa-chevron-up"></i></button></div>
                </div>
            </div>
            <div className="prodcutos_container over_menu">
                <div className="pruducto_cont">
                    <div className="cont" ref={bebidas} id='bebidas'>
                        <div className="info_producto bebidas">
                            <h3>BEBIDAS</h3>
                            <p>Refresca tus sentidos con nuestras irresistibles bebidas! En nuestro local, encontrarás una amplia variedad de opciones. Deléitate con nuestras bebidas.</p>
                            <div className="boton_ver"><button onClick={removeClass} className="link_producto link_bebida">VER OPCIONES</button></div>
                        </div>
                        <div className="img_container"><img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                    </div>

                    <div className="menu">
                    <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                    
                    </div>

                    <div className="boton"><button onClick={addClass} className='dejar_ver'>Dejar de ver <i class="fa-solid fa-chevron-up"></i></button></div>
                </div>
            </div>

            <div className="prodcutos_container over_menu ">
                <div className="pruducto_cont">
                    <div className="cont" ref={golosinas} id='golosinas'>
                        <div className="img_container"><img src="https://images.unsplash.com/photo-1565071559227-20ab25b7685e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="info_producto golosinas">
                            <h3>GOLOSINAS</h3>
                            <p>Desde coloridos caramelos hasta crujientes galletas, tenemos todo lo que necesitas para satisfacer tus antojos. ¿Quieres endulzar tu día? Ven y prueba nuestras delicias.</p>
                            <div className="boton_ver"><button onClick={removeClass} className="link_producto link_golosina">VER OPCIONES</button></div>
                        </div>
                    </div>

                    <div className="menu">
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                        <article className="producto_menu">
                            <div className="img_menu"><img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_3yquswg8h7_churros.jpg" alt="" /></div>
                            <div className="menu_info">
                                <p className='titulo_menu'>CHURROS CLÁSICOS</p>
                                <p className='info_menu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam.</p>
                                <Link to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="precio precio_menu">100bs <i class="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </article>                
                    </div>

                    <div className="boton"><button onClick={addClass} className='dejar_ver'>Dejar de ver <i class="fa-solid fa-chevron-up"></i></button></div>
                </div>
            </div> 
        </section>
    )
}
