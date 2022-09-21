import styled from "styled-components";

interface OrbitProperties {
  widthAndHeight: string;
  marginTopAndLeft: string;
}

export const PlanetarySystemWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  margin: auto;
  overflow: hidden;
`;

export const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30px;
  width: 30px;
  background-color: #fae20a;
  margin-top: -18px;
  margin-left: -18px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgb(255 255 255 / 80%);
`;

export const Mercury = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 9px;
  margin-left: -24px;
  height: 5px;
  width: 5px;
  background-color: #a1a1a1;
  border-radius: 50%;
`;

export const Venus = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 16px;
  margin-left: 38px;
  height: 12px;
  width: 12px;
  background-color: #f5cc96;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
  border-radius: 50%;
`;

export const Earth = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 12.7px;
  width: 12.7px;
  margin-left: -25px;
  margin-top: -3px;
  border-radius: 50%;
  background-color: #495391;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
`;

export const Mars = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 110px;
  margin-left: 114px;
  height: 6.7px;
  width: 6.7px;
  background-color: #b95730;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
  border-radius: 50%;
`;

export const Jupiter = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 142px;
  margin-left: 125px;
  height: 38.4px;
  width:38.4px;
  background-color: #d5ba8e;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
  border-radius: 50%;
  z-index: 1;
`;

export const Saturn = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 3px;
  margin-left: 54px;
  height: 19.5px;
  width: 19.5px;
  background-color: #dab37a;
  box-shadow: 0 0 0 0.1em #000, 0 0 0.1em 0.4em #8f6200, inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
  border-radius: 50%;
`;

export const Uranus = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 68px;
  margin-left: -168px;
  height: 18px;
  width: 18px;
  background-color: #c4eaed;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
  border-radius: 50%;
`;

export const Neptune = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 392px;
  margin-left: -176px;
  height: 17.5px;
  width: 17.5px;
  background-color: #6393e5;
  box-shadow: inset 0 0.4rem 0.8rem rgb(0 0 0 / 20%), inset 0 -0.4rem 0.4rem rgb(255 255 255 / 20%);
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
