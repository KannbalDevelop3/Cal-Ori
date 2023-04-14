import React from 'react'
import { Link } from 'react-router-dom';
import './assets/css/inicio.css'
import botonfruta from './assets/images/fruta-boton.png'
import botonverdura from './assets/images/verdura-boton.png'
import texto from './assets/images/Texto_me_interesa.png'
import BackgroundImageT from '../../Reutilizable/BackgroundImageT';
import imagen3 from './assets/images/slide-3.png'
import prevBoton from '../contenido/assets/images/f-izq.png'
import HorizontalPage from 'components/Reutilizable/HorizontalPage';
const OpcionFrutasVerduras = () => {
    const comestibles = [
        {
            id: 1,
            comestible: 'frutas',
            imagen: botonfruta
        },
        {
            id: 2,
            comestible: 'verduras',
            imagen: botonverdura
        },
    ]
    return (
        <>
            <HorizontalPage>
                <BackgroundImageT backgroundImage={imagen3}>
                    <div className='opcion__grid'>
                        <div className='opcion__texto-titulo'>
                            <img src={texto} loading="lazy" />
                        </div>
                        <div className='opcion__menu-botones'>
                            {comestibles.map(comestible => (
                                <Link className='opcion__boton-link' key={comestible.id} to={`/paciente/${comestible.comestible}`}><button className='opcion__boton-opt'><img src={comestible.imagen} loading="lazy" /></button></Link>
                            ))}
                        </div>
                    </div>
                    <div className='menu-verdura-o-fruta__boton-siguiente'>
                        <Link to='/paciente'><img width='100%' src={prevBoton} loading="lazy" /></Link>
                    </div>
                </BackgroundImageT>
            </HorizontalPage>
        </>
    )
}

export default OpcionFrutasVerduras
