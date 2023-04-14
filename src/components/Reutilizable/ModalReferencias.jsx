import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imaeButton from '../assets/images/icono-libro.png'
import ImageLoading from "./ImageLoading";
import cerrarM from '../assets/images/x.png'
const ModalReferencias = ({
    children,
    estado,
    cambiarEstado,
    mostrarOverlay,
    setModal,
    setAnimarModal,
    padding,
    width,
    height,
    background,
    zIndex,
    animarModal
}) => {
    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 600);
    }

    return (
        <>
            <Overlay zIndex={zIndex}
                mostrarOverlay={mostrarOverlay}
                className={`${animarModal ? 'animar' : 'cerrar'}`}
            >
                <ContenedorModal
                    padding={padding}
                    width={width}
                    height={height}
                    background={background}
                >
                    <BotonCerrar onClick={ocultarModal}>
                        <img src={cerrarM} alt="" />
                    </BotonCerrar>
                    <div className="contain__libro">
                        <img
                            className="libro__image image"
                            src={imaeButton}
                            alt="" />
                    </div>
                    <div className="contain__bibliografia">
                        {children}
                    </div>
                </ContenedorModal>
            </Overlay>
        </>
    );
};


export default ModalReferencias;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
        props.mostrarOverlay ? "rgba(0, 0, 0, 0.747)" : "rgba(0, 0, 0, 0)"};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.zIndex ? props.zIndex : "2"};
  transition: all 300ms ease-in;
    .animar {
        position: relative;
        opacity: 1;
    }
    .cerrar {
        opacity: 0;
    }

`;
const ContenedorModal = styled.div`
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns:  0.6fr 1.4fr;
    grid-template-rows: 1fr; 
    width: 70%;
    height: 60%;
    justify-items: end;
    align-items: center;
    background-color: white;
    overflow: hidden;
    border: 1rem #fcc900 solid;
    -webkit-border-radius: 25rem;
    -webkit-border-top-left-radius: 0;
    -moz-border-radius: 25rem;
    -moz-border-radius-topleft: 0;
    border-radius: 25rem;
    border-top-left-radius: 0;
    transition: all .3s ease;
    :hover{
        border: 1rem #e7ba05e1 solid;
    }
    .contain__libro{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        place-content: center;
    }
    img{
        width: 80%;
        height: auto;
        filter: drop-shadow(0 20px 25px rgba(160, 61, 28, 0.63));
        transition: all .3s ease;
        :hover{
            transform: rotate(18deg) scale(1.02);
        }
    }

    .contain__bibliografia{
        width: 100%;
        height: 100%;
        display: grid;
        padding-left: 3rem;
        padding-right: 10rem;
        justify-items: start;
        align-items: center;
        justify-content: center;
        align-content: center;
        overflow: auto;
        @media only screen and (min-width: 1024px) and (max-width: 1399px) {
            padding-left: 3rem;
            padding-right: 16rem;
        }
        @media screen and (min-width: 1400px) and (max-width: 1550px) {
            padding-left: 3rem;
            padding-right: 16rem;
        }
        @media only screen and (min-width: 1551px) and (max-width: 1920px) {
            padding-left: 3rem;
            padding-right: 16rem;
        }
    }
    /* @media screen and (min-width: 1400px) and (max-width: 1450px) {
        padding-inline: 25rem;
    } */
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 5rem;
  right: 15%;
  margin: auto;
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #fcc900;
  font-size: 4rem;
  font-weight: bold;
  z-index: 5;
  &:hover {
    transform: translateY(-1px);
  }
  img{
    width: 100%;
    position: relative;
    top: 75%;
}
  
`;


