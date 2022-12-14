import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BtnSection, Button, NavSect, SectForm, Section, SubTitle } from '../StylesMain';
import { ContInput, Label, ErrorForm, FormSect } from './ProductAddStyled';
import { typeProd } from '../interfaces/interfaces';
import { Field, FieldArray, Formik } from 'formik';
import BookInput from '../components/BookInput';
import DVDInput from '../components/DVDInput';
import FurnitureInput from '../components/FurnitureInput';
import { addProduct } from '../services/products';
import { formSchema } from '../schemas/formModelValidation.schema';


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
    height?: number,
    size?: number,
    length?: number
  }
  ]
}


const ProductAdd = () => {

  const navigate = useNavigate();

  const initialValues:formFormik = {
    SKU: '',
    name: '',
    price: 0,
    type: '',
    attributes: [{}]
  }

  const typesProduct:typeProd[] = ['Book', 'DVD', 'Furniture'];
  const [selectedType, setSelectedType] = useState<typeProd>('' as typeProd);

  const handleChangeSelect =(e:React.ChangeEvent<HTMLSelectElement>, handleChange:handleChangeInt, setFieldValue:(field: string, value: any, shouldValidate?: boolean | undefined)=> void ) => {
    handleChange(e);
    setSelectedType(e.target.value as typeProd);
    //On Change Select, reset the attributes array.
    setFieldValue("attributes", initialValues.attributes);
  }

  const handleSubmitAdd = async (values:any) => {
    addProduct(values)
      .then(res => {
        navigate("/", {replace:true})
      })
      .catch(err => {
        alert(err)
      })
  }

  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm } ) => {
        handleSubmitAdd(values);
        setSubmitting(false);
        resetForm();
      }}
      validationSchema={formSchema}
      >
      {({
        values,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormSect onSubmit={handleSubmit} id="product_form">
            <Section>
              <NavSect>
                <SubTitle>ProductAdd</SubTitle>
                <BtnSection>
                  <Button type="submit" disabled={isSubmitting}>Save</Button>
                  <Link to="/"><Button>Cancel</Button></Link>
                </BtnSection>
              </NavSect>
            </Section>

            <SectForm>
              <ContInput>
                <Label htmlFor="SKU">SKU</Label>
                <input 
                  id="sku"
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
                  id="name"
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
                  id="price"  
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
                  onChange={ (e:React.ChangeEvent<HTMLSelectElement>) => handleChangeSelect(e, handleChange, setFieldValue) } 
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
                      selectedType==='DVD'
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