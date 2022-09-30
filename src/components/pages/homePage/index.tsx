import { BackgroundImageWrapper, HomePageContent, IntroContainer, IntroTitle, NavButton, PlanetarySystemGraphicContainer } from "./style";
import startpageintro from "../../../assets/StartpageIntro.png";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import { PlanetSlider } from "../../components/PlanetSlider";
import { PlanetarySystemGraphic } from "../../components/PlaneterySystemGraphic";
import { useRecoilState } from "recoil";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";

export const HomePage = () => {
  const [planetarySystemCall, setPlanetarySystemCall] = useRecoilState(planetarySystemCallState);
  const [celestialBodyCall, setCelestialBodyCall] = useRecoilState(celestialBodyCallState);

  const celestialBodies = [{"name":"Sun","id":"","price":1,"type":""},{"name":"Mercury","id":"","price":1,"type":""},{"name":"Venus","id":"","price":1,"type":""},{"name":"Earth","id":"","price":1,"type":""},{"name":"Mars","id":"","price":1,"type":""},{"name":"Jupiter","id":"","price":1,"type":""},{"name":"Saturn","id":"","price":1,"type":""},{"name":"Uranus","id":"","price":1,"type":""},{"name":"Neptune","id":"","price":1,"type":""}];
  
  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintro}>
        <IntroContainer>
          <IntroTitle>Choose your favorite Celestial Bodies and create your own Planetary System</IntroTitle>
          <NavButton to="/create">Create</NavButton>
        </IntroContainer>
      </BackgroundImageWrapper>
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PlanetSlider />
        <IntroContainer>
          <IntroTitle>Celestial Bodies</IntroTitle>
          <NavButton to="/celestialbodies" onClick={() => setCelestialBodyCall(!celestialBodyCall)}>Show</NavButton>
        </IntroContainer>
      </BackgroundImageWrapper>
      <BackgroundImageWrapper>
        <PlanetarySystemGraphicContainer>
          <PlanetarySystemGraphic celestialBodies={celestialBodies} />
        </PlanetarySystemGraphicContainer>
        <IntroContainer>
          <IntroTitle>Planetary Systems</IntroTitle>
          <NavButton to="/planetarysystems" onClick={() => setPlanetarySystemCall(!planetarySystemCall)}>Show</NavButton>
        </IntroContainer>
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
