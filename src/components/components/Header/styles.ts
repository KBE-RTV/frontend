import { Grid } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled(Grid)`
  height: 60px;
  font-family: Arial, sans-serif;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: space-between;
`;

export const Links = styled(Grid)`
  padding: 1.5em 0 1.3em 1.5em;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-weight: bolder;
  text-decoration: none;
  padding-right: 3em;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.09em;
    text-underline-offset: 8px;
    text-decoration-color: #3A7FBE;
  }

  &[class*="active"] {
    text-decoration: underline;
    text-decoration-thickness: 0.09em;
    text-underline-offset: 8px;
    text-decoration-color: #3A7FBE;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 30px;
  width: auto;
`;
