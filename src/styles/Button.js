import styled from "styled-components";
import color from "./colors";

export const Button = styled.button`
color: ${color.darkestgrey};
    font-family: "Courier New", Courier, monospace ;
    font-weight: bold;
    text-decoration: none;
    background: #ffffff;
    padding: 10px;
    border: 3px solid ${color.darkestgrey};
    display: inline-block;
    transition: all 0.4s ease 0s;
    
    :hover {
        color: #ffffff;
        background: ${color.armygreen};
        border-color: ${color.armygreen};
        transition: all 0.4s ease 0s;

        @media screen and (max-width: 600px) {
            button {
              background: ${color.armygreen};
              color: #ffffff;
            }
`;

export const PurpleButton = styled(Button)`
:hover{
    background: ${color.darklila};
    border-color: ${color.darklila};
}
@media screen and (max-width: 600px) {
    button {
      background: ${color.darklila};
    }
`;
