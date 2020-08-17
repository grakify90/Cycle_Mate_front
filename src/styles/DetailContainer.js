import styled from "styled-components";
import color from "./colors";

export const DetailContainer = styled.div`
  text-align: ${(props) => (props.primary ? "center" : "left")};
  width: 50vw;
  margin: 0 auto;
  background-color: ${(props) => (props.primary ? color.lila : "none")};

  @media screen and (max-width: 600px) {
    width: 100vw;
  }

  @media screen and (min-width: 1200px) {
    width: 30vw;
  }
`;
