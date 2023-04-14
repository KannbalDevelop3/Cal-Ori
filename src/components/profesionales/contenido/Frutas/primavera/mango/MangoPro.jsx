import React, { useEffect, useRef, useState } from 'react'
import ContenedorFV from '../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../Reutilizable/Slider/Slider';
import fondo from '../mango/assets/images/FONDO.jpg'
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../Reutilizable/ModalCarousel'
import fondoOverlay from '../assets/images/FONDOO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'
import { dataMango } from './MangoDias';
import MangoIndex from './MangoIndex';
import { ButtonRef } from 'components/Reutilizable/BotonReferencia';
import ModalReferencias from 'components/Reutilizable/ModalReferencias';
import TextBibliografia from 'components/Reutilizable/TextoReferencia';


const MangoPro = () => {
    const [estado, setEstado] = useState(true)
    const [contador, setContador] = useState(0)
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ruta = '/profesionales/frutas/estacion/primavera'
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
        setCurrentIndex(currentIndex + 1);
    };
    const _handleComplete = () => {
    };
    const abrirModal = () => {
        setEstado(true)
    }
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
    }, [contador, dataMango.length]);

    if (!dataMango || !dataMango.length) return null;
    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  >
                <MangoIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#ffff00' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={cerrarModal} mostrarFondo={fondoOverlay} padding='10' top='10%' >
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {dataMango.map((item) => {
                            const { id, image } = item;
                            return (
                                <CaroselItem key={id} backgroundCarousel={image} >
                                </CaroselItem>
                            );
                        })}
                    </CaroselContenido>
                    <CaroselButtonsContainer className="buttons">
                        <CaroselButtons onClick={handleLeftClick} id="prevBtn" style={{ display: contador === 0 ? 'none' : 'block' }}   >
                            <ImageLoading width='100%' src={prev} />
                        </CaroselButtons>
                        <CaroselButtons id="nextBtn" onClick={handleRightClick} style={{ display: contador === dataMango.length - 1 ? 'none' : 'block' }}>
                            <ImageLoading width='100%' src={next} />
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
                        1. Kabir Y, Shekhar HU, Sidhu JS. Phytochemical Compounds in Functional Properties of Mangoes. Handbook of Mango Fruit. 2017. p. 237-54.
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    )
}

export default MangoPro

