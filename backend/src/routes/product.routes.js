import express from "express";
import { 
  getAllProducts, 
  searchProducts,
  getFilteredProducts,
  createProduct,
  createMultipleProducts,
  getCategories
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getFilteredProducts);  
router.get("/search", searchProducts);
router.get("/products/all", getAllProducts); // basic endpoint to get all product
router.post("/products", createProduct);
router.post("/products/bulk", createMultipleProducts); // bulk insert via postman
router.get("/categories", getCategories);


export default router;