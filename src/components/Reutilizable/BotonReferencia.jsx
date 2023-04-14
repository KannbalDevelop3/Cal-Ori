import styled from 'styled-components';
import imaButton from '../assets/images/boton-ref.png'
const BotonReferencia = () => {
    return (
        <ButtonRef ></ButtonRef>
    )
}

export default BotonReferencia


export const ButtonRef = styled.button`
    position: ${(props) => (props.position ? props.position : "absolute")};
    bottom: ${(props) => (props.bottom ? props.bottom : "1rem")};
    left: ${(props) => (props.left ? props.left : "0")};
    right:  ${(props) => (props.right ? props.right : "0")};
    margin:  ${(props) => (props.margin ? props.margin : "auto")};
    cursor: pointer;
    background: none;
    background-image: url(${imaButton});
    width: 11rem;
    height: 2.8rem;
    background-position: center;
    background-size: 95% 100%;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    transition: all 0.4s ease;
    :hover{
        transform: scale(1.1);
    }
    z-index: 1;
    @media only screen and (min-width: 1024px) and (max-width: 1399px) {
        width: 17rem;
        height: 4.2rem;
        bottom: ${(props) => (props.bottomA ? props.bottomA : "1rem")};
        left: ${(props) => (props.leftA ? props.leftA : "0")};
        right:  ${(props) => (props.rightA ? props.rightA : "0")};
        margin:  ${(props) => (props.marginA ? props.marginA : "auto")};
       
    }
    @media screen and (min-width: 1400px) and (max-width: 1550px) {
        width: 18rem;
        height: 4rem;
        bottom: ${(props) => (props.bottomB ? props.bottomB : "1rem")};
        left: ${(props) => (props.leftB ? props.leftB : "0")};
        right:  ${(props) => (props.rightB ? props.rightB : "0")};
        margin:  ${(props) => (props.marginB ? props.marginB : "auto")};
        
    }
    @media only screen and (min-width: 1551px) and (max-width: 1920px) {
        width: 20rem;
        height: 5rem;
        bottom: ${(props) => (props.bottomC ? props.bottomC : "1rem")};
        left: ${(props) => (props.leftC ? props.leftC : "0")};
        right:  ${(props) => (props.rightC ? props.rightC : "0")};
        margin:  ${(props) => (props.marginC ? props.marginC : "auto")};
        
    }
  
`;
