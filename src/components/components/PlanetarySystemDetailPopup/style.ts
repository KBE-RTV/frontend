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
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: auto;
`;

export const PlanetarySystemGraphicContainer = styled.div`
    margin-left: 0px;
    padding: 20px;
`;

export const PlanetarySystemDetails = styled.div`
    color: white;
    flex: 0 0 40%;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

export const PlanetarySystemName = styled.h2`
    text-align: left;
    text-transform: uppercase
`;

export const CelestialBodyName = styled.p`
    text-align: left;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PlanetarySystemPriceContainer = styled.div`
    align-self: end;
    margin-top: auto;
    padding-bottom: 30px;
`;

export const PlanetarySystemPrice = styled.p`
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
    font-size: 24px;
    display: inline;
`;

export const CloseButton = styled.button`
    color: #3A7FBE;
    background:none;
    border: none;
    margin:0 0 auto 0;
    padding:0 37px 0 0;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;

    &:hover {
        color: #7db4e8;
        font-weight: bold;
        font-size: 41px;
    }
`;
