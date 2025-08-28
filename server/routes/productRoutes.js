import { Router } from "express";
import { getAllProducts } from "../controllers/productController.js";
import { getAllProduct,getProductTesting } from "../controllers/productDb.js"
const router = Router();

// router.get('/products', getAllProducts);
router.get('/products', getAllProduct);
router.get('/products/testing',getProductTesting)
export default router;