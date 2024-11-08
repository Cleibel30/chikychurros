import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


export const Nav = () => {

    const header = useRef()

    const handleScroll = () => {

        if(window.scrollY > 80){
            header.current.classList.add("active_nav")
            header.current.classList.remove("header")
        }
        else{
            header.current.classList.remove("active_nav")
            header.current.classList.add("header")
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <header className='header' ref={header}>
                <nav className='nav'>
                    <NavLink to="/" className='logo'><img src={logo} alt="" /></NavLink>
                    <p><img  className='delivery' src="https://cdna.artstation.com/p/assets/images/images/050/392/854/original/nelson-tiapa-gif-delivery.gif?1654734228" alt="" /> <span className='dely'>¡DELIVERY EN LA VICTORIA!</span></p>
                    <ul className="menu_links">
                        <li><NavLink target='_blank' to="https://www.google.com/maps/place/C.+C.+Ciudad+Morichal/@10.2285887,-67.3191229,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a9e9c79b32633:0xf92875a464a1a449!8m2!3d10.2285887!4d-67.316548!16s%2Fg%2F1xgzctyf?hl=es&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D" className="link ubi"><span>UBICACIÓN</span> <i class="fa-solid fa-location-dot"></i></NavLink></li>
                        <li><NavLink to="https://www.instagram.com/chikychurros/" target='_blank' className="link ig"><span>@chikychurros_27</span> <i class="fa-brands fa-instagram"></i></NavLink></li>
                        <li><NavLink to="https://api.whatsapp.com/send?phone=4125079184" target='_blank' className="link ws"><span>+58  0412-5079184</span> <i class="fa-brands fa-whatsapp"></i></NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

