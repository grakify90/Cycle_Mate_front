import styled from "styled-components";
import color from "../styles/_colors";

export const HiddenAboutMe = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: ${color.apple};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 105%;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const Participant = styled.p`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  :hover ${HiddenAboutMe} {
    visibility: visible;
`;
