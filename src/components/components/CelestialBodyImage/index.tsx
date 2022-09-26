import { CelestialBodyImg } from "./style"

import sun from "../../../assets/sun.png";
import earth from "../../../assets/earth.png";
import jupiter from "../../../assets/jupiter.png";
import mars from "../../../assets/mars.png";
import mercury from "../../../assets/mercury.png";
import neptune from "../../../assets/neptune.png";
import pluto from "../../../assets/pluto.png";
import saturn from "../../../assets/saturn.png";
import uranus from "../../../assets/uranus.png";
import venus from "../../../assets/venus.png";

interface CelestialBodyImageData {
    name: string;
}

const celestialBodyImageSources = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
const celestialBodyNames = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

export const CelestialBodyImage = ({ name }: CelestialBodyImageData) => {

    const getImageSource = () => {
        const celestialBodyIndex = celestialBodyNames.indexOf(name);
        return celestialBodyImageSources[celestialBodyIndex];
    }

    return (
        <CelestialBodyImg src={getImageSource()} />
    );
}
