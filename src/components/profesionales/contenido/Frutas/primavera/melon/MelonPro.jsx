import React, { useEffect, useRef, useState } from 'react'
import ContenedorFV from '../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../Reutilizable/Slider/Slider';
import fondo from '../melon/assets/images/FONDO.jpg'
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../Reutilizable/ModalCarousel'
import fondoOverlay from '../assets/images/FONDOO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'
import { datamelon } from './MelonDias';
import MelonIndex from './MelonIndex';
import { ButtonRef } from 'components/Reutilizable/BotonReferencia';
import ModalReferencias from 'components/Reutilizable/ModalReferencias';
import TextBibliografia from 'components/Reutilizable/TextoReferencia';

const MelonPro = () => {
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

    useEffect(() => {
        setContador(contador)
    }, [contador])

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

    if (!datamelon || !datamelon.length) return null;

    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  >
                <MelonIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#3d5d2e' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10' top='10%' >
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {datamelon.map((item) => {
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
                        1. Gómez-García R, Campos DA, Oliveira A, Aguilar CN, Madureira AR, Pintado M. A chemical valorisation of melon peels towards functional food ingredients: Bioactives profile and antioxidant properties. Food Chemistry. 2021;335:127579.
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    )
}

export default MelonPro

