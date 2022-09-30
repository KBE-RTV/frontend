import styled from "styled-components";

export const HomePageContent = styled.div`
`;

export const ContentContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CelestialBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightColumnContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameInputLabel = styled.label`
  color: white;
  align-self: flex-start;
  line-height: 2.5em;
  font-size: 25px;
`;

export const NameInputField = styled.input`
  float: left;
  width: 200px;
  height: 25px;
}
`;

export const PlanetarySystemGraphicContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const CreateButton = styled.button`
  color: #3A7FBE;
  border: 2px solid #3A7FBE;
  font-size: 15px;
  background: none;
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
  align-self: flex-start;
  text-transform: uppercase;

  &:hover {
      color: #7db4e8;
      font-weight: bold;
  }
`;
