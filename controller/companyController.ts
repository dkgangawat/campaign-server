/*
3) ....../AddCompanyDetails/
-> able to add all the details of database "company_details"

4) ...../AddCompanyMember/
-> able to add new member in "member" column of table "company_details".

5) ...../RemoveCompanyMember/
-> able to remove a single member from column "member" of table "company_details"
*/

import { Request, Response } from "express";
import Company from "../models/companySchema";

class CompanyController {
    public async addCompany(req:Request, res:Response) {
        try {
            const {name, logo_url, description, website, email, linkedin, address, member, brochure} = req.body;
            const company = new Company(
                {
                    name,
                    logo_url,
                    description,
                    website,
                    email,
                    linkedin,
                    address,
                    member,
                    brochure
                }
            )
             const newCompany = await company.save();
            res.status(201).json({message: "Company added successfully", newCompany});
        } catch (error) {
            console.error(error);
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }else{
                res.status(500).json({error: "Internal Server Error"});
            } 
        }
    }

    public async addMember(req:Request, res:Response) {
        try {
            const {id} = req.params;
            const {member} = req.body;
            const company = await Company.findByIdAndUpdate(id, {member}, {new: true});
            res.status(200).json({message: "Member added successfully", company});
        } catch (error) {
            console.error(error);
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }else{
                res.status(500).json({error: "Internal Server Error"});
            } 
        }
    }

    public async removeMember(req:Request, res:Response) {
        try {
            const {id} = req.params;
            const {member} = req.body;
            const company = await Company.findByIdAndUpdate(id, {member}, {new: true});
            res.status(200).json({message: "Member removed successfully", company});
        } catch (error) {
            console.error(error);
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }else{
                res.status(500).json({error: "Internal Server Error"});
            } 
        }}


        

}


export default CompanyController;