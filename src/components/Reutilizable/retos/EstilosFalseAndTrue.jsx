import styled from "styled-components";
import btnResetGame from '../../assets/images/gral/volver-a-jugar.png'

const ContenidoReto = styled.div`
    display: grid; 
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr; 
    grid-template-rows: 20% 80%; 
    gap: 0px 0px; 
`;

const ContenidoCronometro = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr; 
    width: 100%;
    height: 100%;
    justify-items: end;
    align-items: center;
`;

const ContenidoQuiz = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    gap: 0px 0px;
    grid-auto-flow: row;
    align-items: center;
    align-content: center;
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 8%;
    width: 45px;
    height: 45px;
    border: none;
    background: none;
    cursor: pointer;
    -webkit-transition: 0.3s ease all;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #1766dc;
    z-index: 5;
    &:hover {
        transform: translateY(-1px);
    }
    img{
        width: 100%;
        position: relative;
        top: 75%;
    }
    @media only screen and (min-width: 1024px) {
        width: 50px;
        height: 50px;
    }
    @media screen and (min-width: 1400px) and (max-width: 1450px) {
        width: 60px;
        height: 60px;
        top: 10rem;
        right: 18rem;
    }
    @media only screen and (min-width: 1451px){
        width: 80px;
        height: 80px;
        top: 5rem;
        right: 10rem;
    }
    
`;

const BotonResetGame = styled.button`
    height: 60px;
    width: 170px;
    background: none;
    color: white;
    border: none;
    outline: none;
    transition: 0.6s all;
    position: relative;
    margin-top: ${(props) => (props.marginTopResetGame ? props.marginTopResetGame : "5rem")};
    left: ${(props) => (props.leftResetGame ? props.leftResetGame : "5rem")};
    img{
        width: 100%;
        height: auto;
    }
    &:hover {
        transform: scale(1.1);
    }
    cursor: pointer;
`;

const BotonLinkGame = styled.button`
    height: 60px;
    width: 170px;
    background: none;
    color: white;
    border: none;
    outline: none;
    transition: 0.6s all;
    margin-top: 15rem;
    margin-top: ${(props) => (props.marginTopLinkGame ? props.marginTopLinkGame : "5rem")};
    left: ${(props) => (props.leftLinkGame ? props.leftLinkGame : "5rem")};
    position: relative;
    img{
        width: 100%;
        height: auto;
    }
    &:hover {
        transform: scale(1.1);
    }
    /* cursor: pointer; */
`;

export { BotonLinkGame, BotonResetGame, ContenidoReto, ContenidoCronometro, ContenidoQuiz, BotonCerrar }