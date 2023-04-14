import React from 'react'
import styled from "styled-components";
import prevpa from '../paciente/contenido/assets/images/f-izq.png'
import nextpa from '../paciente/contenido/assets/images/f-der.png'
import ImageLoading from './ImageLoading';
import { Link } from 'react-router-dom';
import HorizontalPage from './HorizontalPage';
const BackGameRows = ({ children, rutaPrev, rutaNext, visibility, estado, cambiarEstadoo, backgroundDesktop, left, positionE, right, height, overflow, widthInfo, widthLink }) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal backgroundDesktop={backgroundDesktop} height={height} overflow={overflow}>
                {children}
                <ContenedorFlechas positionE={positionE} visibility={visibility}>
                    <Prev left={left} >
                        <Link to={`${rutaPrev}`}><ImageLoading src={prevpa} width={widthLink} /></Link>
                    </Prev>
                    <Next right={right} >
                        <Link to={`${rutaNext}`}><ImageLoading src={nextpa} width={widthLink} /></Link>
                    </Next>
                </ContenedorFlechas>
            </ContenedorPrincipal>
        </HorizontalPage>
    )
}

export default BackGameRows
const ContenedorPrincipal = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-position: center;
    background-size: 100% 100%, cover;
    background-repeat: no-repeat;
    overflow: hidden;
    background-image: red;
`;
const ContenedorFlechas = styled.div`
    visibility: ${(props) => (props.visibility ? props.visibility : "hidden")};
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    padding-inline: 1%;
    width: 100%;
    height: 100%;
    position: ${(props) => (props.positionE ? props.positionE : "fixed")};
    z-index: 2;
`;
const Prev = styled.button`
    background: none;
    border: none;
    transition: 0.3s ease;
    position: fixed;
    left: ${(props) => (props.left ? props.left : "3%")};
    right: 0;
    bottom: 1%;
    width: 6%;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    @media (min-width: 1024px) {
        width: 4%;
    }
`;
const Next = styled.button`
    background: none;
    border: none;
    transition: 0.3s ease;
    position: fixed;
    right: ${(props) => (props.right ? props.right : "3%")};
    bottom: 1%;
    width: 6%;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
        
    }
    @media (min-width: 1024px) {
        width: 4%;
    }
`;
