import { HomePageContent, ContentContainer } from "./style";
import { useEffect, useState } from "react";
import { PlanetarySystem } from "../../../interfaces/interfaces";
import { PlanetarySystemOverviewElement } from "../../components/PlanetarySystemOverviewElement";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";
import { useKeycloak } from "@react-keycloak/web";

export const PlanetsPage = () => {

  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [planetarySystemCall] = useRecoilState(planetarySystemCallState);
  const [planetarySystems, setPlanetarySystems] = useState<PlanetarySystem[]>([]);

  const { keycloak } = useKeycloak();
  
  useEffect(() => {
    if (!keycloak.authenticated) {
      return;
    }
    fetch(`/allproducts/${currencyAsText}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + keycloak.token
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setPlanetarySystems(result.planetarySystems);
        },
      )
  }, [currencyAsText, planetarySystemCall, keycloak.authenticated]);

  return (
    <HomePageContent>
      <ContentContainer>
        {planetarySystems.map((item, index) => (
          <PlanetarySystemOverviewElement celestialBodies={item.celestialBodies} name={item.name} price={item.price} id={item.id} key={index}/>
        ))}
      </ContentContainer>
    </HomePageContent>
  );
};
