import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlanetImg, SliderWrapper } from "./style";

import ceres from "../../../assets/ceres.png";
import earth from "../../../assets/earth.png";
import eris from "../../../assets/eris.png";
import jupiter from "../../../assets/jupiter.png";
import makemake from "../../../assets/makemake.png";
import mars from "../../../assets/mars.png";
import mercury from "../../../assets/mercury.png";
import moon from "../../../assets/moon.png";
import neptune from "../../../assets/neptune.png";
import pluto from "../../../assets/pluto.png";
import saturn from "../../../assets/saturn.png";
import uranus from "../../../assets/uranus.png";
import venus from "../../../assets/venus.png";

export default function PlanetSlider() {
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
          <PlanetImg src={ceres} />
        </div>
        <div>
          <PlanetImg src={earth} />
        </div>
        <div>
          <PlanetImg src={eris} />
        </div>
        <div>
          <PlanetImg src={jupiter} />
        </div>
        <div>
          <PlanetImg src={makemake} />
        </div>
        <div>
          <PlanetImg src={mars} />
        </div>
        <div>
          <PlanetImg src={mercury} />
        </div>
        <div>
          <PlanetImg src={moon} />
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
