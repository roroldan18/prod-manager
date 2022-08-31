import { Field} from 'formik'
import React from 'react'
import { ContInput, Info, Label, ErrorForm } from './ProductAddStyled';
import { formFormik, handleChangeInt } from './ProductAdd';

export interface PropsAtt {
  handleChange: handleChangeInt,
  values:formFormik,
}

const BookInput = ({values, handleChange}: PropsAtt) => {
  return (
    <>
      <ContInput>
        <Label>Weight (KG)</Label>
        <Field 
          type="number" 
          name={`attributes[0].weight`} 
          onChange={handleChange}
          value={values.attributes[0].weight || ''}
          />
        <ErrorForm name={`attributes[0].weight`} component="div" />
      </ContInput>
      <Info>Please provide the weight in Kg of the book.</Info>
    </>
  )
}

export default BookInput