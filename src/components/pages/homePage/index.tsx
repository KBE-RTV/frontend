import { BackgroundImageWrapper, HomePageContent } from "./style";
import startpageintro from "../../../assets/StartpageIntro.png";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import { PlanetSlider } from "../../components/PlanetSlider";
import { PlanetarySystem } from "../../components/PlaneterySystem";

export const HomePage = () => {
  
  const celestialBodies = [{"name":"Sun"},{"name":"Mercury"},{"name":"Venus"},{"name":"Earth"},{"name":"Mars"},{"name":"Jupiter"},{"name":"Saturn"},{"name":"Uranus"},{"name":"Neptune"}];
  
  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintro} />
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PlanetSlider />
      </BackgroundImageWrapper>
      <BackgroundImageWrapper>
        <PlanetarySystem celestialBodies={celestialBodies} />
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
