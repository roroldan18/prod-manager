import axios from 'axios';
import { formFormik } from '../pages/ProductAdd';
import { attributeJSON } from '../../server/src/routes/productsRouter';


/* const host = process.env.SERVER_HOST as string;
const port = process.env.SERVER_PORT as string;
const productsEndP = process.env.SERVER_PRODUCTS_ENDPOINT as string;
const url = `${host}:${port}${productsEndP}`; */
const url = '/products'; //correction for netlify

export const getProducts = async () =>{
  return await axios.get(url+'/');
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

interface ObjToPost {
  SKU: string,
  name: string,
  price: number,
  type: string,
  attributes: attributeJSON[]
}

//Add Product
export const addProduct = async (values:formFormik) => {

  if(values.type === "DVD"){
    values.type = "DVD-disc";
  }

  //1. convert attribute names in object with ID 
  const getIdAttObj = await axios.post(url+'/attributes/', {
    attributes: values.attributes
  }) 
  const attArray = getIdAttObj.data;
  
  //2. convert typeName in idType
  const getIdType = await axios.post(url+'/types/', values.type) 
  const idType = getIdType.data;

  //3 Create object to post
  const obj:ObjToPost = {
    SKU: values.SKU,
    name: values.name,
    price: values.price,
    type: idType,
    attributes: attArray
  }
  
  return await axios.post(url+'/', obj);
}



