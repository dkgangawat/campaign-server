import { Router } from "express";
import CompanyController from "../../controller/companyController";

const companyRouter = Router();
const companyController = new CompanyController();

companyRouter.post("/add-company", companyController.addCompany);
companyRouter.put("/add-member/:id", companyController.addMember);
companyRouter.put("/remove-member/:id", companyController.removeMember);

export default companyRouter;