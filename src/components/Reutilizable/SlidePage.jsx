import { Link } from 'react-router-dom';
import { BackgroundImage } from "react-image-and-background-image-fade";
import styled from "styled-components";
import prevpa from '../paciente/contenido/assets/images/f-izq.png'
import nextpa from '../paciente/contenido/assets/images/f-der.png'
import { ButtonFixed, ButtonLinkIndice } from './EstilosDiasComponents';
import BotonFixedIndice from './BotonFixedIndice';
import HorizontalPage from './HorizontalPage';

const SlidePage = ({ children, to, handleArrow, backgroundDesktop, visibility, rutaPrev, rutaNext, left, right, height, overflow, positionCF }) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal src={backgroundDesktop} height={height} overflow={overflow} lazyLoad >
                <BotonFixedIndice to={to} />
                {children}
                <ContenedorFlechas positionCF={positionCF}>
                    <Prev left={left}>
                        <Link to={`${rutaPrev}`}><img src={prevpa} loading='lazy' /></Link>
                    </Prev>
                    <Next right={right} visibility={visibility}>
                        <Link to={`${rutaNext}`}
                            onClick={() => handleArrow()} >
                            <img src={nextpa} loading='lazy' />
                        </Link>
                    </Next>
                </ContenedorFlechas>
            </ContenedorPrincipal>
        </HorizontalPage>
    )
}

export default SlidePage
const ContenedorPrincipal = styled(BackgroundImage)`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
    overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};;
    background-attachment: fixed;
`;
const ContenedorFlechas = styled.div`
 display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  padding-inline: 2%;
  width: 100%;
  position: ${(props) => (props.positionCF ? props.positionCF : "fixed")};
  bottom: 0%;
`;
const Prev = styled.div`
    transition: 0.3s ease;
    width: 6%;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    @media only screen and (min-width: 1024px) {
        width: 4%;
    }
`;
const Next = styled.div`
    visibility: ${(props) => (props.visibility ? props.visibility : "visible")};
    transition: 0.3s ease;
    right: ${(props) => (props.right ? props.right : "3%")};
    width: 6%;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    @media only screen and (min-width: 1024px) {
        width: 4%;
    }
`;
