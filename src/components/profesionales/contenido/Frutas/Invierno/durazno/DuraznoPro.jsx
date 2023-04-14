import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { diasFrutas } from "../assets/data/dataFrutas";
import flecha from '../assets/images/flecha-regresar.png'
import informacion from '../assets/images/info.png'
import './css/durazno.css'
import modaluno from './images/modal-1.png'
import modaldos from './images/modal-2.png'
import modaltres from './images/modal-3.png'
import modalfondo from './images/Modal_durazno.png'
import fondoOverlay from '../assets/images/Fondo_modal.png'
import prev from './images/boton_durazno_anterior.png'
import next from './images/boton_durazno_siguiente.png'
import ModalCarousel from "../../../../../Reutilizable/ModalCarousel";
import DuraznoIndex from "./DuraznoIndex";
import Slider from "../../../../../Reutilizable/Slider/Slider";
import { ButtonRef } from "components/Reutilizable/BotonReferencia";
import ModalReferencias from "components/Reutilizable/ModalReferencias";
import TextBibliografia from "components/Reutilizable/TextoReferencia";
import HorizontalPage from "components/Reutilizable/HorizontalPage";

const DuraznoPro = (e) => {
    const [estado, setEstado] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(2);
    const [contador, setContador] = useState(0)
    const carousel = useRef(null);
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const handleModal = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 600)
    }
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
        { id: 3, valor: 1, image: modaltres },
    ]
    const cerrarModal = () => {
        setEstado(false)
        setContador(0)
    }
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
            } else if (contador === 2) {
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
                        <Link className='frutas__link' to='/profesionales/frutas/estacion/invierno'>
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
            </HorizontalPage>
            <ModalCarousel estado={estado} cambiarEstado={cerrarModal} mostrarFondo={fondoOverlay} padding='10' >
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
                <ButtonRef
                    onClick={handleModal}
                    bottom='3.3rem' left='none' margin='none' right='8%'
                    bottomA='8rem' rightA='19%' leftA='none' marginA='0'
                    bottomB='15rem' rightB='20%' leftB='none' marginB='0'
                    bottomC='23rem' rightC='27%' leftC='none' marginC='0'
                />
                {modal && <ModalReferencias setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    mostrarOverlay={true}
                >
                    <TextBibliografia>
                        1. Aguayo Rojas, J. et al. (2022) “Fitoquímicos y propiedades nutraceúticas de Durazno (prunus persica L.) cultivado en Zacatecas,” Polibotánica [Preprint], (53). Available at:&nbsp;
                        <a href="https://doi.org/10.18387/polibotanica.53.10" target="_blank"> https://doi.org/10.18387/polibotanica.53.10</a>.
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    );
}

export default DuraznoPro

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
    width: 356px;
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