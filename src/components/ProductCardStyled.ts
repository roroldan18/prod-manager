import styled from "styled-components";


export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid black;
  margin: 2em;
  height: auto;
  width: 15em;
  @media only screen and (max-width: 600px) {
    width: 10em;
  }
  input{
    position: absolute;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.5em;
  p{
    text-align: center;
    font-size: 0.9  em;
    margin: 0;
  }

`;