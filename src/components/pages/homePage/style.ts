import styled from "styled-components";
import { Grid } from "@mui/material";

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
`;
