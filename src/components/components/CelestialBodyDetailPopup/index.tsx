import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CelestialBody, Currency } from "../../../interfaces/interfaces";
import { currencyStateSelector } from "../../../states/currencyState";
import { CelestialBodyDetailTable } from "../CelestialBodyDetailTable";
import { CelestialBodyDetailRow } from "../CelestialBodyDetailTable/style";
import { CelestialBodyImage } from "../CelestialBodyImage";
import { CelestialBodyDetailsContainer, CelestialBodyGraphicContainer, CelestialBodyName, CelestialBodyType, CloseButton, CelestialBodyPrice, CelestialBodyPriceContainer, PopupContainer, PopupField } from "./style"

interface CelestialBodyDetailData {
    closePopup: () => void;
    currency: Currency;
    id: string;
}

export const CelestialBodyDetailPopup = ({closePopup, currency, id}: CelestialBodyDetailData) => {
    const [celestialBody, setCelestialBody] = useState<CelestialBody>(
        {
            name: "Information loading",
            amount: 1,
            gravity: 1,
            id: "Information loading",
            mass: 1,
            orbital: 1,
            orbitalVelocity: 1,
            price: 1,
            radius: 1,
            rotationVelocity: 1,
            surfaceTemperature: 1,
            type: "Information loading",
            volume: 1,
        }
    );

    const currencyAsText = useRecoilValue(currencyStateSelector);

    /*TODO: id in die url einpflegen für die Detail Abfrage!*/
    useEffect(() => {
        fetch(`/detailcomponent/${id}/${currencyAsText}`, {
            method: 'GET',
          })
            .then(res => res.json())
            .then(
                (result) => {
                setCelestialBody(result.celestialBody[0])
                console.log("detail component", result);
              },
            )
      }, []);
    
    return (
        <PopupContainer>
            <PopupField>
                <CelestialBodyGraphicContainer>
                    <CelestialBodyImage name={celestialBody.name} />
                </CelestialBodyGraphicContainer>
                <CelestialBodyDetailsContainer>
                    <CelestialBodyType>{celestialBody.type}</CelestialBodyType>
                    <CelestialBodyName>{celestialBody.name}</CelestialBodyName>
                    <CelestialBodyDetailTable gravity={celestialBody.gravity} mass={celestialBody.mass} orbital={celestialBody.orbital} orbitalVelocity={celestialBody.orbitalVelocity} radius={celestialBody.radius} rotationVelocity={celestialBody.rotationVelocity} surfaceTemperature={celestialBody.surfaceTemperature} volume={celestialBody.volume} />
                    <CelestialBodyPriceContainer>
                        <CelestialBodyPrice>{celestialBody.price}</CelestialBodyPrice><CelestialBodyPrice>{currency}</CelestialBodyPrice>
                    </CelestialBodyPriceContainer>
                </CelestialBodyDetailsContainer>
                <CloseButton onClick={closePopup}>_</CloseButton>
            </PopupField>
        </PopupContainer>
    );
}