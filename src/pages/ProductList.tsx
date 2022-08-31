import React, { useEffect, useState } from 'react';
import { BtnSection, Button, NavSect, Section, SubTitle } from '../StylesMain'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FormSect } from '../components/ProductAddStyled';
import { Formik } from 'formik';
import { deleteMassProducts, getProducts } from '../services/products';
import { IProduct } from '../interfaces/interfaces';


const ProductList = () => {
  
  const [ products, setProducts ] = useState<IProduct[]>([]) 

  useEffect(() => {
    let isMounted = true;
    handleGetProducts(isMounted);
    return ()=>{isMounted=false}
  }, [])

  
  
  
  //VER PROBLEMA DE RENDERIZADO
  
  const handleSubmitDelete =  async(values:any) => {
    const arrToDelete = []; 
    arrToDelete.push(...Object.keys(values).filter(key => values[key] === true ));
    
    if(arrToDelete.length ===0){
      alert('Nothing to delete')
    } else {
      try{
        const res:any = await deleteMassProducts(arrToDelete);
        res.message === 'deleted' && window.location.reload();
      } catch (error){
        alert('An error occur')
      } 
    }
  }
  
  const handleGetProducts = async (isMounted:boolean) => {
    try{
      if(isMounted){
        const res  = await getProducts();
        setProducts(res.data)
      }
    }catch (error) {
      console.log('Hubo un error al obtener los productos');
    }
  }
  
 

  
  const initialValues = {};

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
                <Link to="/addproduct"><Button>ADD</Button></Link>
                <Button id='delete-product-btn' type="submit" disabled={isSubmitting}>MASS DELETE</Button>
              </BtnSection>
            </NavSect>
          </Section>
          <Section>
            {
              products.length > 0
              &&
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