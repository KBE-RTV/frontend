import { HomePageContent, ProductContainer } from "./style";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/apicalls";
import { PlanetarySystem } from "../../../interfaces/interfaces";
import { PlanetarySystemOverviewElement } from "../../components/PlanetarySystemOverviewElement";

export const PlanetsPage = () => {
  /*
  const [planetarySystems, setPlanetarySystems] = useState<PlanetarySystem[]>([]);

  useEffect(() => {
    fetch('/convertcurrencies', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setPlanetarySystems(result.products);
          console.log(result.products);
        },
      )
  }, []);
  */

  const planetarySystems = 
  [{"id":"4b63880f-a884-483f-9df0-d2ccc509f5ba","name":"MyPlanetarySystem","owner":"Ricky","celestialBodies":[{"id":"74aa4bed-238f-4e46-be2d-960742049aea","name":"Sun","amount":1,"price":3.5,"type":"sun","orbital":0,"radius":1.0,"volume":1.0,"mass":1.0,"gravity":1.0,"rotationVelocity":1.0,"orbitalVelocity":1.0,"surfaceTemperature":1.0},{"id":"350cb93f-b7cc-480b-a80b-fe4c7f6b65e9","name":"Earth","amount":1,"price":3.5,"type":"planet","orbital":0,"radius":1.0,"volume":1.0,"mass":1.0,"gravity":1.0,"rotationVelocity":1.0,"orbitalVelocity":1.0,"surfaceTemperature":1.0}],"price":69.853},
    {"id":"505f3df2-c9ad-485d-906c-1658f264b021","name":"MyPlanetarySystem2","owner":"Ricky","celestialBodies":[{"id":"74aa4bed-238f-4e46-be2d-960742049aea","name":"Sun","amount":1,"price":3.5,"type":"sun","orbital":0,"radius":1.0,"volume":1.0,"mass":1.0,"gravity":1.0,"rotationVelocity":1.0,"orbitalVelocity":1.0,"surfaceTemperature":1.0},{"id":"350cb93f-b7cc-480b-a80b-fe4c7f6b65e9","name":"Earth","amount":1,"price":3.5,"type":"planet","orbital":0,"radius":1.0,"volume":1.0,"mass":1.0,"gravity":1.0,"rotationVelocity":1.0,"orbitalVelocity":1.0,"surfaceTemperature":1.0}],"price":79.832}]

  return (
    <HomePageContent>
      <ProductContainer>
        {planetarySystems.map(item => (
          <PlanetarySystemOverviewElement celestialBodies={item.celestialBodies} name={item.name}/>
        ))}
      </ProductContainer>
    </HomePageContent>
  );
};
