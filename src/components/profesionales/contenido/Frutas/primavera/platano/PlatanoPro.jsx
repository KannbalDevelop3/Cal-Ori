import React, { useEffect, useRef, useState } from 'react'
import ContenedorFV from '../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../Reutilizable/Slider/Slider';
import fondo from '../platano/assets/images/FONDO.jpg'
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../Reutilizable/ModalCarousel'
import fondoOverlay from '../assets/images/FONDOO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'
import { dataplatano } from './PlatanoDias';
import PlatanoIndex from './PlatanoIndex';
import { ButtonRef } from 'components/Reutilizable/BotonReferencia';
import ModalReferencias from 'components/Reutilizable/ModalReferencias';
import TextBibliografia from 'components/Reutilizable/TextoReferencia';

const PlatanoPro = () => {
    const [estado, setEstado] = useState(true)
    const [contador, setContador] = useState(false)
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const handleModal = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 600)
    }
    const ruta = '/profesionales/frutas/estacion/primavera'
    const _handleIndexChange = (index) => {
        setCurrentIndex(index);
    };
    const _handleNext = (currentIndex) => {
        setCurrentIndex(currentIndex + 1);
    };
    const _handleComplete = () => {
    };
    const abrirModal = () => {
        setEstado(true)
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        setContador(false)
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        setContador(true);
    };

    if (!dataplatano || !dataplatano.length) return null;
    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  >
                <PlatanoIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#a6953e' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10' top='10%' >
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {dataplatano.map((item) => {
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
                                <ImageLoading width='100%' src={prev} />
                            </CaroselButtons>
                            :
                            <CaroselButtons onClick={handleRightClick}>
                                <ImageLoading width='100%' src={next} />
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
                        1. Blasco LG, Gómez MFJ. Propiedades funcionales del plátano (Musa sp). Rev Med UV. 2014;14(2):22-26.
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    )
}

export default PlatanoPro

