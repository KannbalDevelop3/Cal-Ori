import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import { Link } from 'react-router-dom'
import "./assets/css/reto-seis.css";

import { columnA, columnB } from "./assets/data/ItemTypes";
import ImageLoading from 'components/Reutilizable/ImageLoading'

import MatchColumnsQuestion from "./MatchColumsQuestion";
import ModalRetro from 'components/Reutilizable/retos/ModalRetro'

import time from './assets/images/game/time.png'
import modalretroo from './assets/images/game/retro/MODAL-BIEN-HECHO.png'
import btnCerrar from './assets/images/game/retro/BOTON-SALIR.png'
import { BotonCerrar, BotonLinkGame, BotonResetGame } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import FinishTime from 'components/Reutilizable/retos/FinishTime'
import btnResetGame from '../gral/volver-a-jugar.png'
import btnContinuar from '../gral/continuar.png'
import modalfinishTime from '../gral/modal.png'



const MatchColumns = ({ setFinishReto }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [count, setCount] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(100);
  const [modalRetro, setModalRetro] = useState(false)
  // const [play, { stop }] = useSound(
  //     'https://bucket-kannbal-ac.s3.amazonaws.com/reloj.mp3',
  //     { volume: 1 }
  // );
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante((prev) => prev - 1);
        // play()
      }
      if (tiempoRestante < 0) {
        setAreDisabled(true)
        // stop()
      };
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);
  useEffect(() => {
    if (correctAnswers >= 5) {
      setModalRetro(true)
    }
    return
  }, [correctAnswers]);

  const cerrarModal = () => {
    setModalRetro(false)
    setFinishReto(3)
  }


  return (

    <div className="reto-seis__contenedor">
      <div className="reloj">
        <p className='temporizador'>{tiempoRestante}</p>
        <img className="" src={time} />
      </div>
      <div className="columnas">
        <div className="columna-uno">
          {columnA.map(({ answer, continues }, index) => {
            return (
              <div className="renglon-pregunta">
                <p id={`question-${index}`} className={`pregunta-primero-pro`}>{answer}</p>
                <h1
                  className="pregunta-segundo-pro"
                  key={`answer${index}`}
                >
                  {continues}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="columna-dos">
          {columnB.map(({ answer, question, color }, index) => {
            return (
              <MatchColumnsQuestion
                answer={answer}
                question={question}
                questionId={`question${index}`}
                key={`answer${index}`}
                correctAnswers={correctAnswers}
                setCorrectAnswers={setCorrectAnswers}
                colorInput={color}
              />
            );

          })}
          <ModalRetro
            estado={modalRetro}
            cambiarEstado={setModalRetro}
            mostrarOverlay={true}
          >
            <ImageLoading src={modalretroo} className='reto__modal-retro' />
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
                    window.location.href = "/profesionales/verduras/reto-seis";
                    setCount(0)
                    setModalRetro(false)
                  }}
                >
                  <img src={btnResetGame} alt="" />
                </BotonResetGame>
              </div>
              <div>
                <BotonLinkGame marginTopLinkGame='10rem'>
                  <Link to='/profesionales/verduras/conclusiones' className='reset-link' ><img src={btnContinuar} alt="" /></Link>
                </BotonLinkGame>
              </div>
            </FinishTime>
          }
        </div>
      </div>
    </div>
  );
};

export default MatchColumns;