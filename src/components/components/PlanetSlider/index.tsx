import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlanetImg, SliderWrapper } from "./styles";

import earth from "../../../assets/earth.png";
import jupiter from "../../../assets/jupiter.png";
import mars from "../../../assets/mars.png";
import mercury from "../../../assets/mercury.png";
import neptune from "../../../assets/neptune.png";
import pluto from "../../../assets/pluto.png";
import saturn from "../../../assets/saturn.png";
import uranus from "../../../assets/uranus.png";
import venus from "../../../assets/venus.png";

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
          <PlanetImg src={earth} />
        </div>
        <div>
          <PlanetImg src={jupiter} />
        </div>
        <div>
          <PlanetImg src={mars} />
        </div>
        <div>
          <PlanetImg src={mercury} />
        </div>
        <div>
          <PlanetImg src={neptune} />
        </div>
        <div>
          <PlanetImg src={pluto} />
        </div>
        <div>
          <PlanetImg src={saturn} />
        </div>
        <div>
          <PlanetImg src={uranus} />
        </div>
        <div>
          <PlanetImg src={venus} />
        </div>
      </Slider>
    </SliderWrapper>
  );
}
