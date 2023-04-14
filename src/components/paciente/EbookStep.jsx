import React, { useState, useEffect, } from 'react'
import Fin from './contenido/Fin'
import Inicio from './contenido/Inicio'
import Introduccion from './contenido/Introduccion'
import OpcionFrutasVerduras from './contenido/OpcionFrutasoVerduras'
import IndiceFrutas from './contenido/Frutas/IndiceFrutas'
import MenuEstacion from './contenido/MenuEstacion'
import MenuFrutas from './contenido/MenuFrutas'
import './assets/css/style.css'
import siguiente from './contenido/assets/images/continuar.png'
import sigBoton from './contenido/assets/images/f-der.png'
import prevBoton from './contenido/assets/images/f-izq.png'
import { Link, useNavigate } from 'react-router-dom'
const EbookStep = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    inicio: '',
  })
  const navigate = useNavigate();
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else if (step === 3) {
    }
  }
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const gotoHome = () => {
    navigate('/home')
  }
  console.log(step);
  return (
    <>
      {{
        1: <Inicio />,
        2: <Introduccion />,
        // 3: <OpcionFrutasVerduras />,
        3: <MenuEstacion />,
        4: <MenuFrutas />,
        5: <Fin />
      }[step]}
      <div className='ebook__contenido-principal'>
        {step === 1 ? (
          <button className='ebook__boton-siguiente-flecha' onClick={() => gotoHome()}>
            <img src={prevBoton} loading="lazy" className='' />
          </button>
        ) : <div></div>}
        {
          step === 1 ?
            (
              <>
                <button className='ebook__boton-siguiente' onClick={nextStep} >
                  {<img src={siguiente} loading="lazy" className='' />}
                </button>
              </>
            )
            :
            (
              <button className='ebook__boton-siguiente' onClick={nextStep} >
                {<Link to='/paciente/menu-fruta-o-verdura' ><img src={siguiente} loading="lazy" /></Link>}
              </button>
            )
        }
      </div>
    </>
  )
}

export default EbookStep
