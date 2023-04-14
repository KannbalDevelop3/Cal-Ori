import React from "react";
import styled from "styled-components";
import HorizontalPage from "../HorizontalPage";
const FinishTime = ({
    children,
    mostrarOverlay,
    padding,
    width,
    height,
    backgroundDesktop
}) => {
    return (
        <>
            <HorizontalPage>
                <Overlay mostrarOverlay={mostrarOverlay}>
                    <ContenedorModal backgroundDesktop={backgroundDesktop} padding={padding} width={width} height={height}>
                        {children}
                    </ContenedorModal>
                </Overlay>
            </HorizontalPage>

        </>
    );
};


export default FinishTime;

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) =>
        props.mostrarOverlay ? "rgba(0, 0, 0, 0.774)" : "rgba(0, 0, 0, 0)"};
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    `;
const ContenedorModal = styled.div`
    width: ${(props) => (props.width ? props.width : "800px")};
    height: ${(props) => (props.height ? props.height : "500px")};
    background-image: url(${(props) => (props.backgroundDesktop ? props.backgroundDesktop : "#FFFF")});
    border-radius: 5px;
    padding: ${(props) => (props.padding ? props.padding : "20px")};
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    gap: 5rem;
`;
