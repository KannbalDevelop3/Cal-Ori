import { Link } from 'react-router-dom';
import styled from "styled-components";
const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const FilterDiasContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 1.1rem;
    z-index: 1;
    @media (min-width: 1024px) {
        bottom: 3rem;
    }
`;
const FilterDias = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;
    align-content: flex-end;
    width: 45%;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#050000")};
    height: 15px;
    flex-direction: row;
    border-radius: 25px;
    
    @media (min-width: 1024px) {
        
    }
`;
const CaroselFlex = styled.div`
    display:grid;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => (props.backgrounddModal ? props.backgrounddModal : "#ffffff")});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
const CaroselContenido = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 356px;
    height: 360px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: 312px) and (max-width: 926px) {
        width: 210px;
        height: 320px; 
    }
`;

const CaroselItem = styled.div`
    background-image: url(${(props) => (props.backgroundCarousel ? props.backgroundCarousel : "#ffffff")});
    width: 356px;
    height: 360px;
    flex: none;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media only screen and (min-width: 312px) and (max-width: 926px) {
        width: 210px;
        height: 320px; 
    }
`;

const CaroselButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CaroselButtons = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: none;
  background: none;
  img{
    width: 25px;
    height: auto;
    border-radius: 25px;
    cursor: pointer;
  }
  @media only screen and (min-width: 312px) and (max-width: 926px) {
        img{
            position: relative;
            bottom: 4rem; 
        }
    }
`;
const ButtonLinkIndice = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
`;
export { ButtonLinkIndice, FilterDias, FilterContainer, FilterDiasContainer, CaroselButtons, CaroselButtonsContainer, CaroselContenido, CaroselFlex, CaroselItem }