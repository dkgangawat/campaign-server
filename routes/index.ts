import { Router } from "express";
import userRouter from "./users";
import companyRouter from "./company";
import eventRouter from "./event";

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/company', companyRouter)
appRouter.use('/event', eventRouter)



export default appRouter;