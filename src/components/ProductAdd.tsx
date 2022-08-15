import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BtnSection, Button, NavSect, Section, SubTitle } from '../StylesMain';
import { ContInput, ContInputs, Form, Info, Label } from './ProductAddStyled';

const ProductAdd = () => {

  const [selected, setSelected] = useState('');
  const handleChange = (event:React.FormEvent) => setSelected((event.target as HTMLInputElement).value);

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
      <Form id="product_form">
        <ContInput>
          <Label htmlFor="SKU">SKU</Label>
          <input type="text" name="SKU" id="SKU" />
        </ContInput>
        <ContInput>
          <Label htmlFor="name">Name</Label>
          <input type="text" name="name" id="name" />
        </ContInput>
        <ContInput>
          <Label htmlFor="price">Price ($)</Label>
          <input type="number" name="price" id="price" />
        </ContInput>
        <ContInput>
          <Label htmlFor="type">Type Switcher</Label>
          <select name="type" id="productType" defaultValue='default' onChange={handleChange}>
            <option value="default" disabled >Select a type</option>
            <option value="Book" id='Book'>Book</option>
            <option value="DVD-disc" id='DVD'>DVD</option>
            <option value="Furniture" id='Furniture'>Furniture</option>
          </select>
        </ContInput>
        
          {
            selected==='Book'
            ?
            <>
              <ContInput>
                <Label>Weight (KG)</Label>
                <input type="number" />
              </ContInput>
              <Info>Please provide the weight in Kg of the book.</Info>
            </>
            :
            selected==='DVD-disc'
            ?
            <>
              <ContInput>
                <Label>Size (MB)</Label>
                <input type="number" />
              </ContInput>
              <Info>Please provide size in Mb of the DVD.</Info>
            </>
            :
            selected==='Furniture'
            ?
            <>
              <ContInputs>
                <ContInput>
                  <Label>Height (cm)</Label>
                  <input type="number" />
                </ContInput>
                <ContInput>
                  <Label>Width (cm)</Label>
                  <input type="number" />
                </ContInput>
                <ContInput>
                  <Label>Length (cm)</Label>
                  <input type="number" />
                </ContInput>
              </ContInputs>
              <Info>Please provide dimensions in HxWxL format of the furniture.</Info>
            </>
            :
            ''
          }
        
      </Form>
    </Section>
    </>
  )
}

export default ProductAdd;