import styled from "styled-components";

export const Container = styled.div`
display: flex;
    width: 60vw;
    margin: 0 auto;
    flex-direction: column;
  img {
    width: 100%;
  }
    
    @media screen and (max-width: 600px) {
          width: 100vw;
        }
      }
      
      @media screen and (min-width: 1200px) {
          width: 40vw;
        }
`;
