import styled from "styled-components";
import color from "./colors";

export const Button = styled.button`
color: ${color.darkestgrey};
    font-family: "Courier New", Courier, monospace ;
    font-weight: bold;
    text-decoration: none;
    background: #ffffff;
    padding: 10px;
    margin: 0 auto;
    border: 3px solid ${color.darkestgrey};
    display: inline-block;
    transition: all 0.4s ease 0s;
    
    :hover {
        color: #ffffff;
        background: ${(props) =>
          props.primary ? color.armygreen : color.darklila};
        border-color: ${(props) =>
          props.primary ? color.armygreen : color.darklila};
        transition: all 0.4s ease 0s;

        @media screen and (max-width: 600px) {
            button {
              background: ${(props) =>
                props.primary ? color.armygreen : color.darklila};
              color: #ffffff;
            }
`;
