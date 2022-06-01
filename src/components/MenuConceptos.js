import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>🟢 Componente HTML normal: </span>
                    <a href='/'>Home</a>
                    <a href='/about'>Acerca</a>
                    <a href='/contact'>Contacto</a>
                </li>
                <li>
                    <span>🟢 Componente Link React Router: </span>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Acerca</Link>
                    <Link to='/contact'>Contacto</Link>
                </li>
                <li>
                    <span>🟢 Componente NavLink React Router: </span>
                    <NavLink exact='true' to='/' activeclassname='active'>Home</NavLink>
                    <NavLink exact='true' to='/about' activeclassname='active'>Acerca</NavLink>
                    <NavLink exact='true' to='/contact' activeclassname='active'>Contacto</NavLink>
                </li>
                <li>
                    <span>🟢 Parametros: </span>
                    <Link to='/usuario/andresrestrepo'>Andres Restrepo</Link>
                    <Link to='/usuario/zak'>Zak</Link>
                </li>
                <li>
                    <span>🟢 Parametros de consulta: </span>
                    <Link to='/productos'>Productos</Link>
                </li>
                <li>
                    <span>🟢 Redirecciones: </span>
                    <Link to='/acerca'>About</Link>
                    <Link to='/contacto'>Contact</Link>
                </li>
                <li>
                    <span>🟢 Rutas Anidadas: </span>
                    <Link to='/react'>React</Link>
                </li>
                <li>
                    <span>🟢 Rutas Privadas: </span>
                    <Link to='/login'>Login</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ol>

        </nav>
    )
    }

export default MenuConceptos
