import React from 'react'
import { Field } from 'formik'
import { PropsAtt } from './BookInput'
import { ContInput, ContInputs, ErrorForm, Info, Label } from '../pages/ProductAddStyled'

const FurnitureInput = ({values, handleChange}: PropsAtt) => {
  return (
    <>
      <ContInputs>
        <ContInput>
          <Label>Length (cm)</Label>
          <Field 
            type="number" 
            name={`attributes[0].length`} 
            onChange={handleChange}
            value={values.attributes[0].length || ''}
            />
            <ErrorForm name={`attributes[0].length`} component="div" />
        </ContInput>
        <ContInput>
          <Label>Width (cm)</Label>
          <Field 
            type="number" 
            name={`attributes[0].width`}
            onChange={handleChange}
            value={values.attributes[0].width || ''}
            />
            <ErrorForm name={`attributes[0].width`} component="div" />
        </ContInput>
        <ContInput>
          <Label>Height (cm)</Label>
          <Field 
            type="number" 
            name={`attributes[0].height`}
            onChange={handleChange}
            value={values.attributes[0].height || ''}
            />  
            <ErrorForm name={`attributes[0].height`} component="div" />        
        </ContInput>
      </ContInputs>
      <Info>Please provide dimensions in HxWxL format of the furniture.</Info>
    </>
  )
}

export default FurnitureInput