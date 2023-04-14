import React, { useEffect, useRef, useState } from 'react'
import ContenedorFV from '../../../../../../Reutilizable/ContenedorFV';
import { FilterContainer, FilterDias, FilterDiasContainer } from '../../../../../../Reutilizable/EstilosDiasComponents';
import Slider from '../../../../../../Reutilizable/Slider/Slider';
import fondo from '../espinaca/assets/images/FONDO.jpg'
import { CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem } from '../../../../../../Reutilizable/EstilosDiasComponents'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import ModalCarousel from '../../../../../../Reutilizable/ModalCarousel'
import fondoOverlay from '../assets/images/FONDO.jpg'
import modalfondo from './assets/images/MODAL.png'
import next from './assets/images/FLECHA1.png'
import prev from './assets/images/FLECHA2.png'
import EspinacaIndex from './EspinacaIndex';
import { datames } from './EspinacaDias';
import { ButtonRef } from 'components/Reutilizable/BotonReferencia';
import ModalReferencias from 'components/Reutilizable/ModalReferencias';
import TextBibliografia from 'components/Reutilizable/TextoReferencia';

const EspinacaPro = () => {
    const [estado, setEstado] = useState(true)
    const [contador, setContador] = useState(0)
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ruta = '/profesionales/verduras/estacion/primavera'
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
    const cerrarModal = () =>{
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
    }, [contador, datames.length]);
    if (!datames || !datames.length) return null;
    return (
        <>
            <ContenedorFV backgroundDesktop={fondo} rutaPrev={ruta} positionE='relative' cambiarEstadoo={abrirModal} estado={estado}  >
                <EspinacaIndex
                    currentIndex={currentIndex}
                    handleNext={_handleNext}
                    handleComplete={_handleComplete}
                />
                <FilterDiasContainer>
                    <FilterDias backgroundColor='#095228' >
                        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
                    </FilterDias>
                </FilterDiasContainer>
            </ContenedorFV>
            <ModalCarousel estado={estado} cambiarEstado={cerrarModal} mostrarFondo={fondoOverlay} padding='10' top='10%' >
                <CaroselFlex backgrounddModal={modalfondo} className='fadein animation-linear animation-duration-1000'>
                    <CaroselContenido ref={carousel}>
                        {datames.map((item) => {
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
                        <CaroselButtons id="nextBtn" onClick={handleRightClick} style={{ display: contador === datames.length - 1 ? 'none' : 'block' }}>
                            <ImageLoading width='100%' src={next} />
                        </CaroselButtons>
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
                {modal && <ModalReferencias
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    mostrarOverlay={true}
                >
                    <TextBibliografia>
                        1. Aune, D., Giovannucci, E., Boffetta, P., Fadnes, L.T., Keum, N., Norat, T., Greenwood, D.C.,
                        et al. 2017. Fruit and vegetable
                        intake and the risk of cardiovascular disease, total cancer and all-cause mortality: A systematic review and dose-response meta-analysis of prospective studies. International Journal of Epidemiology 46.3: 1029–56. doi. org/10.1093/ije/dyw319
                    </TextBibliografia>
                    <TextBibliografia>
                        2. Wang, X., Ouyang, Y., Liu, J., Zhu, M., Zhao, G., Bao, W. y Hu, F.B. 2014. Fruit and vegetable consumption and mortality from all causes, cardiovascular disease, and cancer: Systematic review and dose- response meta-analysis of prospective cohort studies. Bmj 349: g4490. doi. org/10.1136/bmj.g4490
                    </TextBibliografia>
                </ModalReferencias>}
            </ModalCarousel>
        </>
    )
}

export default EspinacaPro

