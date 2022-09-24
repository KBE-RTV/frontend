import { HomePageContent, ProductContainer } from "./style";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/apicalls";
import { PlanetarySystem } from "../../../interfaces/interfaces";
import { PlanetarySystemOverviewElement } from "../../components/PlanetarySystemOverviewElement";

export const CelestialBodiesPage = () => {
  /*
  const [planetarySystems, setPlanetarySystems] = useState<PlanetarySystem[]>([]);

  useEffect(() => {
    fetch('/convertcurrencies', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          setPlanetarySystems(result.planetarySystems);
          console.log(result.planetarySystems);
        },
      )
  }, []);
  */

  const planetarySystems = [{"id":"aec3e84c-1c5c-4065-a7f3-7f32c711d420","name":"Solar","owner":" ","celestialBodies":[{"id":"51cafbb6-e909-4851-8f14-d1994fdcc500","name":"Sun","amount":1,"price":156.0,"type":"sun","orbital":0,"radius":695700.0,"volume":1.40999997E18,"mass":1.9885E30,"gravity":274.0,"rotationVelocity":1997.0,"orbitalVelocity":0.0,"surfaceTemperature":1.57E7},{"id":"73411e26-8750-43b5-860e-aa5c7e0cc087","name":"Mercury","amount":1,"price":56.0,"type":"planet","orbital":0,"radius":2.439,"volume":6.0829999E10,"mass":3.3011E23,"gravity":0.0037,"rotationVelocity":10892.0,"orbitalVelocity":47.36,"surfaceTemperature":340.15},{"id":"a09a2066-6bfa-4abc-9b74-66a81157c7b2","name":"Mars","amount":1,"price":56.0,"type":"planet","orbital":0,"radius":3389.5,"volume":1.631E11,"mass":6.4171E23,"gravity":3.72,"rotationVelocity":0.241,"orbitalVelocity":24.07,"surfaceTemperature":213.15},{"id":"9788e1d4-9ac9-48ba-b221-315ca690ee0d","name":"Earth","amount":1,"price":23.0,"type":"planet","orbital":0,"radius":6371.0,"volume":1.08321001E12,"mass":5.97237E24,"gravity":9806.0,"rotationVelocity":0.4651,"orbitalVelocity":29.78,"surfaceTemperature":287.15},{"id":"a09a2066-6bfa-4abc-9b74-66a81157c7b2","name":"Mars","amount":1,"price":56.0,"type":"planet","orbital":0,"radius":3389.5,"volume":1.631E11,"mass":6.4171E23,"gravity":3.72,"rotationVelocity":0.241,"orbitalVelocity":24.07,"surfaceTemperature":213.15},{"id":"42353345-4b6f-45bf-9b17-861c03026780","name":"Jupiter","amount":1,"price":45.0,"type":"gasGiant","orbital":0,"radius":71492.0,"volume":1.4313E15,"mass":1.8982E27,"gravity":24.79,"rotationVelocity":12.6,"orbitalVelocity":13.07,"surfaceTemperature":165.0},{"id":"a76591a2-9ae6-4ad7-98fd-5c2bec467d49","name":"Uranus","amount":1,"price":87.0,"type":"planet","orbital":0,"radius":25.362,"volume":6.8330002E13,"mass":8.681E25,"gravity":0.00869,"rotationVelocity":2.59,"orbitalVelocity":6.8,"surfaceTemperature":76.0},{"id":"cd376fad-4f4e-4652-bf1a-a00da8154714","name":"Neptune","amount":1,"price":75.0,"type":"planet","orbital":0,"radius":24.622,"volume":6.2530001E13,"mass":1.024E26,"gravity":0.01115,"rotationVelocity":2.68,"orbitalVelocity":5.43,"surfaceTemperature":72.0},{"id":"47fcdc12-6fbb-4f3c-b7d2-745f7973996a","name":"Pluto","amount":1,"price":20.0,"type":"dwarfPlanet","orbital":0,"radius":118803.0,"volume":7.0569999E9,"mass":1.303E22,"gravity":6.2E-4,"rotationVelocity":47.18,"orbitalVelocity":4.743,"surfaceTemperature":44.0}],"price":574.0}]
  return (
    <>
    </>
    /*
    <HomePageContent>
      <ProductContainer>
        {planetarySystems.map(item => (
          <PlanetarySystemOverviewElement celestialBodies={item.celestialBodies} name={item.name}/>
        ))}
      </ProductContainer>
    </HomePageContent>
    */
  );
};
