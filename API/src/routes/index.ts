import express from "express";

import getAllProducts from "./products/getAll";
import getAllCategories from "./categories/getAll";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/categories", getAllCategories);

export default router;
