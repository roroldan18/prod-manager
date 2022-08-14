import React from 'react'
import { Link } from 'react-router-dom';
import { BtnSection, Button, NavSect, Section, SubTitle } from '../StylesMain';

const ProductAdd = () => {
  return (
    <>
    <Section>
      <NavSect>
        <SubTitle>ProductAdd</SubTitle>
        <BtnSection>
          <Button>Save</Button>
          <Button><Link to="/">Cancel</Link></Button>
        </BtnSection>
      </NavSect>
    </Section>
    <Section>
      <form id="product_form">
        <div>
          <label htmlFor="SKU">SKU</label>
          <input type="text" name="SKU" id="SKU" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="price">Price ($)</label>
          <input type="number" name="price" id="price" />
        </div>
        <div>
          <label htmlFor="type">Type Switcher</label>
          <select name="type" id="type">
            <option value="">Select a type</option>
            <option value="Book" id='Book'>Book</option>
            <option value="DVD-disc" id='DVD'>DVD</option>
            <option value="Furniture" id='Furniture'>Furniture</option>
          </select>
        </div>
      </form>
    </Section>
    </>
  )
}

export default ProductAdd;