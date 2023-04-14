import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
const NavBar = ({ handeClickModal }) => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const Data = [
        {
            title: 'Perfil',
            to: '/user-profile',
            cName: 'nav-text',
            icon: 'pi pi-user'
        }
    ]
    return (
        <>
            <div className='container__navBar'>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <i className="pi pi-bars" onClick={showSidebar} style={{ fontSize: '3rem' }}></i>
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className="menu-bars">
                                <i className="pi pi-times" style={{ fontSize: '3rem' }}></i>
                            </Link>
                        </li>
                        {Data.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.to}>
                                        <i className={item.icon} style={{ fontSize: '1.8rem' }}></i>
                                        <span className='span__navBar'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className='navbar-button'>
                            <button className='button__cerrar-sesion' onClick={handeClickModal}>
                                <span className='cerrar-sesion__span'>Cerrar Sesión</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar