import { CelestialBody } from "../../../interfaces/interfaces";
import { PlanetarySystem } from "../PlaneterySystem"
import { PlanetarySystemOverviewContainer, PlanetarySystemName, PlanetarySystemGraphicContainer, PlanetarySystemInfoContainer, CelestialBodyName, PlanetarySystemPrice, PlanetarySystemPriceContainer, MoreDetailsButton } from "./style"
import { useRecoilState } from "recoil";
import { currencyState } from "../../../states/currencyState";
import { useState } from "react";
import { PlanetarySystemDetailPopup } from "../PlanetarySystemDetailPopup";

interface PlanetarySystemDataOverview {
    celestialBodies: CelestialBody[];
    name: string;
    price: number;
  }

export const PlanetarySystemOverviewElement = ({ celestialBodies, name, price }: PlanetarySystemDataOverview) => {
    const [currency, setCurrency] = useRecoilState(currencyState);
    const [showPopup, setShowPopup] = useState(false);
    
    const getCelestialBodyNames = () => {
        const celestialBodyNames = [];
        for (let i = 0; i < celestialBodies.length; i++) {
          celestialBodyNames.push(celestialBodies[i].name);
        }
        return celestialBodyNames;
    }
    
    const celestialBodyNames = getCelestialBodyNames();

    return (
        <>
            <PlanetarySystemOverviewContainer>
                <PlanetarySystemGraphicContainer>
                    <PlanetarySystem celestialBodies={celestialBodies}/>
                </PlanetarySystemGraphicContainer>
                <PlanetarySystemInfoContainer>
                    <PlanetarySystemName>{name}</PlanetarySystemName>
                    {celestialBodyNames.map(celestialBody => (
                        <CelestialBodyName>{celestialBody}</CelestialBodyName>
                    ))}
                    <PlanetarySystemPriceContainer>
                        <PlanetarySystemPrice>{price}</PlanetarySystemPrice><PlanetarySystemPrice>{currency}</PlanetarySystemPrice>
                    </PlanetarySystemPriceContainer>
                </PlanetarySystemInfoContainer>
                <MoreDetailsButton onClick={() => setShowPopup(true)}>+</MoreDetailsButton>
            </PlanetarySystemOverviewContainer>
            {showPopup &&
                <PlanetarySystemDetailPopup closePopup={() => setShowPopup(false)}/>
            }
        </>
    );
}
