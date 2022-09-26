import { BackgroundImageWrapper, HomePageContent, PleaseLoginTitle, RocketImg } from "./style";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import rocket from "../../../assets/rocket.png";

export const PleaseLoginPage = () => {

  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PleaseLoginTitle>Please log in first</PleaseLoginTitle>
        <RocketImg src={rocket}/>
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
