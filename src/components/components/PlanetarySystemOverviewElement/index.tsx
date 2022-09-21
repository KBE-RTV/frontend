import { CelestialBody } from "../../../interfaces/interfaces";
import { PlanetarySystem } from "../PlaneterySystem"
import { PlanetarySystemContainer, PlanetarySystemName } from "./style"

interface PlanetarySystemDataOverview {
    celestialBodies: CelestialBody[];
    name: string;
  }

export const PlanetarySystemOverviewElement = ({ celestialBodies, name }: PlanetarySystemDataOverview) => {

    return (
        <PlanetarySystemContainer>
            <PlanetarySystem celestialBodies={celestialBodies}/>
            <PlanetarySystemName>{name}</PlanetarySystemName>
        </PlanetarySystemContainer>
    );
}
