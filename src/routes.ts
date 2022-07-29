import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { ListCategoryController } from "./controllers/category/ListCategoryController"
import { CreateProductController } from "./controllers/product/CreateProductController"
import { ListByCategoryController } from "./controllers/product/ListByCategoryController"
import { CreateOrderController } from "./controllers/order/CreateOrderController"
import { RemoveOrderController } from "./controllers/order/RemoveOrderController"
import { CreateOrderItemController } from "./controllers/orderItem/CreateOrderItemController"

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"));


//#region User Routes
router.post("/user", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/user", isAuthenticated, new DetailUserController().handle);
//#endregion User Routes

//#region Category Routes
router.post("/category", isAuthenticated, new CreateCategoryController().handle);

router.get("/category", isAuthenticated, new ListCategoryController().handle);
//#endregion Category Routes

//#region Product Routes
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);

router.get("/product/by-category", isAuthenticated, new ListByCategoryController().handle);
//#endregion Product Routes

//#region Order Routes
router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
//#endregion Order Routes

//#region OrderItem Routes
router.post("/orderItem", isAuthenticated, new CreateOrderItemController().handle);
//#endregion Order OrderItem

export { router };
