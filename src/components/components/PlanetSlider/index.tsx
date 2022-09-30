import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CelestialBodyImg, SliderWrapper } from "./styles";

import earth from "../../../assets/earth.png";
import jupiter from "../../../assets/jupiter.png";
import mars from "../../../assets/mars.png";
import mercury from "../../../assets/mercury.png";
import neptune from "../../../assets/neptune.png";
import pluto from "../../../assets/pluto.png";
import saturn from "../../../assets/saturn.png";
import uranus from "../../../assets/uranus.png";
import venus from "../../../assets/venus.png";
import { CelestialBodyImage } from "../CelestialBodyImage";

export const PlanetSlider = () => {
  const slidersettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper>
      <Slider {...slidersettings}>
        <div>
          <CelestialBodyImage name="Earth" />
        </div>
        <div>
          <CelestialBodyImg src={jupiter} />
        </div>
        <div>
          <CelestialBodyImg src={mars} />
        </div>
        <div>
          <CelestialBodyImg src={mercury} />
        </div>
        <div>
          <CelestialBodyImg src={neptune} />
        </div>
        <div>
          <CelestialBodyImg src={pluto} />
        </div>
        <div>
          <CelestialBodyImg src={saturn} />
        </div>
        <div>
          <CelestialBodyImg src={uranus} />
        </div>
        <div>
          <CelestialBodyImg src={venus} />
        </div>
      </Slider>
    </SliderWrapper>
  );
}
