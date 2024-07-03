import { Request, Response } from "express";
import User from "../models/userSchema";


class UserController {
    public async addProfile(req:Request, res:Response) {
        try {
            const {name, email, phone, avatar, linkedin, all_network, company_id} = req.body;
            const user = new User(
                {
                    name,
                    email,
                    phone,
                    avatar,
                    linkedin,
                    all_network,
                    company_id
                }
            )
             const newUser = await user.save();
            res.status(201).json({message: "User added successfully", newUser});
        } catch (error) {
            console.error(error);
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }else{
                res.status(500).json({error: "Internal Server Error"});
            } 
        }
    }
    public async updateNetwork(req:Request, res:Response) {
        try {
            const {id} = req.params;
            const {all_network} = req.body;
            const user = await User.findByIdAndUpdate(id, {all_network}, {new: true});
            res.status(200).json({message: "Network updated successfully", user});
        } catch (error) {
            console.error(error);
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }else{
                res.status(500).json({error: "Internal Server Error"});
            } 
        }
    }

}

export default UserController;