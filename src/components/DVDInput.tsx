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
          name="size"
          onChange={handleChange}
          value={values.size}
          />
        <ErrorForm name="size" component="div" />
      </ContInput>
      <Info>Please provide size in Mb of the DVD.</Info>
    </>
  )
}

export default DVDInput