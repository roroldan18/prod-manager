import React from 'react'
import { BtnSection, Button, Footer, NavSect, Section, SubTitle } from '../StylesMain'
import { products } from '../../database';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <>
      <Section>
        <NavSect>
          <SubTitle>ProductList</SubTitle>
          <BtnSection>
            <Button><Link to="/addproduct">ADD</Link></Button>
            <Button>MASS DELETE</Button>
          </BtnSection>
        </NavSect>
      </Section>
      <Section>
        {
          products.map(product => (
            <ProductCard key={product.SKU} product={product} />
          ))
        }
      </Section>
      <Footer>
        Scandiweb Test Assignment
      </Footer>
    </>
  )
}

export default ProductList