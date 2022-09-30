import { CelestialBodyContainer, ContentContainer, CreateButton, HomePageContent, NameInputField, NameInputLabel, PlanetarySystemGraphicContainer, RightColumnContainer } from "./style";
import { useEffect, useState } from "react";
import { CelestialBody, PlanetarySystem } from "../../../interfaces/interfaces";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";
import { CelestialBodyCheckbox } from "../../components/CelestialBodyCheckbox";
import { PlanetarySystemGraphic } from "../../components/PlaneterySystemGraphic";
import { useKeycloak } from "@react-keycloak/web";
import { redirect } from 'react-router-dom';

export const CreatePage = () => {
  
  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [celestialBodyCall, setCelestialBodyCall] = useRecoilState(celestialBodyCallState);
  const [celestialBodies, setCelestialBodies] = useState<CelestialBody[]>([]);
  const [chosenCelestialBodies, setChosenCelestialBodies] = useState<CelestialBody[]>([]);
  const [planetarySystemName, setPlanetarySystemName] = useState("New Planetary System");

  const { keycloak } = useKeycloak();

  useEffect(() => {
    if (!keycloak.authenticated) {
      return;
    }
    fetch(`/allcomponents/${currencyAsText}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + keycloak.token
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          const celestialBodiesWithoutSun = result.celestialBody.slice(1);
          setCelestialBodies(celestialBodiesWithoutSun);
          console.log("sliced", celestialBodiesWithoutSun);
          setChosenCelestialBodies([result.celestialBody[0]]);
          console.log("all components", result.celestialBody);
        },
      )
  }, [currencyAsText, celestialBodyCall, keycloak.authenticated]);

  const handleNameChange = (event:any) => {
    setPlanetarySystemName(event.target.value);
    console.log(event.target.value);
  }

  const sendCreatedPlanetarySystemToBackend = () => {
    if (!keycloak.authenticated) {
      return;
    }
    console.log("in");
    const planetarySystemObject = {
      name: planetarySystemName,
      celestialBodies: chosenCelestialBodies,
    }
    fetch('/createproduct', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + keycloak.token
      },
      body: JSON.stringify(planetarySystemObject),
    })
      .then(res => res.json())
    setCelestialBodyCall(!celestialBodyCall);
    setPlanetarySystemName("New Planetary System");
    redirect("/create");
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
