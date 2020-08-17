import styled from "styled-components";
import color from "../styles/_colors";

export const TopicContent = styled.div`
  background-color: ${color.armygreen};
  margin-bottom: 10px;
  border: 1px white solid;
  border-radius: 5px;
  padding: 0 10px;
  img {
    width: 100%;
  }
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #c6e377;
  color: #ffffff;
  align-items: center;
  padding: 2vw;
  margin: 4vh 0;

  input:first-child {
    width: 90%;
    height: 50px;
  }
  input {
    margin: 10px 0;
  }
`;
