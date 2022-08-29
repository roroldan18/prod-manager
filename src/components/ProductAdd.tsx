import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BtnSection, Button, NavSect, SectForm, Section, SubTitle } from '../StylesMain';
import { ContInput, Label, ErrorForm, FormSect } from './ProductAddStyled';
import { typeProd } from '../interfaces/interfaces';
import { Field, FieldArray, Formik, yupToFormErrors } from 'formik';
import BookInput from './BookInput';
import DVDInput from './DVDInput';
import FurnitureInput from './FurnitureInput';
import * as Yup from 'yup';


export type handleChangeInt = {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}

export interface formFormik {
  SKU: string,
  name: string,
  price: number,
  type: string,
  attributes: [
    {
    weight?: number,
    width?: number,
    height?:number,
    size?:number,
    length?:number
  }
  ]
}


const ProductAdd = () => {
  const formSchema = Yup.object().shape({
    SKU: Yup.string()
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    price: Yup.number()
      .min(1, 'Insert a price')
      .required('Required'),
    type: Yup.string()
      .required('Required'),
    attributes: Yup.array()
      .when("type", {
        is: "Book",
        then: Yup.array().of(
          Yup.object().shape({  
            weight: Yup.number() 
            .required("Must add a weight")
            .min(1, 'Insert a weight')
          })
        )
      })
      .when("type", {
        is: "DVD-disc",
        then: Yup.array().of(
          Yup.object().shape({  
            size: Yup.number()
              .required("Must add a size")
              .min(1, 'Insert a size')
            })
        )
      })
      .when("type", {
        is: "Furniture",
        then: Yup.array().of(
          Yup.object().shape({  
            length: Yup.number() 
                .required("Must add a length")
                .min(15, 'Insert a length'),
            width: Yup.number() 
                  .required("Must add a width")
                  .min(15, 'Insert a width'),
            height: Yup.number() 
                  .required("Must add a height")
                  .min(15, 'Insert a height')
            })
        )
      })
  });

  const initialValues:formFormik = {
    SKU: '',
    name: '',
    price: 0,
    type: '',
    attributes: [
      {}
    ]
  }

  const typesProduct:typeProd[] = ['Book', 'DVD-disc', 'Furniture'];

  const [selectedType, setSelectedType] = useState<typeProd>('' as typeProd);

  const handleChangeSelect =(e:React.ChangeEvent<HTMLSelectElement>, handleChange:handleChangeInt) => {
    handleChange(e);
    setSelectedType(e.target.value as typeProd)
  }


  const handleSubmitAdd = (values:any) => {
    console.log(values);
    //Create a new Form to send to database
  }

  

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmitAdd(values)
        setSubmitting(false);
      }}
      >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormSect onSubmit={handleSubmit}>
            <Section>
              <NavSect>
                <SubTitle>ProductAdd</SubTitle>
                <BtnSection>
                  <Button type="submit" disabled={isSubmitting}>Save</Button>
                  <Button><Link to="/">Cancel</Link></Button>
                </BtnSection>
              </NavSect>
            </Section>

            <SectForm>
              <ContInput>
                <Label htmlFor="SKU">SKU</Label>
                <input 
                  type="text" 
                  name="SKU" 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.SKU}
                />
                <ErrorForm name="SKU" component="div" />
              </ContInput>
              <ContInput>
                <Label htmlFor="name">Name</Label>
                <Field 
                  type="text" 
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  />
                  <ErrorForm name="name" component="div" />
              </ContInput>
              <ContInput>
                <Label htmlFor="price">Price ($)</Label>
                <Field 
                  type="number" 
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                  />
                  <ErrorForm name="price" component="div" />
              </ContInput>

              <ContInput>
                <Label htmlFor="type">Type Switcher</Label>
                <Field 
                  as="select" 
                  id="productType" 
                  name="type" 
                  onChange={ (e:React.ChangeEvent<HTMLSelectElement>) => handleChangeSelect(e, handleChange) } 
                  value={values.type}
                >
                    <option value="" disabled >Select a type</option>
                    {
                      typesProduct.map(type => (
                        <option key={type} value={type}>{type}</option>
                        ))
                    }
                </Field>
                <ErrorForm name="type" component="div" />
              </ContInput>
              
              <FieldArray
                name='attributes'
                render={arrayHelpers => (
                  
                      selectedType === 'Book'
                      ?
                      <BookInput handleChange={handleChange} values={values}  />
                      :
                      selectedType==='DVD-disc'
                      ?
                      <DVDInput handleChange={handleChange} values={values} />
                      :
                      selectedType==='Furniture'
                      &&
                      <FurnitureInput handleChange={handleChange} values={values}  />
                )}
              />
                
            </SectForm>
          </FormSect>
      )}
      </Formik>
  )
}

export default ProductAdd;