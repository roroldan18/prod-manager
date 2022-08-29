import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import db from 'src/bin/connection';
import { QueryTypes } from 'sequelize';
import { convertSQLToObject } from 'src/helpers/prodFormat';
import { ProdSQL } from 'src/interfaces/interfaces';

// Constants
const router = Router();
const { CREATED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

// Paths
export const p = {
    get: '/',
    add: '/',
    delete: '/:SKU',
} as const;

/**
 * Get all products with its info.
 */
router.get(p.get, async (_: Request, res: Response) => {
  const query = `SELECT p.SKU, p.name, p.price, t.name as "type", a.name as "attribute", a.measureUnit, pa.value FROM product as p
  JOIN type_product as t ON p.type_product_idtype_product=t.idtype_product
  JOIN product_has_attribute as pa ON p.SKU=pa.product_SKU
  JOIN attribute as a ON pa.attribute_idattribute=a.idattribute`;

  try {
    const products:ProdSQL[] = await db.query(query, {type: QueryTypes.SELECT });
    return res.status(OK).json(convertSQLToObject(products));
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR);
  }
});


interface attributeJSON {
  idAttribute: number,
  value: number,
}
/**
 * Add one product.
 */
router.post(p.add, async (req: Request, res: Response) => {

  const { SKU, name, price, type, attributes } = req.body;

  // Check if some value is missing
  if( !SKU || !name || !price || !type || !attributes || attributes.length === 0 ){
  return res.status(BAD_REQUEST).json({
    message: 'Some value is missing'
  });
  }

    try {

      // 1.Validate if product exists --> OK
      const queryProdSKU = `SELECT * FROM product WHERE SKU=${SKU}`;
      const prodWithSKU:ProdSQL[]|[] = await db.query(queryProdSKU, {type: QueryTypes.SELECT });
      if(prodWithSKU.length>0){
        return res.status(BAD_REQUEST).json({
          message: 'The product SKU already exists'
        });
      }
      
      // 2.Check if attributes are in type --> OK
      attributes.forEach( async(att:attributeJSON) => {
        const queryTypesAtt = `SELECT * FROM type_product_has_attribute WHERE type_product_idtype_product=${type} AND attribute_idattribute=${att.idAttribute};`
        const typesAtt = await db.query(queryTypesAtt, {type: QueryTypes.SELECT });
        if(typesAtt.length === 0){
          return res.status(BAD_REQUEST).json({
            message: 'The attribute assigned not match with the product type'
          });
        }
        
      })

      const queryAtt = `SELECT * FROM type_product_has_attribute WHERE type_product_idtype_product=${type};`
      const totalAtt = await db.query(queryAtt, {type: QueryTypes.SELECT });
      
      // 3. Check if all attributes were sent
      if(totalAtt.length !== attributes.length){
        return res.status(BAD_REQUEST).json({
          message: 'Attributes missing on the product type'
        });
      }

      // Once pass every validation, create the transaction
      await db.query("START TRANSACTION");
      await db.query("INSERT INTO product (SKU, name, price, type_product_idtype_product) VALUES (?,?,?,?)", {replacements: [SKU, name, price, type]});
      attributes.forEach(async (att:attributeJSON) => {
        await db.query("INSERT INTO product_has_attribute(product_SKU, attribute_idattribute, value) VALUES (?,?,?)", {replacements: [SKU, att.idAttribute, att.value]});
      });
      const commit = await db.query("COMMIT");
      
      return res.status(CREATED).json({
        data: commit,
        message: 'Product added successfully'}
      ); 

    } catch (error) {
      const rollback = await db.query("rollback");
      return res.status(INTERNAL_SERVER_ERROR).json({
        data: error,
        rollback
      });
    }
});


/**
 * Delete one product
 */
router.delete(p.delete, async (req: Request, res: Response) => {
  // Take SKU from params
    const { SKU } = req.params;
    // 1. Check param
    if (!SKU) {
      return res.status(BAD_REQUEST).json({
        message: 'SKU is missing for delete'
      });
    }

    try{
      // 2. Confirm if product exists
      const queryProdSKU = `SELECT * FROM product WHERE SKU=${SKU}`;
      const prodWithSKU:ProdSQL[]|[] = await db.query(queryProdSKU, {type: QueryTypes.SELECT });
      if(prodWithSKU.length===0){
        return res.status(BAD_REQUEST).json({
          message: 'The product SKU does not exist'
        });
      }
  
  
      // 1. Create transaction
      await db.query("START TRANSACTION");
      // 2. Delete all attributes for the SKU
      await db.query(`DELETE FROM product_has_attribute WHERE product_SKU=${SKU}`)
      // 3. Delete product
      await db.query(`DELETE FROM product WHERE SKU=${SKU}`)
      // 4. Commit transaction
      const commit = await db.query("COMMIT");
        
      
      return res.status(OK).json({
        data: commit,
        message: 'Product deleted'}
      );
    } catch (error){
      const rollback = await db.query("rollback");
      return res.status(INTERNAL_SERVER_ERROR).json({
        data: error,
        message: error,
        rollback
      });
    }
});


// Export default
export default router;
