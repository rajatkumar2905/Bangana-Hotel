import express from 'express'
import { isAuthenticated , authentizeAdmin } from '../middlewares/auth.js';
import { getMyOrders, getOrderDetails, placeOrder , getAdminOrders , processOrder,  } from '../Controllers/Order.js';

const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);

router.get("/myorders", isAuthenticated , getMyOrders);

router.get("/order/:id", isAuthenticated , getOrderDetails);

router.get("/admin/order", isAuthenticated ,authentizeAdmin, getAdminOrders);

router.get("/admin/order/:id", isAuthenticated ,authentizeAdmin ,processOrder);

export default router;