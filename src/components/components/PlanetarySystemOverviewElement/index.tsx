import { CelestialBody } from "../../../interfaces/interfaces";
import { PlanetarySystemGraphic } from "../PlaneterySystemGraphic"
import { PlanetarySystemOverviewContainer, PlanetarySystemName, PlanetarySystemGraphicContainer, PlanetarySystemInfoContainer, PlanetarySystemPrice, PlanetarySystemPriceContainer, MoreDetailsButton } from "./style"
import { useRecoilState } from "recoil";
import { currencyState } from "../../../states/currencyState";
import { useState } from "react";
import { PlanetarySystemDetailPopup } from "../PlanetarySystemDetailPopup";

interface PlanetarySystemDataOverview {
    celestialBodies: CelestialBody[];
    name: string;
    price: number;
    id: string;
  }

export const PlanetarySystemOverviewElement = ({ celestialBodies, name, price, id }: PlanetarySystemDataOverview) => {
    const [currency] = useRecoilState(currencyState);
    const [showPopup, setShowPopup] = useState(false);
    
    return (
        <>
            <PlanetarySystemOverviewContainer>
                <PlanetarySystemGraphicContainer>
                    <PlanetarySystemGraphic celestialBodies={celestialBodies}/>
                </PlanetarySystemGraphicContainer>
                <PlanetarySystemInfoContainer>
                    <PlanetarySystemName>{name}</PlanetarySystemName>
                    <MoreDetailsButton onClick={() => setShowPopup(true)}>Learn more</MoreDetailsButton>
                    <PlanetarySystemPriceContainer>
                        <PlanetarySystemPrice>{price}</PlanetarySystemPrice><PlanetarySystemPrice>{currency}</PlanetarySystemPrice>
                    </PlanetarySystemPriceContainer>
                </PlanetarySystemInfoContainer>
            </PlanetarySystemOverviewContainer>
            {showPopup &&
                <PlanetarySystemDetailPopup closePopup={() => setShowPopup(false)} currency={currency} id={id} />
            }
        </>
    );
}
