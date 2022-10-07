import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav">
        <a href="/" className='appTitle'>Home</a>
        <ul>
            <li className='active'><a href="/">Inicio</a></li>
            <li><a href="/clientes">Clientes</a></li>
        </ul>

    </nav>
  )
}
/*
Referencia de creacion del nav 
https://www.youtube.com/watch?v=SLfhMt5OUPI

*/