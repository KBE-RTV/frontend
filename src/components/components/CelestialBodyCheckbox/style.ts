import styled from "styled-components";

export const CelestialBodyOverviewContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    border-bottom: 0.5px dashed white;
    justify-content: start;
`;

export const CelestialBodyGraphicContainer = styled.div`
    margin-left: 0px;
    padding: 20px;
`;

export const CelestialBodyInfoContainer = styled.div`
    flex: 0 0 15%;
    padding: 40px 40px 40px 0px;
    display: flex;
    flex-direction: column;
`;

export const CelestialBodyType = styled.h3`
    text-align: left;
    text-transform: uppercase;
    font-size: 20px;
    margin: 0;
    font-weight: 300;
`;

export const CelestialBodyName = styled.h2`
    text-align: left;
    text-transform: uppercase;
    font-size: 30px;
    margin: 0;
    font-weight: 600;
`;

export const CelestialBodyPriceContainer = styled.div`
    align-self: start;
    margin-top: auto;
`;

export const CelestialBodyPrice = styled.p`
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
    font-size: 24px;
    display: inline;
`;

export const StyledCheckbox = styled.input`
    height: 20px;
    width: 20px;
    margin: auto 0 auto auto;
`;
