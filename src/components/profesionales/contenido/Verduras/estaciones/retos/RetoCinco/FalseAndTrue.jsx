import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import ImageLoading from 'components/Reutilizable/ImageLoading';
import { BotonCerrar, BotonLinkGame, BotonResetGame, ContenidoCronometro, ContenidoQuiz, ContenidoReto } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import FondoReto from 'components/Reutilizable/retos/FondoReto';
import fondo from './assets/images/game/FONDO.jpg'
import cronometro from './assets/images/game/TIEMPO.png'
import './assets/css/styles.css'
import { questions } from './assets/data/dataReto'
import ModalRetro from 'components/Reutilizable/retos/ModalRetro';
import btnCerrar from './assets/images/game/cerrar.png'
import FinishTime from 'components/Reutilizable/retos/FinishTime';
import { Link } from 'react-router-dom';
import modalfinishTime from '../gral/modal.png'
import btnResetGame from '../gral/volver-a-jugar.png'
import btnContinuar from '../gral/continuar.png'
import ConfettiGif from 'components/Reutilizable/ConfettiGif';
const FalseAndTrue = ({ setFinishReto }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCircle, setIsCircle] = useState(true);
  const [isCircleO, setIsCircleO] = useState(true);
  const [modalCorrecto, setModalCorrecto] = useState(false)
  const [modalCorrectoIncorrect, setModalCorrectoIncorrect] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const [areDisabled, setAreDisabled] = useState(false);
  const [noDrop, setNoDrop] = useState("")
  const [confetti, setConfetti] = useState(false)
  const [acert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/correct.mp3');
  const [noAcert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/incorrect.mp3');
  // const [play, { stop }] = useSound(
  //   'https://bucket-kannbal-ac.s3.amazonaws.com/reloj.mp3',
  //   { volume: 1 }
  // );
  const handleAnswerOptionClick = (isCorrect, e) => {
    e.target.classList.add(isCorrect ? "reto__answer" : "reto__answer")
    if (isCorrect === true) {
      acert();
      setIsCircleO(false)
      setModalCorrecto(true)
      setTiempoRestante(tiempoRestante);
      estadoConfetti()
      setTimeout(() => {
        clearConfetti()
      }, 4000);
    } else {
      noAcert()
      setIsCircle(false)
      setModalCorrectoIncorrect(true)
      setTiempoRestante(tiempoRestante);
    }
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      setIsCircle(true)
      setIsCircleO(true)
    } else {
    }
  }
  const cerrarModal = () => {
    if (currentQuestion >= 4) {
      setFinishReto(3)
      // stop()
    }
    setModalCorrecto(false)
    setModalCorrectoIncorrect(false)
    setCurrentQuestion(currentQuestion + 1);
    setNoDrop("")
    setIsCircle(true)
    setIsCircleO(true)
  }
  const estadoConfetti = () => {
    setConfetti(true)
  }
  const clearConfetti = () => {
    setConfetti(false)
  }
  useEffect(() => {
    setConfetti(confetti)
  }, [confetti])
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

  return (
    <>
      <FondoReto backgroundDesktop={fondo}>
        {confetti && <ConfettiGif />}
        <ContenidoReto>
          <ContenidoCronometro>
            <img src={cronometro} className='reto__cronometro' />
            <p className='reto__time-rest'>{tiempoRestante}</p>
          </ContenidoCronometro>
          <ContenidoQuiz>
            <div>
              <ImageLoading className='reto__fruit' src={questions[currentQuestion].fruit} />
            </div>
            <div>
              <ImageLoading src={questions[currentQuestion].question} className='reto__question mb' />
              {questions[currentQuestion].answers.map(
                (answerOption) => {
                  return (
                    <div className='d-flex' key={answerOption.answerText}>
                      <div>
                        {
                          isCircleO ? '' :
                            <span className='reto__answer-acert'>
                              <ImageLoading width='50px' src={answerOption.acert} />
                            </span>
                        }
                        {
                          isCircle ? '' :
                            <span className='reto__answer-acert'>
                              <ImageLoading width='50px' src={answerOption.noAcert} />
                            </span>
                        }
                      </div>
                      <button
                        key={answerOption.id}
                        className='reto__button-answer'
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
          </ContenidoQuiz>
        </ContenidoReto>
        <ModalRetro
          estado={modalCorrecto}
          cambiarEstado={setModalCorrecto}
          mostrarOverlay={true}
        >
          <ImageLoading src={questions[currentQuestion].retroBien} className='reto__modal-retro' />
          <BotonCerrar onClick={cerrarModal}>
            <ImageLoading src={btnCerrar} />
          </BotonCerrar>
        </ModalRetro>
        <ModalRetro
          estado={modalCorrectoIncorrect}
          cambiarEstado={setModalCorrectoIncorrect}
          mostrarOverlay={true}
        >
          <ImageLoading src={questions[currentQuestion].retroMal} className='reto__modal-retro' />
          <BotonCerrar onClick={cerrarModal}>
            <ImageLoading src={btnCerrar} />
          </BotonCerrar>
        </ModalRetro>
        {
          tiempoRestante < 1 &&
          <FinishTime mostrarOverlay={true} backgroundDesktop={modalfinishTime}>
            <div>
              <BotonResetGame
                marginTopResetGame='10rem'
                leftResetGame='7rem'
                onClick={() => {
                  setTiempoRestante(tiempoRestante);
                  setAreDisabled(false);
                  if (currentQuestion === questions.length - 1) {
                    setIsFinished(true);
                  } else {
                    setCurrentQuestion(0);
                    setTiempoRestante(60)
                    setModalCorrecto(false)
                    setModalCorrectoIncorrect(false)
                    window.location.href = "/profesionales/verduras/reto-cinco";
                  }
                }}
              >
                <img src={btnResetGame} alt="" />
              </BotonResetGame>
            </div>
            <div>
              <BotonLinkGame marginTopLinkGame='10rem'>
                <Link to='/profesionales/verduras/estacion' className='reset-link' ><img src={btnContinuar} alt="" /></Link>
              </BotonLinkGame>
            </div>
          </FinishTime>
        }
      </FondoReto>
    </>
  )
}

export default FalseAndTrue
