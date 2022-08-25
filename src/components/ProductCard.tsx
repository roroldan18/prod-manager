import React from 'react'
import { firstUp } from '../helpers/firstLetterUpper'
import { IProduct } from '../interfaces/interfaces'
import { handleChangeInt } from './ProductAdd'
import { CardContainer, CardContent } from './ProductCardStyled'

type Props = {
  product: IProduct
  handleChange: handleChangeInt,
  values:{},
}

const ProductCard = ({product, handleChange}: Props) => {
  return (
    <CardContainer>
      <input type="checkbox" name={product.SKU} id={product.SKU} onChange={handleChange} value="true" className='delete-checkbox' />
      <CardContent>
      <p>{product.SKU}</p>
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      
      <p>{product.type.name}</p>
      {
        product.type.attribute?.map((att, index) => 
          <p key={index}>{firstUp(att.name)}: {att.measureUnit} {att.value}</p>
          )
      }
      </CardContent>
    </CardContainer>
  )
}

export default ProductCard