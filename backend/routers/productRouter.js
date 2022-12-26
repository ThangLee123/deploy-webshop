const productRouter = require("express").Router();
const productController = require("../controllers/productController");

const authMiddle = require("../middlewares/authMiddleware");

productRouter.post("/", productController.getAllProducts); //m
productRouter.post(
  "/",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.productElement
);

productRouter.post("/seed", productController.createProductSeed); //m
productRouter.post("/:id", productController.getProductById); //m

productRouter.put(
  "/:id",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.editProduct
);

productRouter.delete(
  "/:id",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  productController.deleteProduct
);

productRouter.post(
  "/:id/reviews",
  authMiddle.isAuth,
  productController.createProductReview
);
module.exports = productRouter;
