import {
  Earth,
  Mars,
  Mercury,
  Moon,
  Orbit,
  PlanetarySystemWrapper,
  PlanetWrapper,
  Sun,
  Venus,
} from "./styles";
import "./styles.css";

export const PlanetarySystem = () => {
  return (
    <PlanetarySystemWrapper>
      <Sun />

      <Orbit widthAndHeight="280px" marginTopAndLeft="-140px" />
      <PlanetWrapper widthAndHeight="280px" marginTopAndLeft="-140px" speed="8.8s">
        <Mercury />
      </PlanetWrapper>

      <Orbit widthAndHeight="370px" marginTopAndLeft="-185px" />
      <PlanetWrapper widthAndHeight="370px" marginTopAndLeft="-185px" speed="22s">
        <Venus />
      </PlanetWrapper>

      <Orbit widthAndHeight="500px" marginTopAndLeft="-250px" />
      <PlanetWrapper widthAndHeight="500px" marginTopAndLeft="-250px" speed="36.5s">
        <Orbit widthAndHeight="90px" marginTopAndLeft="-45px" style={{top: 0}}/>
        <PlanetWrapper widthAndHeight="90px" marginTopAndLeft="-45px" speed="3s" style={{top: 0}}>
          <Moon />
        </PlanetWrapper>

        <Earth
          src="https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg"
          alt="earth"
        />
      </PlanetWrapper>

      <Orbit widthAndHeight="700px" marginTopAndLeft="-350px" />
      <PlanetWrapper widthAndHeight="700px" marginTopAndLeft="-350px" speed="68.7s">
        <Mars />
      </PlanetWrapper>
    </PlanetarySystemWrapper>
  );
};
