import styled from "styled-components";
import color from "../styles/colors";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  border: 1px solid black;
  align-items: center;
  padding: 2vw;
  box-shadow: 10px 10px 0px 1px rgba(0, 0, 0, 0.75);
  margin: 4vh 0;
  transition: all 0.2s ease-in-out;
  p {
    text-decoration: none;
  }

  :hover {
    transform: scale(1.07);

    @media screen and (max-width: 600px) {
          box-shadow: none;
        :hover {
          transform: none;
        }
      
`;

export const CardCircle = styled.div`
  color: #ffffff;
  background-color: ${(props) =>
    props.primary ? color.darkgreen : color.darkpurple};
  border-radius: 999px;
  display: flex;
  flex-direction: column;
  line-height: 70%;
  justify-content: center;
  height: 110px;
  width: 110px;
`;
