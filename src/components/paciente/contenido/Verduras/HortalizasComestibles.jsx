import React, { useEffect, useState } from 'react'
import Imagen from '../../../Reutilizable/Imagen'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/hortalizas.css'
import fondopa from './assets/images/fondo-white.jpg'
import titule from './assets/images/hortaliza/TITULO.png'
import instruc from './assets/images/hortaliza/INSTRUCCIONES.png'
import circle from './assets/images/hortaliza/IMAGEN-CIRCULO.png'

import { menuhortaliza } from './assets/data/dataVerdura'
import h1 from './assets/images/hortaliza/1.png'
import h2 from './assets/images/hortaliza/2.png'
import h3 from './assets/images/hortaliza/3.png'
import h4 from './assets/images/hortaliza/4.png'
import h5 from './assets/images/hortaliza/5.png'
import hf1 from './assets/images/hortaliza/1f.png'
import hf2 from './assets/images/hortaliza/2f.png'
import hf3 from './assets/images/hortaliza/3f.png'
import hf4 from './assets/images/hortaliza/4f.png'
import hf5 from './assets/images/hortaliza/5f.png'
import ht1 from './assets/images/hortaliza/1-texto.png'
import ht2 from './assets/images/hortaliza/2-texto.png'
import ht3 from './assets/images/hortaliza/3-texto.png'
import ht4 from './assets/images/hortaliza/4-texto.png'
import ht5 from './assets/images/hortaliza/5-texto.png'

const HortalizasComestibles = () => {
    const [estado, setEstado] = useState(false)
    const [estadod, setEstadod] = useState(false)
    const [estadot, setEstadot] = useState(false)
    const [estadoc, setEstadoc] = useState(false)
    const [estadoci, setEstadoci] = useState(false)
    
    const paraEdoUno = () => {
        setEstado(true)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(false)
    }
    const paraEdoDos = () => {
        setEstado(false)
        setEstadod(true)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(false)

    }
    const paraEdoTres = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(true)
        setEstadoc(false)
        setEstadoci(false)

    }
    const paraEdoCuatro = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(true)
        setEstadoci(false)

    }
    const paraEdoCinco = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(true)

    }
    return (
        <SlidePage backgroundDesktop={fondopa} rutaPrev='/paciente/verduras/clasificacion' rutaNext='/paciente/verduras/tabla' >
            <div className='hortalizas-verdura__contenedor'>
                <div className='hortalizas-verdura__contenedor-textos'>
                    <Imagen imagenEf={titule} estilo='hortalizas-verdura__titulo' />
                    <Imagen imagenEf={instruc} estilo='hortalizas-verdura__inst' />
                </div>
                <div className='hortalizas-verdura__iconos-text'>
                    <div className='hortalizas-verdura__cont-img'>
                        <div className='circle-pop'>
                            <Imagen imagenEf={circle} estilo='hortalizas-verdura__img-circle' />
                        </div>
                        <div className='hortalizas-verdura__relative'>
                            <div className='hortalizas-verdura__absoluto'>
                                <button
                                    className='hortali__hidden'
                                    onClick={() => { paraEdoUno() }}
                                >
                                    <Imagen imagenEf={estado ? h1 : hf1} estilo={`${estado ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                </button>
                            </div>
                            <div className='hortalizas-verdura__absoluto'>
                                <button
                                    className='hortali__hidden'
                                    onClick={() => { paraEdoDos() }}
                                >
                                    <Imagen imagenEf={estadod ? h2 : hf2} estilo={`${estadod ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                </button>
                            </div>
                            <div className='hortalizas-verdura__absoluto'>
                                <button
                                    className='hortali__hidden'
                                    onClick={() => { paraEdoTres() }}
                                >
                                    <Imagen imagenEf={estadot ? h3 : hf3} estilo={`${estadot ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                </button>
                            </div>
                            <div className='hortalizas-verdura__absoluto'>
                                <button
                                    className='hortali__hidden'
                                    onClick={() => { paraEdoCuatro() }}
                                >
                                    <Imagen imagenEf={estadoc ? h4 : hf4} estilo={`${estadoc ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                </button>
                            </div>
                            <div className='hortalizas-verdura__absoluto'>
                                <button
                                    className='hortali__hidden'
                                    onClick={() => { paraEdoCinco() }}
                                >
                                    <Imagen imagenEf={estadoci ? h5 : hf5} estilo={`${estadoci ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='hortalizas-verdura__center-text'>
                        {
                            estado && (<Imagen imagenEf={ht1} estilo='hort-img-t' />)
                        }
                        {
                            estadod && (<Imagen imagenEf={ht2} estilo='hort-img-t' />)
                        }
                        {
                            estadot && (<Imagen imagenEf={ht3} estilo='hort-img-t' />)
                        }
                        {
                            estadoc && (<Imagen imagenEf={ht4} estilo='hort-img-t' />)
                        }
                        {
                            estadoci && (<Imagen imagenEf={ht5} estilo='hort-img-t' />)
                        }
                    </div>
                </div>
            </div>
        </SlidePage>
    )
}

export default HortalizasComestibles