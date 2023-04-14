import { Link } from 'react-router-dom';
import { BackgroundImage } from "react-image-and-background-image-fade";
import styled from "styled-components";
import HorizontalPage from '../HorizontalPage';


const FondoReto = ({ children, backgroundDesktop, height, overflow }) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal src={backgroundDesktop} height={height} overflow={overflow} lazyLoad >
                {children}
            </ContenedorPrincipal>
        </HorizontalPage>
    )
}

export default FondoReto

const ContenedorPrincipal = styled(BackgroundImage)`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
    overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};;
    background-attachment: fixed;
`;
