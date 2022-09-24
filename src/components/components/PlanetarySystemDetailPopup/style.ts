import styled from "styled-components";

export const PopupContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.8);
    z-index: 1;
`;

export const PopupField = styled.div`
    position: absolute;
    left: 100px;
    right: 100px;
    top: 100px;
    bottom: 100px;
    margin: auto;
    background-color: #1f1f1f;
`;

export const PlanetarySystemDetails = styled.div`
    color: white;
`;

export const CloseButton = styled.button`
    color: white;
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
`;
