import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import { Link } from 'react-router-dom'
import ImageLoading from 'components/Reutilizable/ImageLoading'
import FondoBackground from 'components/Reutilizable/retos/FondoBackground'
import ModalRetro from 'components/Reutilizable/retos/ModalRetro'
import CardMemorama from './CardMemorama'
import { initialPokemons } from './assets/data/dataMemorama'
import fondo from './assets/images/game/FONDO.jpg'
import time from './assets/images/game/time.png'
import title from './assets/images/game/title.png'
import modalretroo from './assets/images/game/retro/MODAL-BIEN-HECHO.png'
import btnCerrar from './assets/images/game/retro/BOTON-SALIR.png'
import { BotonCerrar, BotonLinkGame, BotonResetGame } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import FinishTime from 'components/Reutilizable/retos/FinishTime'
import btnResetGame from '../gral/volver-a-jugar.png'
import btnContinuar from '../gral/continuar.png'
import modalfinishTime from '../gral/modal.png'
import ConfettiGif from 'components/Reutilizable/ConfettiGif';


let colors = [
    '(214, 19, 85, .',
    '(0, 129, 201, .',
    '(252, 226, 42, .',
    '(100, 92, 187, .',
    '(255, 123, 84, .'
]
let maxColor = 0;

const Memorama = ({ setFinishReto }) => {
    const [cards, setCards] = useState([])
    const [firstCard, setFirstCard] = useState({})
    const [secondCard, setSecondCard] = useState({})
    const [unflippedCards, setUnflippedCards] = useState([])
    const [disabledCards, setDisabledCards] = useState([])
    const [modalRetro, setModalRetro] = useState(false)
    const [count, setCount] = useState(0)
    const [tiempoRestante, setTiempoRestante] = useState(180000);
    const [areDisabled, setAreDisabled] = useState(false);
    const [confetti, setConfetti] = useState(false)
    const [acert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/correct.mp3');
    const [noAcert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/incorrect.mp3');
    
    
    useEffect(() => {
        if (count >= 5) {
            setModalRetro(true)
            // timeOut()
        }
        return
    }, [count])
    useEffect(() => {
        const intervalo = setInterval(() => {
            if (tiempoRestante > 0) {
                setTiempoRestante((prev) => prev - 1);
                // play()
            }
            if (tiempoRestante < 0) {
                // timeOut()
            };
        }, 1000);
        return () => clearInterval(intervalo);
    }, [tiempoRestante]);
    const timeOut = () => {
        setAreDisabled(true)
        stop()
    }
    //Cartas aleatorias
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    useEffect(() => {
        shuffleArray(initialPokemons)
        setCards(initialPokemons)
    }, [])
    useEffect(() => {
        checkForMatch()
    }, [secondCard, setCount])
    const flipCard = (pokemon, number) => {
        if (firstCard.pokemon === pokemon && firstCard.number === number) {
            return 0;
            //Estoy volteando la misma carta
        }
        if (!firstCard.pokemon) {
            setFirstCard({ pokemon, number })
        } else if (!secondCard.pokemon) {
            setSecondCard({ pokemon, number })
        }
        return 1;
    }
    const checkForMatch = () => {
        if (firstCard.pokemon && secondCard.pokemon) {
            const match = firstCard.pokemon === secondCard.pokemon
            match ? disableCards() : unflipCards()
        }
    }
    const disableCards = () => {
        //console.log(firstCard.number);
        //console.log(secondCard);
        setDisabledCards([firstCard.number, secondCard.number]);
        estadoConfetti();
        resetCards();
        acert();
        paintBorder(firstCard.number, secondCard.number);
        setCount((count) => count + 1);
        setTimeout(() => {
            clearConfetti();
        }, 4000);
    };
    //se modifica el css de las tarjetas cuando están correctas
    const paintBorder = (primera, segunda) => {
        const tarjetas = document.querySelectorAll('.cardReto');
        tarjetas[primera].style.cssText = `border: rgba${colors[maxColor]}7) 5px solid; border-radius: 13%`;
        tarjetas[segunda].style.cssText = `border: rgba${colors[maxColor]}7) 5px solid; border-radius: 13%`;
        maxColor++;
    }
    const unflipCards = () => {
        setAreDisabled(true)
        setTimeout(function () {
            setUnflippedCards([firstCard.number, secondCard.number])
            setAreDisabled(false)
        }, 3000)
        // setUnflippedCards([firstCard.number, secondCard.number])
        resetCards()
        noAcert()
    };
    const resetCards = () => {
        setFirstCard({})
        setSecondCard({})
    }
    const cerrarModal = () => {
        setModalRetro(false)
        setFinishReto(3)
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
    return (
        <FondoBackground backgroundDesktop={fondo}>
            {confetti && <ConfettiGif />}
            <div className="memorama__contenido">
                <div className='contenido__time'>
                    <p className='tiempo-memorama'>{tiempoRestante}</p>
                    <img src={time} />
                </div>
                <div className='contenido__title-memorama'>
                    <img src={title} />
                </div>
                <div className='flex-memorama'>
                    <div className={areDisabled? 'contenido__cards-memorama noneEvents': 'contenido__cards-memorama'} >
                        {cards.map((card, index, id) => (
                            <CardMemorama key={card.id} src={card.src} pokemon={card.pokemon} number={index} flipCard={flipCard} disabledCards={disabledCards} unflippedCards={unflippedCards} setCount={setCount} />
                        ))}
                    </div>
                </div>
                <div>4</div>
            </div>
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
                            onClick={() => {
                                setTiempoRestante(tiempoRestante);
                                setAreDisabled(false);
                                window.location.href = "/profesionales/frutas/reto-dos";
                                setCount(0)
                                setModalRetro(false)
                            }}
                            marginTopResetGame='5rem'
                            leftResetGame='7rem'
                        >
                            <img src={btnResetGame} alt="" />
                        </BotonResetGame>
                    </div>
                    <div>
                        <BotonLinkGame leftLinkGame='5rem' marginTopLinkGame='5rem' >
                            <Link to='/profesionales/frutas/estacion' className='reset-link' ><img src={btnContinuar} alt="" /></Link>
                        </BotonLinkGame>
                    </div>
                </FinishTime>
            }
        </FondoBackground>
    )
}

export default Memorama