import styled from "styled-components";
import { BackgroundImage } from "react-image-and-background-image-fade";
import ImageLoading from "./ImageLoading";
import prevpa from '../paciente/contenido/assets/images/f-izq.png'
import { Link } from "react-router-dom";
import HorizontalPage from "./HorizontalPage";
const MenuVerduraOFruta = (
    { backgroundDesktop, height, overflow, titleEstacion, titleInstruction, width1, width2, backgroundCocina, className, children, left, rutaPrev }
) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal src={backgroundDesktop} height={height} overflow={overflow} lazyLoad >
                <ContenedorDividido>
                    <DivInstruction>
                        <Instruction>
                            <ImageLoading src={titleInstruction} width={width1} />
                        </Instruction>
                    </DivInstruction>
                    <ContenedorCocina backgroundCocina={backgroundCocina}>
                        {children}
                    </ContenedorCocina>
                    <DivTitulo>
                        <div className="d_izquierda">
                            <Prev left={left}>
                                <Link to={`${rutaPrev}`}><ImageLoading src={prevpa} width='20%' /></Link>
                            </Prev>
                        </div>
                        <div className="d_derecha">
                            <ImageLoading src={titleEstacion} width={width2} className={className} />
                        </div>
                    </DivTitulo>
                </ContenedorDividido>
            </ContenedorPrincipal>
        </HorizontalPage>
    )
}

export default MenuVerduraOFruta
const ContenedorPrincipal = styled(BackgroundImage)`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
    overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};;
`;
const ContenedorDividido = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 2.6fr 0.3fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    overflow: hidden;
`;
const DivInstruction = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 5px 5px;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    align-items: center;   
    
`;
const Instruction = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: end;
    align-items: end;
    justify-content: end;

`;
const ContenedorCocina = styled.div`
    width: 80%;
    height: 80%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.backgroundCocina ? props.backgroundCocina : "#FFFF")});
    overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};;
    /* background-attachment: fixed; */
    display: grid;
    justify-items: center;
    align-items: center;
`;
const DivTitulo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
    & > div:nth-child(1) {
        width: 70%;
        height: 100%;
        display: grid;
        justify-items: start;
        align-items: center;
    }
    & > div:nth-child(2) {
        width: 100%;
        height: 100%;
    }

`;
const Prev = styled.div`
    transition: 0.3s ease;
    width: 70%;
    left:  ${(props) => (props.left ? props.left : "3rem")};
    position: relative;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    @media (min-width: 1024px) and (max-width: 1366px) {
        width: 45%;
    }
    @media screen and (min-width: 1400px) and (max-width: 1450px) {
        width: 45%;
    }
    @media only screen and (min-width: 1452px) and (max-width: 1920px) {
        width: 45%;
    }
`;