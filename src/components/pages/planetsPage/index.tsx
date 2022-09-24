import { HomePageContent, ProductContainer } from "./style";
import { useEffect, useState } from "react";
import { getPlanetarySystems } from "../../../services/apicalls";
import { PlanetarySystem } from "../../../interfaces/interfaces";
import { PlanetarySystemOverviewElement } from "../../components/PlanetarySystemOverviewElement";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { currencyStateSelector } from "../../../states/currencyState";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";

export const PlanetsPage = () => {

  const currencyAsText = useRecoilValue(currencyStateSelector);
  const [planetarySystemCall, setPlanetarySystemCall] = useRecoilState(planetarySystemCallState);
  const [planetarySystems, setPlanetarySystems] = useState<PlanetarySystem[]>([]);

  useEffect(() => {
    fetch(`/getproducttest/${currencyAsText}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setPlanetarySystems(result.planetarySystems);
          console.log("all planetary systems", result);
        },
      )
  }, [currencyAsText, planetarySystemCall]);

    return (
    <HomePageContent>
      <ProductContainer>
        {planetarySystems.map((item, index) => (
          <PlanetarySystemOverviewElement celestialBodies={item.celestialBodies} name={item.name} price={item.price} key={index}/>
        ))}
      </ProductContainer>
    </HomePageContent>
  );
};
