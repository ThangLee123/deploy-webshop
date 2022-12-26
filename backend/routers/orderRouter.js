const orderRouter = require("express").Router();
const authMiddle = require("../middlewares/authMiddleware");
const orderController = require("../controllers/orderController");
const Order = require("../models/orderModel");

orderRouter.post(
  "/",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  orderController.getOrderList
); //m

orderRouter.post("/", authMiddle.isAuth, orderController.createOrder);

orderRouter.post("/mine", authMiddle.isAuth, orderController.getOrderHistory); //m
orderRouter.post(
  "/paySummary",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.paySummary
); //m
orderRouter.post(
  "/paySummary1",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.paySummary1
); //m
orderRouter.post(
  "/monthRevenue",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  orderController.calculateMonthRevenue
); //m
orderRouter.put(
  "/watch/:orderId",
  [authMiddle.isAuth, authMiddle.isSellerOrAdmin],
  orderController.updateWatchOrder
);

orderRouter.put(
  "/paySellerSalary/:id",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.paySellerSalary
);

orderRouter.post("/:id", authMiddle.isAuth, orderController.getOrderByID); //m

orderRouter.delete(
  "/:id",
  [authMiddle.isAuth, authMiddle.isAdmin],
  orderController.deleteOrder
);

orderRouter.put("/:id/pay", authMiddle.isAuth, orderController.updateOrderByID);

orderRouter.put(
  "/:id/deliver",
  authMiddle.isAuth,
  orderController.deliverOrder
);

module.exports = orderRouter;
