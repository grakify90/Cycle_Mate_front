import styled from "styled-components";
import color from "./colors";

export const InnerDetailContainer = styled.div`
  display: grid;
  background-color: ${(props) =>
    props.primary ? color.darkgreen : color.lila};
  color: #ffffff;
  border-radius: 5px;
  padding: 2vw;

  @media screen and (max-width: 600px) {
    padding: 6vw;
  }
`;
