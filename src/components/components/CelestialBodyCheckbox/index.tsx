import { CelestialBodyOverviewContainer, CelestialBodyName, CelestialBodyGraphicContainer, CelestialBodyInfoContainer, CelestialBodyPrice, CelestialBodyPriceContainer, CelestialBodyType, StyledCheckbox } from "./style"
import { useRecoilState } from "recoil";
import { currencyState } from "../../../states/currencyState";
import { useEffect, useState } from "react";
import { CelestialBodyImage } from "../CelestialBodyImage";
import { CelestialBody } from "../../../interfaces/interfaces";

interface CelestialBodyDataOverview {
    celestialBody: CelestialBody;
    chosenCelestialBodies: CelestialBody[];
    setChosenCelestialBodies: React.Dispatch<React.SetStateAction<CelestialBody[]>>;
}

export const CelestialBodyCheckbox = ({ celestialBody, chosenCelestialBodies, setChosenCelestialBodies }: CelestialBodyDataOverview) => {
    const [currency] = useRecoilState(currencyState);
    const [checked, setChecked] = useState(chosenCelestialBodies.some(chosenCelestialBody => chosenCelestialBody.name === celestialBody.name));

    useEffect(() => {
        if (checked) {
            setChosenCelestialBodies([...chosenCelestialBodies, celestialBody]);
        } else {
            const modifiedChosenCelestialBodies = chosenCelestialBodies.filter(chosenCelestialBody => chosenCelestialBody.name !== celestialBody.name);
            setChosenCelestialBodies(modifiedChosenCelestialBodies);
        }
    }, [checked]);

    const handleChange = () => {
        setChecked(!checked);
    };
    
    return (
        <>
            <CelestialBodyOverviewContainer>
                <CelestialBodyGraphicContainer>
                    <CelestialBodyImage name={celestialBody.name} />
                </CelestialBodyGraphicContainer>
                <CelestialBodyInfoContainer>
                    <CelestialBodyType>{celestialBody.type}</CelestialBodyType>
                    <CelestialBodyName>{celestialBody.name}</CelestialBodyName>
                    <CelestialBodyPriceContainer>
                        <CelestialBodyPrice>{celestialBody.price}</CelestialBodyPrice><CelestialBodyPrice>{currency}</CelestialBodyPrice>
                    </CelestialBodyPriceContainer>
                </CelestialBodyInfoContainer>
                <StyledCheckbox type="checkbox" checked={checked} onChange={handleChange} />
            </CelestialBodyOverviewContainer>
        </>
    );
}
