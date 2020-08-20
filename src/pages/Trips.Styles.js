import styled from "styled-components";
import color from "../styles/_colors";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
  background-color: ${color.whitesmoke};
  border: 1px ${color.greysmoke} solid;
  border-radius: 5px;
`;

export const InnerFilterContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
`;

export const FilterBar = styled.label`
  background-color: ${color.darkgrey};
  padding: 1px 18px;
  margin: 0 5px;
  color: white;
  font-family: "Courier New", Courier, monospace;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 20vw;
  height: 8px;
  background-color: black;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  opacity: 0.7;
  margin: 4px 0;
  justify-self: center;
  text-align: center;
}

  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 999px;
    background: black;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: black;
    border: 1px solid black;
    border-radius: 999px;
    cursor: pointer;
  }
`;
