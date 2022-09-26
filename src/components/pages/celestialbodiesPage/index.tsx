import { ContentContainer, HomePageContent } from "./style";
import { useEffect, useState } from "react";
import { CelestialBody } from "../../../interfaces/interfaces";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";
import { CelestialBodyOverviewElement } from "../../components/CelestialBodyOverviewElement";

export const CelestialBodiesPage = () => {
  
  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [celestialBodyCall] = useRecoilState(celestialBodyCallState);
  const [celestialBodies, setCelestialBodies] = useState<CelestialBody[]>([]);

  useEffect(() => {
    fetch(`/allcomponents/${currencyAsText}`, {
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
