import styled from "styled-components";
import color from "./_colors";

export const TitleBlock = styled.span`
  background-color: ${(props) =>
    props.primary ? color.darkapple : color.darklila};
  display: inline-block;
  margin: 3px 0;
  height: 18px;
  padding: 1px 18px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
`;
