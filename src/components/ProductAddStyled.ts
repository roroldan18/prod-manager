import { ErrorMessage } from "formik";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  width: 10em;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  //media query for mobile
  @media only screen and (max-width: 600px) {
    font-size: 1em;;
  }
`;

export const ContInput = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0;
`;

export const ContInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;


export const Info = styled.p`
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  };

  :before{
    content: "*";
  }
`;

export const ErrorForm = styled(ErrorMessage)`
  display: flex;
  color: red;
  font-weight: 600;
  margin-left: 0.5rem;
  align-items: center;
  font-size: 0.7em;
  :before{
    content: "* ";
  }
`