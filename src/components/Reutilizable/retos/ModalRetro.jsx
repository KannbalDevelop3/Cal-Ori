import React from "react";
import styled from "styled-components";
import HorizontalPage from "../HorizontalPage";

const ModalRetro = ({
    children,
    estado,
    cambiarEstado,
    mostrarOverlay,
    padding,
    width,
    height,
    background,
    zIndex
}) => {
    return (
        <>
            <HorizontalPage>
                {estado && (
                    <Overlay zIndex={zIndex} mostrarOverlay={mostrarOverlay}>
                        <ContenedorModal padding={padding} width={width} height={height} background={background}>
                            {children}
                        </ContenedorModal>
                    </Overlay>
                )}
            </HorizontalPage>
        </>
    );
};


export default ModalRetro;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
        props.mostrarOverlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.zIndex ? props.zIndex : "2"};;
`;
const ContenedorModal = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr; 
    width: 100%;
    height: 100%;
    justify-items: end;
    align-items: center;
    padding-inline: 10rem;
    @media screen and (min-width: 1400px) and (max-width: 1450px) {
        padding-inline: 25rem;
    }
`;

