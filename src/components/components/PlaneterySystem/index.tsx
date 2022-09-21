import { CelestialBody } from "../../../interfaces/interfaces";
import { Earth, Jupiter, Mars, Mercury, Neptune, Orbit, PlanetarySystemWrapper, PlanetWrapper, Saturn, Sun, Uranus, Venus } from "./styles";

interface CelestialBodyDataForPlanetarySystem {
  celestialBodies: CelestialBody[];
}

export const PlanetarySystem = ({ celestialBodies }: CelestialBodyDataForPlanetarySystem) => {

  const getCelestialBodyNames = () => {
    const celestialBodyNames = [];
    for (let i = 0; i < celestialBodies.length; i++) {
      celestialBodyNames.push(celestialBodies[i].name);
    }
    return celestialBodyNames;
  }

  const celestialBodyNames = getCelestialBodyNames();

  return (

    <PlanetarySystemWrapper>
      <Sun />

      {celestialBodyNames.includes("Mercury") &&
        <>
          <Orbit widthAndHeight="55px" marginTopAndLeft="-32px" />
          <PlanetWrapper widthAndHeight="55px" marginTopAndLeft="-32px">
            <Mercury />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Venus") &&
        <>
          <Orbit widthAndHeight="110px" marginTopAndLeft="-60px" />
          <PlanetWrapper widthAndHeight="110px" marginTopAndLeft="-60px">
            <Venus />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Earth") &&
        <>
          <Orbit widthAndHeight="170px" marginTopAndLeft="-90px" />
          <PlanetWrapper widthAndHeight="170px" marginTopAndLeft="-90px">
            <Earth />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Mars") &&
        <>
          <Orbit widthAndHeight="230px" marginTopAndLeft="-120px" />
          <PlanetWrapper widthAndHeight="230px" marginTopAndLeft="-120px">
            <Mars />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Jupiter") &&
        <>
          <Orbit widthAndHeight="290px" marginTopAndLeft="-150px" />
          <PlanetWrapper widthAndHeight="290px" marginTopAndLeft="-150px">
            <Jupiter />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Saturn") &&
        <>
          <Orbit widthAndHeight="350px" marginTopAndLeft="-180px" />
          <PlanetWrapper widthAndHeight="350px" marginTopAndLeft="-180px">
            <Saturn />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Uranus") &&
        <>
          <Orbit widthAndHeight="410px" marginTopAndLeft="-210px" />
          <PlanetWrapper widthAndHeight="410px" marginTopAndLeft="-210px">
            <Uranus />
          </PlanetWrapper>
        </>
      }

      {celestialBodyNames.includes("Neptune") &&
        <>
          <Orbit widthAndHeight="470px" marginTopAndLeft="-240px" />
          <PlanetWrapper widthAndHeight="470px" marginTopAndLeft="-240px">
            <Neptune />
          </PlanetWrapper>
        </>
      }

    </PlanetarySystemWrapper>
  );
};
