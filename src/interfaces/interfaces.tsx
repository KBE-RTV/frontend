export interface CelestialBody {
    amount?: number;
    gravity?: number;
    id: string;
    mass?: number; 
    name: string;
    orbital?: number;
    orbitalVelocity?: number;
    price: number;
    radius?: number;
    rotationVelocity?: number;
    surfaceTemperature?: number;
    type: string;
    volume?: number;
}

export interface CelestialBodyFacts {
    gravity?: number;
    mass?: number; 
    orbital?: number;
    orbitalVelocity?: number;
    radius?: number;
    rotationVelocity?: number;
    surfaceTemperature?: number;
    volume?: number;
}

export interface PlanetarySystem {
    celestialBodies: CelestialBody[];
    id: string;
    name: string;
    owner: string;
    price: number;
}

export type Currency = "€" | "$" | "£" | "₺" | "¥";
