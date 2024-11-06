import React from 'react'
import logo from "../assets/logo.png"

export const Footer = () => {
    return (
        <footer>
            <div className="footer_logo">
                <h2>Chikychurros</h2>
                <img src={logo} alt="" />
            </div>
            <div className="footer_productos">
                <h2>Productos</h2>
                <ul>
                    <li>Churros</li>
                    <li>Dulces</li>
                    <li>Bebidas</li>
                </ul>
            </div>
            <img src="" alt="" className="churro_footer" />
        </footer>
    )
}
