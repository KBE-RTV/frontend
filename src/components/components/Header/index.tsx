import logo from "../../../assets/Logo.png";
import CurrencyChangeButton from "../CurrencyChangeButton";
import { HeaderLink, HeaderWrapper, Links, Logo, LogoLink } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <Logo src={logo} />
      </LogoLink>
      <Links>
        <HeaderLink to="/celestialbodies">CELESTIAL BODIES</HeaderLink>
        <HeaderLink to="/planets">PLANETARY SYSTEMS</HeaderLink>
      </Links>
      <CurrencyChangeButton/>
    </HeaderWrapper>
  );
};
