import { Router } from "express";
import UserController from "../../controller/userController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/add-profile", userController.addProfile);
userRouter.put("/update-network/:id", userController.updateNetwork);


export default userRouter;