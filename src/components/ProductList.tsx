import React from 'react';
import { BtnSection, Button, NavSect, Section, SubTitle } from '../StylesMain'
import { products } from '../../database';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { FormSect } from './ProductAddStyled';
import { Formik } from 'formik';


const ProductList = () => {

  const handleSubmitDelete = (values:any) => {
    console.log('submit');    
    const objToDelete = []; 
    objToDelete.push(...Object.keys(values).filter(key => values[key] === true ));


    if(objToDelete.length ===0){
      alert('Nothing to delete')
    } else {
      console.log('ACCION PARA BORRAR')
      console.log(objToDelete);
    }
  }


  const initialValues = {
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmitDelete(values)
        setSubmitting(false);
      }}
      >
      {({
        values,
        handleSubmit,
        handleChange,
        isSubmitting,
      }) => (
        <FormSect onSubmit={handleSubmit}>
          <Section>
            <NavSect>
              <SubTitle>ProductList</SubTitle>
              <BtnSection>
                <Button><Link to="/addproduct">ADD</Link></Button>
                <Button id='delete-product-btn' type="submit" disabled={isSubmitting}>MASS DELETE</Button>
              </BtnSection>
            </NavSect>
          </Section>
          <Section>
            {
              products.map(product => (
                <ProductCard key={product.SKU} product={product} handleChange={handleChange} values={values} />
              ))
            }
          </Section>
        </FormSect>
      )
    }
    </Formik>
  )
}

export default ProductList