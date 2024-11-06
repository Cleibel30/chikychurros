import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
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
                    <a href="" className='logo'><img src={logo} alt="" /></a>
                    <p><img  className='delivery' src="https://cdna.artstation.com/p/assets/images/images/050/392/854/original/nelson-tiapa-gif-delivery.gif?1654734228" alt="" /> ¡DELIVERY EN LA VICTORIA!</p>
                    <ul className="menu_links">
                        <li><a href="" className="link ubi">UBICACIÓN <i class="fa-solid fa-location-dot"></i></a></li>
                        <li><a href="" className="link ig">@chikychurros_27 <i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="" className="link ws">+58  0412-5079184 <i class="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
