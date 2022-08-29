import axios from 'axios';

const url = 'http://localhost:3000/products'

export const getProducts = async () =>{
  return await axios.get(url);
} 

//Delete mass

export const deleteMassProducts = async (arrToDelete:string[]|[]) =>{
  try {
    arrToDelete.forEach(async SKU => {
      await axios.delete(`${url}/${SKU}`)
    })
    return {message: 'deleted'}
  } catch (error) {
    return error;
  }
} 

//Add Product