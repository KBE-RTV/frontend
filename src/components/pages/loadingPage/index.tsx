import { BackgroundImageWrapper, HomePageContent, PleaseLoginTitle, RocketImg } from "./style";
import startpageintroCelestialBodies from "../../../assets/StartpageIntroComponents.png";
import rocket from "../../../assets/rocket.png";

export const LoadingPage = () => {

  return (
    <HomePageContent>
      <BackgroundImageWrapper url={startpageintroCelestialBodies}>
        <PleaseLoginTitle>Loading...</PleaseLoginTitle>
        <RocketImg src={rocket}/>
      </BackgroundImageWrapper>
    </HomePageContent>
  );
};
