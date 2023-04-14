import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ModalCarousel from "../../../../../Reutilizable/ModalCarousel";
import { Link } from 'react-router-dom'
import flecha from '../assets/images/flecha-regresar.png'
import informacion from '../assets/images/info.png'
import modaluno from './images/modal-1.png'
import modaldos from './images/modal-2.png'
import modalfondo from './images/Modal_TEJOCOTE.png'
import fondoOverlay from '../assets/images/Fondo_modal.png'
import prev from './images/boton_tejocote_anterior.png'
import next from './images/boton_tejocote_siguiente.png'
import './css/tejocote.css'
import Slider from "../../../../../Reutilizable/Slider/Slider";
import TecojoteIndex from "./TejocoteIndex";
import { ButtonRef } from "components/Reutilizable/BotonReferencia";
import ModalReferencias from "components/Reutilizable/ModalReferencias";
import TextBibliografia from "components/Reutilizable/TextoReferencia";
import HorizontalPage from "components/Reutilizable/HorizontalPage";

const TejocotePro = (e) => {
    const [contador, setContador] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [estado, setEstado] = useState(true)
    const carousel = useRef(null);
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const handleModal = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 600)
    }

    useEffect(() => {
        setContador(contador)
    }, [contador])

    const _handleIndexChange = (index) => {
        setCurrentIndex(index);
    };

    const _handleNext = (currentIndex) => {
        setCurrentIndex(currentIndex + 1);
    };

    const _handleComplete = () => {
    };

    const datam = [
        { id: 1, image: modaluno },
        { id: 2, image: modaldos }
    ]

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        setContador(false)
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        setContador(true)
    };

    if (!datam || !datam.length) return null;
    return (
        <>
            <HorizontalPage>
                <div className="fondo__tejocote">
                    <div className="tejocote__absolute-1 fade-in-image">
                        <Link className='frutas__link' to='/profesionales/frutas/estacion/invierno'>
                            <img src={flecha} loading="lazy" />
                        </Link>
                    </div>
                    <div className="tejocote__absolute-2 fade-in-image">
                        <img src={informacion} onClick={() => setEstado(!estado)} loading="lazy" />
                    </div>
                    <div className="tejocote__seccion-centrar">
                        <div className="fade-in-image">
                            <TecojoteIndex
                                currentIndex={currentIndex}
                                handleNext={_handleNext}
                                handleComplete={_handleComplete}
                            />
                        </div>
                    </div>
                    <div className="tejocote__botones-filter">
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </div>
                </div>
            </HorizontalPage>
            <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10'>
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {datam.map((item) => {
                            const { id, image } = item;
                            return (
                                <CaroselItem key={id} backgroundCarousel={image} >
                                </CaroselItem>
                            );
                        })}
                    </CaroselContenido>
                    <CaroselButtonsContainer className="buttons">
                        {contador === true ?
                            <CaroselButtons onClick={handleLeftClick}>
                                <img src={prev} loading="lazy" />
                            </CaroselButtons>
                            :
                            <CaroselButtons onClick={handleRightClick}>
                                <img src={next} loading="lazy" />
                            </CaroselButtons>
                        }
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
                        1. Cervantes-Paz Braulio, Ornelas-Paz José de J., Gardea-Béjar Alfonso A., Yahia Elhadi M., Rios-Velasco Claudio, Zamudio-Flores Paul B. et al . Compuestos fenólicos de tejocote (Crataegus spp.): su actividad biológica asociada a la protección de la salud humana. Rev. fitotec. mex [revista en la Internet]. 2018 Sep [citado 2023 Feb 21] ; 41( 3 ): 339-349. Disponible en:
                        <a href="http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0187-73802018000300339&lng=es" target="_blank">&nbsp;http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0187-73802018000300339&lng=es.</a>
                        &nbsp;Epub 30-Sep-2020. <a href="https://doi.org/10.35196/rfm.2018.3.339-349" target="_blank"> https://doi.org/10.35196/rfm.2018.3.339-349.</a>
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    );
}

export default TejocotePro

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
  }
  @media only screen and (min-width: 312px) and (max-width: 926px) {
        img{
            position: relative;
            bottom: 4rem; 
        }
    }
`;