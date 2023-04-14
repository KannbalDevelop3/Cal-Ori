import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import useSound from 'use-sound';
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import { BotonCerrar, BotonLinkGame, BotonResetGame, ContenidoCronometro, ContenidoQuiz, ContenidoReto } from '../../../../../../Reutilizable/retos/EstilosFalseAndTrue'
import FondoReto from '../../../../../../Reutilizable/retos/FondoReto'
import fondo from './assets/images/game/FONDO.jpg'
import cronometro from './assets/images/game/TIEMPO.png'
import './assets/css/styles-reto-cuatro.css'
import { questions } from './assets/data/dataRetoCuatro'
import ModalRetro from '../../../../../../Reutilizable/retos/ModalRetro'
import btnCerrar from './assets/images/game/BOTON-SALIR.png'
import FinishTime from '../../../../../../Reutilizable/retos/FinishTime';
import modalfinishTime from '../gral/modal.png'
import btnResetGame from '../gral/volver-a-jugar.png'
import btnContinuar from '../gral/continuar.png'
import { Link } from 'react-router-dom';
import reloj from './assets/aud/reloj.mp3'
import ConfettiGif from 'components/Reutilizable/ConfettiGif';

const FalseAndTrue = ({ setFinishReto }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCircle, setIsCircle] = useState(true);
  const [isCircleO, setIsCircleO] = useState(true);
  const [modalCorrecto, setModalCorrecto] = useState(false)
  const [modalIncorrect, setModalIncorrect] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const [areDisabled, setAreDisabled] = useState(false);
  const [noDrop, setNoDrop] = useState("")
  const [acert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/correct.mp3');
  const [noAcert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/incorrect.mp3');
  const [confetti, setConfetti] = useState(false);


  const handleAnswerOptionClick = (isCorrect, e) => {
    e.target.classList.add(isCorrect ? "reto__cuatro__answer" : "reto__cuatro__answer")
    if (isCorrect === true) {
      acert();
      estadoConfetti();
      setTimeout(() => {
        clearConfetti()
      }, 4000);
      setIsCircleO(false)
      setModalCorrecto(true)
      setTiempoRestante(tiempoRestante);
    } else {
      noAcert()
      setIsCircle(false)
      setModalIncorrect(true)
      setTiempoRestante(tiempoRestante);
    }
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      setIsCircle(true)
      setIsCircleO(true)
    }
  }

  const cerrarModal = () => {
    if (currentQuestion >= 6) {
      setFinishReto(6)
      // stop()
    }
    setModalCorrecto(false)
    setModalIncorrect(false)
    setCurrentQuestion(currentQuestion + 1);
    setNoDrop("")
    setIsCircle(true)
    setIsCircleO(true)
  }
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante((prev) => prev - 1);
        // play()
      }
      if (tiempoRestante === 0) {
        setAreDisabled(true);
        // stop()
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  const estadoConfetti = () => {
    setConfetti(true)
  }
  const clearConfetti = () => {
    setConfetti(false)
  }
  useEffect(() => {
    setConfetti(confetti)
  }, [confetti]);

  return (
    <>
      <FondoReto backgroundDesktop={fondo}>
        {confetti && <ConfettiGif />}
        <ContenidoReto>
          <ContenidoCronometro>
            <img src={cronometro} className='reto__cuatro__cronometro' />
            <p className='reto__cuatro__time-rest'>{tiempoRestante}</p>
          </ContenidoCronometro>
          <ContenidoQuiz>
            <div>
              <ImageLoading className='reto__cuatro__fruit' src={questions[currentQuestion].fruit} />
            </div>
            <div className='max-w-6'>
              <ImageLoading src={questions[currentQuestion].question} className='reto__cuatro__question mb__cuatro' />
              <ImageLoading src={questions[currentQuestion].answer} className='reto__cuatro__answers mb__cuatro' />
              <div className='d-flex__cuatro'>
                {questions[currentQuestion].trueFalse.map(
                  (answerOption) => {
                    return (
                      <div className='d-flex__cuatro' key={answerOption.answerText}>
                        <div>
                          {
                            isCircleO ? '' :
                              <span className='reto__cuatro__answer-acert'>
                                <ImageLoading width='25px' src={answerOption.acert} />
                              </span>
                          }
                          {
                            isCircle ? '' :
                              <span className='reto__cuatro__answer-acert'>
                                <ImageLoading width='25px' src={answerOption.noAcert} />
                              </span>
                          }
                        </div>
                        <button
                          key={answerOption.id}
                          className='reto__cuatro__button-answer'
                          disabled={areDisabled}
                          onClick={(e) =>
                            handleAnswerOptionClick(answerOption.isCorrect, e)
                          }
                        >
                          <ImageLoading src={answerOption.answerText} className={`${noDrop}`} />
                        </button>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </ContenidoQuiz>
        </ContenidoReto>
        <ModalRetro
          estado={modalCorrecto}
          cambiarEstado={setModalCorrecto}
          mostrarOverlay={true}
        >
          <ImageLoading src={questions[currentQuestion].retroBien} className='reto__cuatro__modal-retro' />
          <BotonCerrar onClick={cerrarModal}>
            <ImageLoading src={btnCerrar} />
          </BotonCerrar>
        </ModalRetro>
        <ModalRetro
          estado={modalIncorrect}
          cambiarEstado={setModalIncorrect}
          mostrarOverlay={true}
        >
          <ImageLoading src={questions[currentQuestion].retroMal} className='reto__cuatro__modal-retro' />
          <BotonCerrar onClick={cerrarModal}>
            <ImageLoading src={btnCerrar} />
          </BotonCerrar>
        </ModalRetro>
        {
          tiempoRestante < 1 &&
          <FinishTime mostrarOverlay={true} backgroundDesktop={modalfinishTime}>
            <div>
              <BotonResetGame
                onClick={() => {
                  setTiempoRestante(tiempoRestante);
                  setAreDisabled(false);
                  if (currentQuestion === questions.length - 1) {
                    setIsFinished(true);
                  } else {
                    setCurrentQuestion(0);
                    setTiempoRestante(60)
                    setModalCorrecto(false)
                    setModalIncorrect(false)
                    window.location.href = "/paciente/verduras/reto-cuatro";
                  }
                }}
                marginTopResetGame='10rem'
                leftResetGame='7rem'
              >
                <img src={btnResetGame} alt="" />
              </BotonResetGame>
            </div>
            <div>
              <BotonLinkGame marginTopLinkGame='10rem'>
                <Link to='/paciente/verduras/composicion-nutrimental-de-verduras' className='reset-link' ><img src={btnContinuar} alt="" /></Link>
              </BotonLinkGame>
            </div>
          </FinishTime>
        }
      </FondoReto>
    </>
  )


}

export default FalseAndTrue