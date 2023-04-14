import React from 'react'
import styled from "styled-components";
import HorizontalPage from '../HorizontalPage';
import ImageLoading from '../ImageLoading';

const RetoInstruction = (
    { mostrarOverlay, setStartReto, backgroundInstruction, paddinInlineDesktTwo, paddinInlineDeskt,
        paddinInlineDesktOne, titleInstruction, btnComenzarReto, bottomIns, src, className, leftIns, rightIns,
        marginIns, bottomInsOne, leftInsOne, rightInsOne, marginInsOne, paddinInlineDesktTree, bottomInstTree,
        bottomInsTwwo, leftInsTwwo, rightInsTwwo, marginInsTwwo, leftInsTree, rightInsTree, marginInsTree,
        bottomInsMb, leftInsMb, rightInsMb, marginInsMb
    }) => {
    return (
        <HorizontalPage>
            <Overlay mostrarOverlay={mostrarOverlay}>
            <Contenedor backgroundInstruction={backgroundInstruction}>
                <CentrarModal>
                    <ContenedorModalIns paddinInlineDesktTree={paddinInlineDesktTree} paddinInlineDeskt={paddinInlineDeskt} paddinInlineDesktTwo={paddinInlineDesktTwo} paddinInlineDesktOne={paddinInlineDesktOne}>
                        <img src={src} className={className} />
                    </ContenedorModalIns>
                    <ContenedorButtonIns>
                        <BotonCerrarInstructions
                            bottomIns={bottomIns} leftIns={leftIns} rightIns={rightIns}
                            marginIns={marginIns} bottomInsOne={bottomInsOne} leftInsOne={leftInsOne}
                            rightInsOne={rightInsOne} marginInsOne={marginInsOne} bottomInstTree={bottomInstTree}
                            bottomInsTwwo={bottomInsTwwo} leftInsTwwo={leftInsTwwo} rightInsTwwo={rightInsTwwo}
                            marginInsTwwo={marginInsTwwo} leftInsTree={leftInsTree} rightInsTree={rightInsTree} marginInsTree={marginInsTree}
                            bottomInsMb={bottomInsMb} leftInsMb={leftInsMb} rightInsMb={rightInsMb} marginInsMb={marginInsMb}
                            onClick={() => { setStartReto(2) }}> <img src={btnComenzarReto} alt="" />
                        </BotonCerrarInstructions>
                    </ContenedorButtonIns>
                </CentrarModal>
            </Contenedor >
        </Overlay>
        </HorizontalPage>
    )
}

export default RetoInstruction
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
  z-index: 1;
`;
const Contenedor = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-image: url(${(props) => (props.backgroundInstruction ? props.backgroundInstruction : "none")});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;
const CentrarModal = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 60% 40%; 
    width: 100%;
    height: 100%;
`;
const ContenedorModalIns = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    padding-inline: ${(props) => (props.paddinInlineDeskt ? props.paddinInlineDeskt : "17rem")};
    @media only screen and (min-width: 1024px) and (max-width: 1399px) {
        padding-inline: ${(props) => (props.paddinInlineDesktOne ? props.paddinInlineDesktOne : "38rem")};
    }
    @media screen and (min-width: 1400px) and (max-width: 1450px) {
        padding-inline: ${(props) => (props.paddinInlineDesktTwo ? props.paddinInlineDesktTwo : "40rem")};
    }
    @media only screen and (min-width: 1451px) and (max-width: 1920px) {
        padding-inline: ${(props) => (props.paddinInlineDesktTree ? props.paddinInlineDesktTree : "50rem")};
    }

`;
const ContenedorButtonIns = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    justify-items: end;
    align-items: center;
`;
const BotonCerrarInstructions = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 120px;
  height: 30px;
  transition: 0.3s ease all;
  outline: none;
  border-radius: 25 px;
  position: absolute;
  bottom: ${(props) => (props.bottomIns ? props.bottomIns : "1rem")};
  left: ${(props) => (props.leftIns ? props.leftIns : "")};
  right: ${(props) => (props.rightIns ? props.rightIns : "")};
  margin: ${(props) => (props.marginIns ? props.marginIns : "")};
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
        width: 200px;
        height: 50px;
        bottom: ${(props) => (props.bottomInsOne ? props.bottomInsOne : "1rem")};
        left: ${(props) => (props.leftInsOne ? props.leftInsOne : "")};
        right: ${(props) => (props.rightInsOne ? props.rightInsOne : "")};
        margin: ${(props) => (props.marginInsOne ? props.marginInsOne : "")};
    }
    @media screen and (min-width: 1400px) and (max-width: 1450px) {
        width: 200px;
        height: 60px;
        bottom: ${(props) => (props.bottomInsTwwo ? props.bottomInsTwwo : "1rem")};
        left: ${(props) => (props.leftInsTwwo ? props.leftInsTwwo : "")};
        right: ${(props) => (props.rightInsTwwo ? props.rightInsTwwo : "1rem")};
        margin: ${(props) => (props.marginInsTwwo ? props.marginInsTwwo : "")};
    }
    @media only screen and (min-width: 1451px){
        width: 280px;
        height: 50px;
        left: ${(props) => (props.leftInsTree ? props.leftInsTree : "")};
        right: ${(props) => (props.rightInsTree ? props.rightInsTree : "1.5rem")};
        margin: ${(props) => (props.marginInsTree ? props.marginInsTree : "")};
        bottom: ${(props) => (props.bottomInstTree ? props.bottomInstTree : "4rem")};
    }
`;