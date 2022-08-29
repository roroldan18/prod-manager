import React from 'react'
import { firstUp } from '../helpers/firstLetterUpper'
import { AttrProduct, IProduct } from '../interfaces/interfaces'
import { handleChangeInt } from './ProductAdd'
import { CardContainer, CardContent } from './ProductCardStyled'

type Props = {
  product: IProduct
  handleChange: handleChangeInt,
  values:{},
}

const ProductCard = ({product, handleChange}: Props) => {

  const convertAttributes = (att:AttrProduct[]) => {
    return {
      units: att.map(a=>a.name.slice(0,1).toLocaleUpperCase()+'x').join('').slice(0, -1),
      values: att.map(a=>a.value+'x').join('').slice(0, -1),
    }
  };


  return (
    <CardContainer>
      <input type="checkbox" name={product.SKU.toString()} id={product.SKU.toString()} onChange={handleChange} value="true" className='delete-checkbox' />
      <CardContent>
      <p>{product.SKU}</p>
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      <p>{product.type}</p>
      {
        product.attributes.length > 1
        ?
        <p>{convertAttributes(product.attributes).units} ({product.attributes[0].measureUnit}): {convertAttributes(product.attributes).values} </p>
        :
        product.attributes?.map((att, index) => 
          <p key={index}>{firstUp(att.name)} ({att.measureUnit}): {att.value}</p>
          )
      }
      </CardContent>
    </CardContainer>
  )
}

export default ProductCard