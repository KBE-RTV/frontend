import { useRecoilState } from "recoil";
import logo from "../../../assets/Logo.png";
import CurrencyChangeButton from "../CurrencyChangeButton";
import { CreateLink, HeaderLink, HeaderWrapper, Links, LoginButton, Logo, LogoLink } from "./styles";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";
import { celestialBodyCallState } from "../../../states/celestialBodyCallState";
import { useKeycloak } from "@react-keycloak/web";

export const Header = () => {
  const [planetarySystemCall, setPlanetarySystemCall] = useRecoilState(planetarySystemCallState);
  const [celestialBodyCall, setCelestialBodyCall] = useRecoilState(celestialBodyCallState);
  const { keycloak, initialized } = useKeycloak();

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
      {!keycloak.authenticated && (
        <LoginButton
          type="button"
          onClick={() => keycloak.login()}
        >
          Login
        </LoginButton>
      )}
      {keycloak.authenticated && (
        <LoginButton
          type="button"
          onClick={() => keycloak.logout()}
        >
          Logout
        </LoginButton>
      )}
    </HeaderWrapper>
  );
};
