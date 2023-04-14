import React from 'react'
import circulo from './assets/images/Foto.png'
import textoo from './assets/images/Texto_introduccion.png'
import './assets/css/inicio.css'
import BackgroundImageT from '../../Reutilizable/BackgroundImageT'
import imagen2 from './assets/images/slide-2.png'
const Introduccion = () => {
    return (
        <>
            <BackgroundImageT backgroundImage={imagen2}>
                <div className='introduccion__circulo'>
                    <div className='introduccion__centrar'>
                        <img src={textoo} className='introduccion__centrar-1' loading="lazy" />
                    </div>
                    <div className='introduccion__centrar'>
                        <img src={circulo} className='introduccion__centrar-2' loading="lazy" />
                    </div>
                </div>
            </BackgroundImageT>
        </>
    )
}

export default Introduccion
