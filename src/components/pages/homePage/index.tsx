import { BackgroundImageWrapper, HomePageContent } from "./style";
import startpageintro from "../../../assets/StartpageIntro.png";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import { PlanetSlider } from "../../components/PlanetSlider";
import { PlanetarySystemGraphic } from "../../components/PlaneterySystemGraphic";

export const HomePage = () => {
  
  const celestialBodies = [{"name":"Sun","id":"","price":1,"type":""},{"name":"Mercury","id":"","price":1,"type":""},{"name":"Venus","id":"","price":1,"type":""},{"name":"Earth","id":"","price":1,"type":""},{"name":"Mars","id":"","price":1,"type":""},{"name":"Jupiter","id":"","price":1,"type":""},{"name":"Saturn","id":"","price":1,"type":""},{"name":"Uranus","id":"","price":1,"type":""},{"name":"Neptune","id":"","price":1,"type":""}];
  
  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintro} />
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PlanetSlider />
      </BackgroundImageWrapper>
      <BackgroundImageWrapper>
        <PlanetarySystemGraphic celestialBodies={celestialBodies} />
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
