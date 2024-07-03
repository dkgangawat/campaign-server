import { Router } from "express";
import EventController from "../../controller/eventController";

const eventRouter = Router();
const eventController = new EventController();

eventRouter.post("/AddEventDetails", eventController.AddEventDetails);
eventRouter.delete("/DeleteEventDetails/:id", eventController.DeleteEventDetails);

export default eventRouter;