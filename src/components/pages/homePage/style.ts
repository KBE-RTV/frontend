import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface BackgroundImageProps {
  url?: string;
}

export const BackgroundImageWrapper = styled.div<BackgroundImageProps>`
  width: 100vw;
  height: 100vh;
  background: no-repeat url(${(props) => props.url});
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
`;

export const HomePageContent = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const IntroContainer = styled.div`
  padding-left: 50px;
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 70px;
`;

export const IntroTitle = styled.h1`
  color: white;
  font-size: 25px;
  margin: 0px;
  padding: 0px;
  text-transform: uppercase;
  max-width: 600px;
  text-align: left;
  font-weight: 400;
}
`;

export const NavButton = styled(NavLink)`
  color: white;
  border: 2px solid white;
  font-size: 15px;
  background: none;
  margin: 20px 20px 20px 4px;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  width: 100px;

  &:hover {
    font-weight: bold;
  }
`;

export const PlanetarySystemGraphicContainer = styled.div`
  margin-top: 100px;
`;
