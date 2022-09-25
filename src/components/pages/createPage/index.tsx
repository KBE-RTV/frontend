import { CelestialBodyContainer, ContentContainer, CreateButton, HomePageContent, NameInputField, NameInputLabel, PlanetarySystemGraphicContainer, RightColumnContainer } from "./style";
import { useEffect, useState } from "react";
import { CelestialBody } from "../../../interfaces/interfaces";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";
import { CelestialBodyCheckbox } from "../../components/CelestialBodyCheckbox";
import { PlanetarySystemGraphic } from "../../components/PlaneterySystemGraphic";
import { getTablePaginationUnstyledUtilityClass } from "@mui/base";

export const CreatePage = () => {
  
  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [celestialBodyCall] = useRecoilState(celestialBodyCallState);
  const [celestialBodies, setCelestialBodies] = useState<CelestialBody[]>([]);
  const [chosenCelestialBodies, setChosenCelestialBodies] = useState<CelestialBody[]>([]);
  const [planetarySystemName, setPlanetarySystemName] = useState("New Planetary System");

  useEffect(() => {
    fetch(`/getcomponenttest/${currencyAsText}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setCelestialBodies(result.celestialBody);
          console.log("all components", result.celestialBody);
        },
      )
  }, [currencyAsText, celestialBodyCall]);

  const handleNameChange = (event:any) => {
    setPlanetarySystemName(event.target.value);
    console.log(event.target.value);
  }

  const sendCreatedPlanetarySystemToBackend = () => {
    console.log("in");
    const planetarySystemObject = {
      name: planetarySystemName,
      celestialBodies: chosenCelestialBodies,
    }
    fetch('/createproduct', {
      method: 'POST',
      body: JSON.stringify(planetarySystemObject),
    })
      .then(res => res.json())
    setChosenCelestialBodies([]);
    setPlanetarySystemName("New Planetary System");
    console.log("out");
  }

  return (
    <HomePageContent>
      <ContentContainer>
        <CelestialBodyContainer>
          {celestialBodies.map((item, index) => (
            <CelestialBodyCheckbox celestialBody={item} chosenCelestialBodies={chosenCelestialBodies} setChosenCelestialBodies={setChosenCelestialBodies} key={index} />
          ))}
        </CelestialBodyContainer>
        <RightColumnContainer>
          <NameInputLabel>
            Give your Planetary System a name
            <br/>
            <NameInputField type="text" placeholder="Your Planetary System Name" onChange={(event) => handleNameChange(event)} />
          </NameInputLabel>
          <PlanetarySystemGraphicContainer>
            <PlanetarySystemGraphic celestialBodies={chosenCelestialBodies}/>
          </PlanetarySystemGraphicContainer>
          <CreateButton type="button" onClick={() => sendCreatedPlanetarySystemToBackend()}>Create</CreateButton>
        </RightColumnContainer>
      </ContentContainer>
    </HomePageContent>
  );
};
