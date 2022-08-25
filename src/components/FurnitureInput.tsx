import React from 'react'
import { Field } from 'formik'
import { PropsAtt } from './BookInput'
import { ContInput, ContInputs, ErrorForm, Info, Label } from './ProductAddStyled'

const FurnitureInput = ({values, handleChange}: PropsAtt) => {
  return (
    <>
      <ContInputs>
        <ContInput>
          <Label>Height (cm)</Label>
          <Field 
            type="number" 
            name="height"
            onChange={handleChange}
            value={values.height}
            />
            <ErrorForm name="height" component="div" />
        </ContInput>
        <ContInput>
          <Label>Width (cm)</Label>
          <Field 
            type="number" 
            name="width"
            onChange={handleChange}
            value={values.width}
            />
            <ErrorForm name="width" component="div" />
        </ContInput>
        <ContInput>
          <Label>Length (cm)</Label>
          <Field 
            type="number" 
            name="length"
            onChange={handleChange}
            value={values.length}
            />  
            <ErrorForm name="length" component="div" />        
        </ContInput>
      </ContInputs>
      <Info>Please provide dimensions in HxWxL format of the furniture.</Info>
    </>
  )
}

export default FurnitureInput