import React from 'react'
import styled from "styled-components";
import HorizontalPage from '../HorizontalPage';

const RetoMainScreen = (
  { setStart, backgroundDesktop, bottomInsOne, widthModalTree,
    backgroundModalDesktop, marginTopModalTwo, btnComenzar,
    bottom, bottomMobile, width, heightModalTree, marginTopModalTree,
    marginTopModalFo, marginBottomModalFo, bottomInsTwo, className, heightU, widthU
  }) => {
  return (
    <HorizontalPage>
      <Contenedor backgroundDesktop={backgroundDesktop} width={width}>
        <CentrarModal>
          <ContenedorModal widthU={widthU} heightU={heightU} className={className} backgroundModalDesktop={backgroundModalDesktop}
            marginTopModalTwo={marginTopModalTwo} widthModalTree={widthModalTree}
            heightModalTree={heightModalTree} marginTopModalTree={marginTopModalTree}
            marginTopModalFo={marginTopModalFo} marginBottomModalFo={marginBottomModalFo}
          />
          <BotonCerrarInstructions
            bottom={bottom} bottomMobile={bottomMobile}
            bottomInsOne={bottomInsOne} bottomInsTwo={bottomInsTwo}
            onClick={() => { setStart(1) }}> <img src={btnComenzar} alt="" />
          </BotonCerrarInstructions>
        </CentrarModal>
      </Contenedor >
    </HorizontalPage>
  )
}

export default RetoMainScreen

const Contenedor = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "none")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;
const CentrarModal = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100%;
`;
const ContenedorModal = styled.div`
  width: ${(props) => (props.widthU ? props.widthU : "350px")};
  height: ${(props) => (props.heightU ? props.heightU : "300px")};
  background-image: url(${(props) => (props.backgroundModalDesktop ? props.backgroundModalDesktop : "none")});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 700px;
    margin-top: ${(props) => (props.marginTopModalTwo ? props.marginTopModalTwo : "0")};
  }
  @media screen and (min-width: 1400px) and (max-width: 1450px) {
    width: 900px;
    margin-top: ${(props) => (props.marginTopModalFo ? props.marginTopModalFo : "")};
    margin-bottom: ${(props) => (props.marginBottomModalFo ? props.marginBottomModalFo : "")};
  }
  @media only screen and (min-width: 1451px){
    width: ${(props) => (props.widthModalTree ? props.widthModalTree : "900px")};
    height: ${(props) => (props.heightModalTree ? props.heightModalTree : "")};
    margin-top: ${(props) => (props.marginTopModalTree ? props.marginTopModalTree : "")};
  }
`;
const BotonCerrarInstructions = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 120px;
  height: 30px;
  transition: 0.3s ease all;
  border-radius: 25px;
  font-size: 20px;
  position: relative;
  bottom: ${(props) => (props.bottom ? props.bottom : "8.5rem")};
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.2);
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 200px;
    height: 50px;
    bottom: ${(props) => (props.bottomInsOne ? props.bottomInsOne : "15rem")};
  }
  @media screen and (min-width: 1400px) and (max-width: 1450px) {
    width: 220px;
    height: 70px;
    bottom: ${(props) => (props.bottomInsTwo ? props.bottomInsTwo : "20rem")};
  }
  @media only screen and (min-width: 1451px) {
    width: 280px;
    height: 50px;
    bottom: 20rem;
  }
`;