import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";
import ContenedorFV from '../../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../../Reutilizable/Slider/Slider';
import fondo from '../zanahoria/assets/images/FONDO.jpg'
import ZanahoriaIndex from './ZanahoriaIndex';
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../../Reutilizable/ModalCarousel'
import { datam } from './Dias'
import fondoOverlay from '../assets/images/FONDO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'

const Zanahoria = () => {
    const [estado, setEstado] = useState(true)
    const [contador, setContador] = useState(false)
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ruta = '/paciente/verduras/estacion/invierno'
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

    if (!datam || !datam.length) return null;
    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  widthLink='100%' widthInfo='100%' >
                <ZanahoriaIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#b86141' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10' top='10%' >
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
                                <ImageLoading width='100%' src={prev} />
                            </CaroselButtons>
                            :
                            <CaroselButtons onClick={handleRightClick}>
                                <ImageLoading width='100%' src={next} />
                            </CaroselButtons>
                        }
                    </CaroselButtonsContainer>
                </CaroselFlex>
            </ModalCarousel>
        </>
    )
}

export default Zanahoria

