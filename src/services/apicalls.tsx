import { PlanetarySystem } from "../interfaces/interfaces";

export const getPlanetarySystems = () => {
  return fetch('/getproducttest', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(
      (result) => {
        console.log("all planetary systems", result);
        return result.planetarySystems;
      },
    )
}
