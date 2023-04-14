import styled from "styled-components";
import { BackgroundImage } from "react-image-and-background-image-fade";
import HorizontalPage from "../HorizontalPage";
const FondoBackground = (
    { backgroundDesktop, height, overflow, children}
) => {
    return (
        <HorizontalPage>
            <ContenedorPrincipal src={backgroundDesktop} height={height} overflow={overflow} lazyLoad >
            {children}
        </ContenedorPrincipal>
        </HorizontalPage>
    )
}
const ContenedorPrincipal = styled(BackgroundImage)`
width: 100%;
height: ${(props) => (props.height ? props.height : "100vh")};
background-position: 100% 100%;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
overflow:  ${(props) => (props.overflow ? props.overflow : "hidden")};
`;

export default FondoBackground