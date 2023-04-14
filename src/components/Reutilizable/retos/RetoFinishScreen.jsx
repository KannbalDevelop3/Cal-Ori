import React from 'react'
import styled from "styled-components";
import HorizontalPage from '../HorizontalPage';
import ImageLoading from '../ImageLoading';

const RetoFinishScreen = ({ children, backgroundDesktFinal, backgroundModalDesktopFin, mostrarOverlay, src, className }) => {
  return (
    <HorizontalPage>
      <ContenedorFinal backgroundDesktFinal={backgroundDesktFinal}>
        <Overlay mostrarOverlay={mostrarOverlay}>
          <CentrarModalFinal>
            <ImageLoading src={src} className={className} />
            {children}
          </CentrarModalFinal>
        </Overlay>
      </ContenedorFinal >
    </HorizontalPage>
  )
}

export default RetoFinishScreen

const ContenedorFinal = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-image: url(${(props) => (props.backgroundDesktFinal ? props.backgroundDesktFinal : "rgba(0, 0, 0, 0.5)")});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;
const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)"};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const CentrarModalFinal = styled.div`
    display: grid;
    place-items: center;
    place-content: center;
    width: 100%;
    height: 100%;
    padding-inline: 8rem;
`;
