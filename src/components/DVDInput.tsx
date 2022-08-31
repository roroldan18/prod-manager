import { Field } from 'formik'
import React from 'react'
import { PropsAtt } from './BookInput'
import { ContInput, ErrorForm, Info, Label } from './ProductAddStyled'


const DVDInput = ({values, handleChange}: PropsAtt) => {
  return (
    <>
      <ContInput>
        <Label>Size (MB)</Label>
        
        <Field 
          type="number" 
          name={`attributes[0].size`} 
          onChange={handleChange}
          value={values.attributes[0].size || ''}
          />
        <ErrorForm name={`attributes[0].size`}  component="div" />
      </ContInput>
      <Info>Please provide size in Mb of the DVD.</Info>
    </>
  )
}

export default DVDInput