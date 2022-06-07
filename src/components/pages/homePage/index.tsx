import Slider from "react-slick";
import { BackgroundImageWrapper } from "./style";
import startpageintro from "../../../assets/StartpageIntro.png";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import PlanetSlider from "../../components/PlanetSlider";

export const HomePage = () => {
  return (
    <>
      <BackgroundImageWrapper url={startpageintro} />
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PlanetSlider />
      </BackgroundImageWrapper>
      <BackgroundImageWrapper />
    </>
  );
};
