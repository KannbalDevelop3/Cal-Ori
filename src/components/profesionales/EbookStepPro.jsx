import React, { useState, useEffect, } from 'react'
import './assets/css/style.css'
import siguiente from './contenido/assets/images/continuar.png'
import sigBoton from './contenido/assets/images/f-der.png'
import prevBoton from './contenido/assets/images/f-izq.png'
import { Link, useNavigate } from 'react-router-dom'
import InicioPro from './contenido/InicioPro'
import IntroduccionPro from './contenido/IntroduccionPro'
import MenuEstacionPro from './contenido/MenuEstacionPro'
import MenuFrutasPro from './contenido/MenuFrutasPro'
import FinPro from './contenido/FinPro'
const EbookStepPro = () => {
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
  return (
    <>
      {{
        1: <InicioPro />,
        2: <IntroduccionPro />,
        3: <MenuEstacionPro />,
        4: <MenuFrutasPro />,
        5: <FinPro />
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
              <button className='ebook__boton-siguiente' onClick={nextStep} >
                {  <img src={siguiente} loading="lazy" className='' /> }
              </button>
            )
            :
            (
              <button className='ebook__boton-siguiente' onClick={nextStep} >
                {<Link to='/profesionales/menu-fruta-o-verdura' ><img src={siguiente} loading="lazy" /></Link>}
              </button>
            )
        }
      </div>
    </>
  )
}

export default EbookStepPro
