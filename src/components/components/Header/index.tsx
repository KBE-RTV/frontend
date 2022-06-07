import logo from "../../../assets/Logo.png";
import { HeaderLink, HeaderWrapper, Links, Logo, LogoLink } from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <Logo src={logo} />
      </LogoLink>
      <Links>
        <HeaderLink to="">CELESTIAL BODIES</HeaderLink>
        <HeaderLink to="">PLANETARY SYSTEMS</HeaderLink>
      </Links>
    </HeaderWrapper>
  );
};
