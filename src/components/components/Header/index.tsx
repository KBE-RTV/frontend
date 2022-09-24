import { useRecoilState } from "recoil";
import logo from "../../../assets/Logo.png";
import CurrencyChangeButton from "../CurrencyChangeButton";
import { HeaderLink, HeaderWrapper, Links, Logo, LogoLink } from "./styles";
import { planetarySystemCallState } from "../../../states/planetarySystemCallState";

export const Header = () => {
  const [planetarySystemCall, setPlanetarySystemCall] = useRecoilState(planetarySystemCallState);
  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <Logo src={logo} />
      </LogoLink>
      <Links>
        <HeaderLink to="/celestialbodies">CELESTIAL BODIES</HeaderLink>
        <HeaderLink to="/planets" onClick={() => setPlanetarySystemCall(!planetarySystemCall)}>PLANETARY SYSTEMS</HeaderLink>
      </Links>
      <CurrencyChangeButton/>
    </HeaderWrapper>
  );
};
