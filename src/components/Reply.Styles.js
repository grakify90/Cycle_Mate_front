import styled from "styled-components";
import color from "../styles/_colors";

export const ReplyContainer = styled.div`
  position: relative;
  font-size: 1.1em;
  background: ${color.darkapple};
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 100%;
  margin: 10px 0;

  img {
    width: 100%;
  }

  :after {
    content: "";
    border: 20px solid transparent;
    border-right-color: ${color.darkapple};
    border-left: 0;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -50px;
  }
`;
