import React, { useEffect, useRef, useState } from 'react'
import ContenedorFV from '../../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../../Reutilizable/Slider/Slider';
import fondo from '../calabaza/assets/images/FONDO.jpg'
import ZanahoriaIndex from './CalabazaIndex';
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../../Reutilizable/ModalCarousel'
import fondoOverlay from '../assets/images/FONDO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'
import { datamc } from './CalabazaDias';
import CalabazaIndex from './CalabazaIndex';
import { ButtonRef } from 'components/Reutilizable/BotonReferencia';
import ModalReferencias from 'components/Reutilizable/ModalReferencias';
import TextBibliografia from 'components/Reutilizable/TextoReferencia';

const CalabazaPro = () => {
    const [estado, setEstado] = useState(true)
    const [contador, setContador] = useState(false)
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ruta = '/profesionales/verduras/estacion/invierno'
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

    if (!datamc || !datamc.length) return null;
    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  >
                <CalabazaIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#23311f' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={setEstado} mostrarFondo={fondoOverlay} padding='10' top='10%' >
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {datamc.map((item) => {
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
                    bottom='3.3rem' left='none'
                    margin='none' right='8%'
                    bottomA='8rem' rightA='19%'
                    leftA='none' marginA='0'
                    bottomB='15rem' rightB='20%'
                    leftB='none' marginB='0'
                    bottomC='23rem' rightC='27%'
                    leftC='none' marginC='0'
                />
                {modal && <ModalReferencias setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    mostrarOverlay={true}
                >
                    <TextBibliografia>
                        1. Klimenko, N.S., Tyakht, A.V., Popenko, A.S., Vasiliev, A.S., Altukhov, I.A., Ischenko, D.S., Shashkova, T.I., et al. 2018. Microbiome responses to an uncontrolled short- term diet intervention in the frame of the Citizen Science Project. Nutrients 8;10(5):576. pubmed.ncbi.nlm.nih. gov/29738477/
                    </TextBibliografia>
                    <TextBibliografia>
                        2. Nuha A. y cols; on behalf of the American Diabetes Association, Summary of Revisions: Standards of Care in Diabetes—2023. Diabetes Care 1 January 2023; 46 (Supplement_1):
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    )
}

export default CalabazaPro

