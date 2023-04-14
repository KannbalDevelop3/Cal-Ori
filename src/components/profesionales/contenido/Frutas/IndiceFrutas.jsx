import React, { useState } from 'react'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import Indice from './IndicePro'
import './assets/styles/indice.css'
import VideoDefinicion from './VideoDefinicionPro'
import Procesos from './ProcesosPro'
import ProcesoPdf from './ProcesoPdfPro'
import ComposicionNutrimiental from './ComposicionNutrimientalPro'
import Estaciones from '../EstacionesPro'

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
