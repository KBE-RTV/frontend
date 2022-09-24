import styled from "styled-components";

export const PlanetarySystemOverviewContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    border-bottom: 0.5px dashed white;
    width: 80%;
    justify-content: space-between;
`;

export const PlanetarySystemGraphicContainer = styled.div`
    margin-left: 0px;
    padding: 20px;
`;

export const PlanetarySystemInfoContainer = styled.div`
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
`;

export const PlanetarySystemPrice = styled.p`
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
    font-size: 24px;
    display: inline;
`;

export const MoreDetailsButton = styled.button`
    color: #3A7FBE;
    font-size: 50px;
    background:none;
    border:none;
    margin:0;
    padding: 20px 20px 0 0;
    cursor: pointer;
    align-self: flex-start;

    &:hover {
        color: #7db4e8;
        font-weight: bold;
    }
`;
