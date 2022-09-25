import { useRecoilState } from "recoil";
import logo from "../../../assets/Logo.png";
import CurrencyChangeButton from "../CurrencyChangeButton";
import { CreateLink, HeaderLink, HeaderWrapper, Links, Logo, LogoLink } from "./styles";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";

export const Header = () => {
  const [planetarySystemCall, setPlanetarySystemCall] = useRecoilState(planetarySystemCallState);
  const [celestialBodyCall, setCelestialBodyCall] = useRecoilState(celestialBodyCallState);

  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <Logo src={logo} />
      </LogoLink>
      <Links>
        <HeaderLink to="/celestialbodies" onClick={() => setCelestialBodyCall(!celestialBodyCall)}>Celestial Bodies</HeaderLink>
        <HeaderLink to="/planetarysystems" onClick={() => setPlanetarySystemCall(!planetarySystemCall)}>Planetary Systems</HeaderLink>
        <CreateLink to="/create">Create Planetary Systems</CreateLink>
      </Links>
      <CurrencyChangeButton/>
    </HeaderWrapper>
  );
};
