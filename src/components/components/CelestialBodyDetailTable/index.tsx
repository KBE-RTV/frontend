import { CelestialBodyFacts } from "../../../interfaces/interfaces";
import { CelestialBodyDetailProperty, CelestialBodyDetailRow, CelestialBodyDetailValue } from "./style";

export const CelestialBodyDetailTable = ({ gravity, mass, orbital, orbitalVelocity, radius, rotationVelocity, surfaceTemperature, volume }: CelestialBodyFacts) => {
    /*TODO: Einheiten hinzufügen!
    radius: km
volume: km^3
mass: kg
rotationVelocity: km/s
orbitalVelocity: km/s
surfaceTemperature: K*/

    return (
        <>
            {gravity &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Gravity
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {gravity}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            m/s
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue style={{verticalAlign: "super", fontSize: "12px"}}>
                            2
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {mass &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Mass
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {mass}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            kg
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {(orbitalVelocity || orbitalVelocity == 0) &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Orbital velocity
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {orbitalVelocity}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            km/s
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {radius &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Radius
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {radius}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            km
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {rotationVelocity &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Rotation velocity
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {rotationVelocity}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            km/s
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {surfaceTemperature &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Surface temperature
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {surfaceTemperature}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            K
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
            {volume &&
                <CelestialBodyDetailRow>
                    <CelestialBodyDetailProperty>
                        Volume
                    </CelestialBodyDetailProperty>
                    <div>
                        <CelestialBodyDetailValue>
                            {volume}
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue>
                            km
                        </CelestialBodyDetailValue>
                        <CelestialBodyDetailValue style={{verticalAlign: "super", fontSize: "12px"}}>
                            3
                        </CelestialBodyDetailValue>
                    </div>
                </CelestialBodyDetailRow>
            }
        </>
    );
}
