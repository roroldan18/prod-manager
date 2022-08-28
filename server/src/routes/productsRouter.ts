import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import db from 'src/bin/connection';
import { QueryTypes } from 'sequelize';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/',
    add: '/',
    delete: '/:id',
} as const;



/**
 * Get all products.
 */
router.get(p.get, async (_: Request, res: Response) => {
  const query = "select * from product";
  const products = await db.query(query, {type: QueryTypes.SELECT });    
  

  res.status(OK).json(products);

});


/**
 * Add one product.
 */
// router.post(p.add, async (req: Request, res: Response) => {
  
//     const { nombre, apellido, tipo_documento, numero_documento, nombre_usuario, password } = req.body;

//     const { product } = req.body;
//     // Check param
//     if (!product) {
//         throw new ParamMissingError();
//     }
// //VALIDACIONES DE DATOS
//     else if()


//     // Fetch data
//     await userService.addOne(user);
//     return res.status(CREATED).end();
// });


/**
 * Delete one user.
 */
/* router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }

    //Confirmar si el producto existe.


    // Fetch data
    await userService.delete(Number(id));
    return res.status(OK).end();
}); */


// Export default
export default router;
