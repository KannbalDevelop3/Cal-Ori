import React from 'react'
import Imagen from '../../../Reutilizable/Imagen'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/tabla.css'
import pagepa from './assets/images/fondo-white.jpg'
import title from './assets/images/tabla/TITULO.png'
import instruction from './assets/images/tabla/TITULO2.png'
import tablita from './assets/images/tabla/CUADRO-INFO.png'
const TablaClasificacion = () => {
    return (
        <SlidePage backgroundDesktop={pagepa} rutaPrev='/paciente/verduras/coloracion' rutaNext='/paciente/verduras/envejecimiento'>
            <div className='tabla-verdura__contenedor'>
                <div className='tabla-verdura__textos'>
                    <Imagen imagenEf={title} estilo='tabla-verdura__title' />
                    <div className='text-center'>
                        <Imagen imagenEf={instruction} estilo='tabla-verdura__texto' />
                    </div>
                </div>
                <div className='tabla-verdura__tabl'>
                    <Imagen imagenEf={tablita} estilo='tabla-verdura__cnter' />
                </div>
            </div>
        </SlidePage>
    )
}

export default TablaClasificacion