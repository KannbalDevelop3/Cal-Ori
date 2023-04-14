import React, { useState } from 'react'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import Indice from './Indice'
import './assets/styles/indice.css'
import VideoDefinicion from './VideoDefinicion'
import Procesos from './Procesos'
import ProcesoPdf from './ProcesoPdf'
import ComposicionNutrimiental from './ComposicionNutrimiental'
import Estaciones from '../Estaciones'

const IndiceFrutas = ({ children }) => {
  const [steep, setSteep] = useState(1)
  const siguienteSteep = () => {
    if (steep < 6) {
      setSteep(steep + 1)
    } else if (steep === 5) {
    }
  }
  const anteriorSteep = () => {
    if (steep > 1) {
      setSteep(steep - 1)
    }
  }
  return (
    <>
      <div>
        <div className='step__menu-component'>

        </div>
        <div className='indicee__contenido-principal'>
          {steep > 1 ? (
            <button className='indicee__boton-siguiente' onClick={anteriorSteep}>
              <img src={prevBoton} loading="lazy" />
            </button>
          ) : null}
          <button className='indicee__boton-siguiente' onClick={siguienteSteep} >
            {steep === 6 ? "" : <img src={sigBoton} loading="lazy" />}
          </button>
        </div>
      </div>
    </>
  )
}

export default IndiceFrutas

{/* <div>
        <div className='step__menu-component'>
          {{
            1: <Indice />,
            2: <VideoDefinicion />,
            3: <Procesos />,
            4: <ProcesoPdf />,
            5: <ComposicionNutrimiental />,
            6: <Estaciones />
          }[steep]}
        </div>
        <div className='indicee__contenido-principal'>
          {steep > 1 ? (
            <button className='indicee__boton-siguiente' onClick={anteriorSteep}>
              <img src={prevBoton} loading="lazy" />
            </button>
          ) : null}
          <button className='indicee__boton-siguiente' onClick={siguienteSteep} >
            {steep === 6 ? "" : <img src={sigBoton} loading="lazy" />}
          </button>
        </div>
      </div> */}