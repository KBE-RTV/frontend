import styled from "styled-components";

interface OrbitProperties {
  widthAndHeight: string;
  marginTopAndLeft: string;
  speed?: string;
}

export const PlanetarySystemWrapper = styled.div`
  position: relative;
  width: 780px;
  height: 780px;
  margin: auto;
  overflow: hidden;
`;

export const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 200px;
  background-color: #fae20a;
  margin-top: -100px;
  margin-left: -100px;
  border-radius: 50%;
  box-shadow: 0 0 84px orange;
  border-radius: 50%;
`;

export const Earth = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  height: 50px;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  box-shadow: 0 0 34px #3a4385;
`;

export const Moon = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -6px;
  margin-left: -6px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 14px #3a4385;
  border-radius: 50%;
`;

export const Venus = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
  height: 40px;
  width: 40px;
  background-color: #3498db;
  box-shadow: 0 0 34px #3a4385;
  border-radius: 50%;
`;

export const Mercury = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -13.5px;
  margin-left: -13.5px;
  height: 25px;
  width: 25px;
  background-color: #a65e22;
  border-radius: 50%;
`;

export const Mars = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: -16px;
  margin-left: -16px;
  height: 32px;
  width: 32px;
  background-color: #863222;
  box-shadow: 0 0 14px #a64232;
  border-radius: 50%;
`;

export const PlanetWrapper = styled.div<OrbitProperties>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: ${(props) => props.widthAndHeight};
  height: ${(props) => props.widthAndHeight};
  margin-left: ${(props) => props.marginTopAndLeft};
  margin-top: ${(props) => props.marginTopAndLeft};
  animation: spin-right ${props => props.speed} linear infinite;
`;

export const Orbit = styled.div<OrbitProperties>`
  border: 1px dashed #666;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: ${(props) => props.widthAndHeight};
  height: ${(props) => props.widthAndHeight};
  margin-left: ${(props) => props.marginTopAndLeft};
  margin-top: ${(props) => props.marginTopAndLeft};
`;
