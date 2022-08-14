import React from 'react'
import { IProduct } from '../interfaces/interfaces'
import { CardContainer, CardContent } from './ProductCardStyled'

type Props = {
  product: IProduct
}

const ProductCard = ({product}: Props) => {
  return (
    <CardContainer>
      <input type="checkbox" name="" id={product.SKU} className='delete-checkbox' />
      <CardContent>
      <p>{product.SKU}</p>
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      
      <p>{product.type.name}</p>
      <p>{product.type.nameAttribute}: {product.type.value} {product.type.measureUnit}</p>
      </CardContent>
    </CardContainer>
  )
}

export default ProductCard