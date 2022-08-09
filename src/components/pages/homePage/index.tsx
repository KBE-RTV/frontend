import { BackgroundImageWrapper, HomePageContent } from "./style";
import startpageintro from "../../../assets/StartpageIntro.png";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import { PlanetSlider } from "../../components/PlanetSlider";
import { PlanetarySystem } from "../../components/PlaneterySystem";

export const HomePage = () => {
  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintro} />
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PlanetSlider />
      </BackgroundImageWrapper>
      <BackgroundImageWrapper>
        <PlanetarySystem />
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
