import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Currency, PlanetarySystem } from "../../../interfaces/interfaces";
import { currencyStateSelector } from "../../../states/currencyState";
import { PlanetarySystemGraphic } from "../PlaneterySystemGraphic";
import { CelestialBodyName, CloseButton, PlanetarySystemDetails, PlanetarySystemGraphicContainer, PlanetarySystemName, PlanetarySystemPrice, PlanetarySystemPriceContainer, PopupContainer, PopupField } from "./style"

interface PlanetarySystemDetailData {
    closePopup: () => void;
    currency: Currency;
    id: string;
}

export const PlanetarySystemDetailPopup = ({closePopup, currency, id}: PlanetarySystemDetailData) => {
    const [planetarySystem, setPlanetarySystem] = useState<PlanetarySystem>({name: "Information loading", celestialBodies: [], id: "Information loading", owner: "Information loading", price: 1 });
    const currencyAsText = useRecoilValue(currencyStateSelector);

    const getCelestialBodyNames = () => {
        const celestialBodyNames = [];
        for (let i = 0; i < planetarySystem.celestialBodies.length; i++) {
          celestialBodyNames.push(planetarySystem.celestialBodies[i].name);
        }
        return celestialBodyNames;
    }

    useEffect(() => {
        fetch(`/detailproduct/${id}/${currencyAsText}`, {
            method: 'GET',
          })
            .then(res => res.json())
            .then(
                (result) => {
                setPlanetarySystem(result.planetarySystems[0])
              },
            )
      }, []);
    
    return (
        <PopupContainer>
            <PopupField>
                <PlanetarySystemGraphicContainer>
                    <PlanetarySystemGraphic celestialBodies={planetarySystem.celestialBodies}/>
                </PlanetarySystemGraphicContainer>
                <PlanetarySystemDetails>
                    <PlanetarySystemName>{planetarySystem.name}</PlanetarySystemName>
                    {getCelestialBodyNames().map((celestialBody, index) => (
                        <CelestialBodyName key={index}>{celestialBody}</CelestialBodyName>
                    ))}
                    <PlanetarySystemPriceContainer>
                        <PlanetarySystemPrice>{planetarySystem.price}</PlanetarySystemPrice><PlanetarySystemPrice>{currency}</PlanetarySystemPrice>
                    </PlanetarySystemPriceContainer>
                </PlanetarySystemDetails>
                <CloseButton onClick={closePopup}>_</CloseButton>
            </PopupField>
        </PopupContainer>
    );
}