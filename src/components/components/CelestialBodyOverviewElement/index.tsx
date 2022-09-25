import { CelestialBodyOverviewContainer, CelestialBodyName, CelestialBodyGraphicContainer, CelestialBodyInfoContainer, CelestialBodyPrice, CelestialBodyPriceContainer, MoreDetailsButton, CelestialBodyImg, CelestialBodyType } from "./style"
import { useRecoilState } from "recoil";
import { currencyState } from "../../../states/currencyState";
import { useState } from "react";
import { CelestialBodyDetailPopup } from "../CelestialBodyDetailPopup";
import { CelestialBodyImage } from "../CelestialBodyImage";

interface CelestialBodyDataOverview {
    type: string;
    name: string;
    price: number;
    id: string;
}

export const CelestialBodyOverviewElement = ({ type, name, price, id }: CelestialBodyDataOverview) => {
    const [currency] = useRecoilState(currencyState);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <CelestialBodyOverviewContainer>
                <CelestialBodyGraphicContainer>
                    <CelestialBodyImage name={name} />
                </CelestialBodyGraphicContainer>
                <CelestialBodyInfoContainer>
                    <CelestialBodyType>{type}</CelestialBodyType>
                    <CelestialBodyName>{name}</CelestialBodyName>
                    <MoreDetailsButton onClick={() => setShowPopup(true)}>Learn more</MoreDetailsButton>
                    <CelestialBodyPriceContainer>
                        <CelestialBodyPrice>{price}</CelestialBodyPrice><CelestialBodyPrice>{currency}</CelestialBodyPrice>
                    </CelestialBodyPriceContainer>
                </CelestialBodyInfoContainer>
            </CelestialBodyOverviewContainer>
            {showPopup &&
                <CelestialBodyDetailPopup closePopup={() => setShowPopup(false)} currency={currency} id={id} />
            }
        </>
    );
}
