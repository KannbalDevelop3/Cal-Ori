import styled from "styled-components";
import cerrar from "../paciente/assets/images/cerrar.png"
import HorizontalPage from "./HorizontalPage";

const ModalCarousel = ({ children, estado, mostrarFondo, padding, width, height, cambiarEstado, top, right }) => {
  return (
    <>
      <HorizontalPage>
        {estado && (
          <Overlay mostrarFondo={mostrarFondo}>
            <ContenedorModal padding={padding} width={width} height={height}>
              <BotonCerrar top={top} right={right}>
                <img src={cerrar} onClick={() => { cambiarEstado(false) }} loading='lazy' />
              </BotonCerrar>
              {children}
            </ContenedorModal>
          </Overlay>
        )}
      </HorizontalPage>
    </>
  );
};


export default ModalCarousel;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${(props) => (props.mostrarFondo ? props.mostrarFondo : "#ffffff")});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const ContenedorModal = styled.div`
  width: ${(props) => (props.width ? props.width : "1000px")};
  height: ${(props) => (props.height ? props.height : "600px")};
  background: none;
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  @media only screen and (min-width: 312px) and (max-width: 926px) {
    width: ${(props) => (props.width ? props.width : "600px")};
    height: ${(props) => (props.height ? props.height : "400px")};
    position: absolute;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 110, 0.2) 0px 7px 29px 0px;
    padding: ${(props) => (props.padding ? props.padding : "0px")};
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "6%")};
  right: ${(props) => (props.right ? props.right : "15%")};
  margin: auto;
  width: 40px;
  height: 40px;
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
    position: relative;
    top: 75%;
  }
  @media screen and (min-width: 1400px) and (max-width: 1450px) {
    top: 15%;
    right: 18%
  }
  @media screen and (min-width: 1500px) and (max-width: 1920px) {
    top: 22%;
    right: 25%
  }
  @media only screen and (min-width: 312px) and (max-width: 926px) {
    width: 30px;
    height: 30px;
    top: 1%;
    right: 2%!important;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    top: 8%;
    right: 12%;
  }
  
`;

