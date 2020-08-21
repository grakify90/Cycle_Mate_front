import styled from "styled-components";
import color from "../styles/_colors";

export const HomeContainer = styled.div`
  text-align: center;
  width: 50vw;
  color: white;
  padding: 10px;
  margin: 0 auto;
  background-color: ${color.greysmoke};
  border-radius: 5px;

  img {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
  @media screen and (min-width: 1200px) {
    width: 40vw;
    padding: 30px 100px;
  }
`;
