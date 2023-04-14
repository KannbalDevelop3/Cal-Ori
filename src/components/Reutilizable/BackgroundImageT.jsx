import { BackgroundImage } from "react-image-and-background-image-fade";
import styled from "styled-components";
import HorizontalPage from "./HorizontalPage";

const BackgroundImageT = ({ children, backgroundImage, height, overflow }) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal backgroundImage={backgroundImage} height={height} overflow={overflow}>
                {children}
            </ContenedorPrincipal>
        </HorizontalPage>
    )
}

export default BackgroundImageT
const ContenedorPrincipal = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.backgroundImage ? props.backgroundImage : "#FFFF")});
    overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};
    background-attachment: fixed;
    display: grid;
`;
