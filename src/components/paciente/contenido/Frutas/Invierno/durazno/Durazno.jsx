import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { diasFrutas } from "../assets/data/dataFrutas";
import flecha from '../assets/images/flecha-regresar.png'
import informacion from '../assets/images/info.png'
import './css/durazno.css'
import modaluno from './images/modal-1.png'
import modaldos from './images/modal-2.png'
import modalfondo from './images/Modal_durazno.png'
import fondoOverlay from '../assets/images/Fondo_modal.png'
import prev from './images/boton_durazno_anterior.png'
import next from './images/boton_durazno_siguiente.png'
import ModalCarousel from "../../../../../Reutilizable/ModalCarousel";
import DuraznoIndex from "./DuraznoIndex";
import Slider from "../../../../../Reutilizable/Slider/Slider";
import HorizontalPage from "components/Reutilizable/HorizontalPage";

const Durazno = (e) => {
    const [estado, setEstado] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(2);
    const [contador, setContador] = useState(0)
    const carousel = useRef(null);
    const _handleIndexChange = (index) => {
        setCurrentIndex(index);
    };

    const _handleNext = (currentIndex) => {
        // setCurrentIndex(currentIndex + 1);
    };

    const _handleComplete = () => {
        console.log('Hola');
    };

    const datam = [
        { id: 1, valor: 1, image: modaluno },
        { id: 2, valor: 1, image: modaldos },
    ]
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        setContador(contador - 1);
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        setContador(contador + 1);
    };

    useEffect(() => {
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');

        if (prevBtn && nextBtn) {
            if (contador === 0) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'block';
            } else if (contador === 1) {
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
            }
        }
    }, [contador, datam.length]);

    if (!datam || !datam.length) return null;
    return (
        <>
            <HorizontalPage>
                <div className="fondo__durazno">
                    <div className="durazno__absolute-1 fade-in-image">
                        <Link className='frutas__link' to='/paciente/frutas/estacion/invierno'>
                            <img src={flecha} loading="lazy" />
                        </Link>
                    </div>
                    <div className="durazno__absolute-2 fade-in-image">
                        <img src={informacion} onClick={() => setEstado(!estado)} loading="lazy" />
                    </div>
                    <div className="durazno__seccion-centrar">
                        <div className="fade-in-image">
                            <DuraznoIndex
                                currentIndex={currentIndex}
                                handleNext={_handleNext}
                                handleComplete={_handleComplete}
                            />
                        </div>
                    </div>
                    <div className="durazno__botones-filter">
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </div>
                </div>
                <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10' >
                    <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                        <CaroselContenido ref={carousel}>
                            {datam.map((item) => {
                                const { id, image } = item;
                                return (
                                    <CaroselItem key={id} backgroundCarousel={image} loading="lazy" >
                                    </CaroselItem>
                                );
                            })}
                        </CaroselContenido>
                        <CaroselButtonsContainer className="buttons">
                            <CaroselButtons onClick={handleLeftClick} id="prevBtn" style={{ display: contador === 0 ? 'none' : 'block' }}   >
                                <img src={prev} loading="lazy" />
                            </CaroselButtons>
                            <CaroselButtons id="nextBtn" onClick={handleRightClick} style={{ display: contador === datam.length - 1 ? 'none' : 'block' }}>
                                <img src={next} loading="lazy" />
                            </CaroselButtons>
                        </CaroselButtonsContainer>
                    </CaroselFlex>
                </ModalCarousel>
            </HorizontalPage>
        </>
    );
}

export default Durazno

const CaroselFlex = styled.div`
    display:grid;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => (props.backgrounddModal ? props.backgrounddModal : "#ffffff")});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
const CaroselContenido = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 356px;
    height: 360px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: 312px) and (max-width: 926px) {
        width: 210px;
        height: 320px; 
    }
    /* @media only screen and (min-device-width: 375px) and (max-device-width: 872px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
      width: 250px;
      height: 300px;
    } */
`;

const CaroselItem = styled.div`
    background-image: url(${(props) => (props.backgroundCarousel ? props.backgroundCarousel : "#ffffff")});
    width: 347px;
    height: 360px;
    flex: none;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media only screen and (min-width: 312px) and (max-width: 926px) {
        width: 210px;
        height: 320px; 
    }
    /* @media only screen and (min-device-width: 375px) and (max-device-width: 872px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
      width: 250px;
      height: 300px;
    } */
`;

const CaroselButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CaroselButtons = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  border: none;
  background: none;
  img{
    width: 25px;
    height: auto;
    border-radius: 25px;
    cursor: pointer;
    position: relative;
  }
    @media only screen and (min-width: 312px) and (max-width: 926px) {
        img{
            position: relative;
            bottom: 4rem; 
        }
    }
`;