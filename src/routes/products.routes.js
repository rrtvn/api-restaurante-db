import {Router} from 'express'
import * as productsCtrl from '../controllers/products.controller'

const router = Router()

//controlador utilizandose en la ruta
router.post('/', productsCtrl.createProduct) 

router.get('/', productsCtrl.getProduct) 

router.get('/:productId', productsCtrl.getProductById) 

router.put('/:productId', productsCtrl.updateProductById)

router.delete('/:productId', productsCtrl.deleteProductById)


export default router;