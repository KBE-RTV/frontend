import { CelestialBodyFacts } from "../../../interfaces/interfaces";
import { CelestialBodyDetailRow, CelestialBodyDetailText } from "./style";

export const CelestialBodyDetailTable = ({ gravity, mass, orbital, orbitalVelocity, radius, rotationVelocity, surfaceTemperature, volume }: CelestialBodyFacts) => {
    /*TODO: Einheiten hinzufügen!*/
    return (
        <>
            {gravity &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Gravity
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {gravity}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {mass &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Mass
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {mass}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {(orbital || orbital == 0) &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Orbital
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {orbital}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {(orbitalVelocity || orbitalVelocity == 0) &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Orbital velocity
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {orbitalVelocity}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {radius &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Radius
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {radius}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {rotationVelocity &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Rotation velocity
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {rotationVelocity}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {surfaceTemperature &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Surface temperature
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {surfaceTemperature}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
            {volume &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailText>
                        Volume
                    </CelestialBodyDetailText>
                    <CelestialBodyDetailText>
                        {volume}
                    </CelestialBodyDetailText>
                </CelestialBodyDetailRow>
            }
        </>
    );
}
