import styled from 'styled-components';

const mainColor = '#00bcd4';
const backgroundColorPrim = '#e8f1f3';

const secondaryColor = '#ff4081';
const backgroundColorSecond = '#f3e8eb';

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
  color: ${mainColor};
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5em;
  color: ${secondaryColor};
`;

export const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const Button = styled.button`
  margin: 0.5em;
  cursor: pointer;
  background-color: white;
  border: 2px solid ${mainColor};
  background-color: ${backgroundColorPrim};
  transition: 200ms;
  font-size: 1em;
  letter-spacing: 0.2em;

  @media only screen and (max-width: 600px) {
    font-size: 0.3em;
    letter-spacing: 0;
  }
  
  a{
    text-decoration: none;
  }


  :hover{
    border: 3px solid ${secondaryColor};
    background-color: ${backgroundColorSecond};
  }
`;


export const NavSect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Footer = styled.footer`
width: 100%;
font-size: 0.7em;
margin: 2em 0;
text-align: center;
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 2em;
  padding: 2em;
  min-height: 50em;
  background-color: #f5f5f5;
  -webkit-box-shadow: 5px 5px 15px -3px #000000; 
  box-shadow: 5px 5px 15px -3px #000000;

`;