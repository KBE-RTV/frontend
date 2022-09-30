import { ContentContainer, HomePageContent } from "./style";
import { useEffect, useState } from "react";
import { CelestialBody } from "../../../interfaces/interfaces";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";
import { CelestialBodyOverviewElement } from "../../components/CelestialBodyOverviewElement";
import { useKeycloak } from "@react-keycloak/web";

export const CelestialBodiesPage = () => {
  
  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [celestialBodyCall] = useRecoilState(celestialBodyCallState);
  const [celestialBodies, setCelestialBodies] = useState<CelestialBody[]>([]);

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
          setCelestialBodies(result.celestialBody);
        },
      )
  }, [currencyAsText, celestialBodyCall, keycloak.authenticated]);

  return (
    <HomePageContent>
      <ContentContainer>
        {celestialBodies.map(item => (
          <CelestialBodyOverviewElement type={item.type} name={item.name} price={item.price} id={item.id} />
        ))}
      </ContentContainer>
    </HomePageContent>
  );
};
