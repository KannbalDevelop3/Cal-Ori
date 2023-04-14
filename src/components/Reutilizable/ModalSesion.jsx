import React from "react";
import styled from "styled-components";
import cerrar from "../paciente/assets/images/boton-cerrar.png"
const ModalSesion = ({
  children,
  estado,
  mostrarOverlay,
  padding,
  width,
  height,
  backgroundDesktop,
  cambiarEstado,
  top,
  right,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay}>
          <ContenedorModal backgroundDesktop={backgroundDesktop} padding={padding} width={width} height={height}>
            <BotonCerrar top={top} right={right}>
              <img src={cerrar} onClick={() => cambiarEstado(false)} loading='lazy' />
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};


export default ModalSesion;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0, 0, 0, 0.582)" : "rgba(0, 0, 0, 0)"};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const ContenedorModal = styled.div`
  width: ${(props) => (props.width ? props.width : "800px")};
  height: ${(props) => (props.height ? props.height : "500px")};
  background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  display: flex;
    justify-content: center;
    align-items: center;
  @media only screen and (min-width: 312px) and (max-width: 926px) {
    width: ${(props) => (props.width ? props.width : "500px")};
    height: ${(props) => (props.height ? props.height : "300px")};
    position: absolute;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 110, 0.2) 0px 7px 29px 0px;
    padding: ${(props) => (props.padding ? props.padding : "20px")};
    display: flex;
    justify-content: center;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "14%")};
  right: ${(props) => (props.right ? props.right : "18%")};
  margin: auto;
  width: 45px;
  height: 45px;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;
  z-index: 1;
  &:hover {
    transform: translateY(-1px);
  }
  img{
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 312px) and (max-width: 926px) {
    width: 35px;
    height: 35px;
    top: 0%;
    right: 0;
  }
  
`;
