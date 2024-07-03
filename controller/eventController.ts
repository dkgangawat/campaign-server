/*
6) ...../AddEventDetails/
7) ...../DeleteEventDetails/
*/

import { Request, Response } from "express";
import Event from "../models/eventSchema";

class EventController {
   async AddEventDetails(req: Request, res: Response) {
    try {
        const {name, description, time_in_ms, address, pic_url, related_doc_url} = req.body;
        const event = new Event(
            {
                name,
                description,
                time_in_ms,
                address,
                pic_url,
                related_doc_url
            }
        )
        const newEvent = await event.save();
        res.status(201).json({message: "Event added successfully", newEvent})
    } catch (error) {
        console.error(error);
        if(error instanceof Error){
            res.status(400).json({error: error.message});
        }else{
            res.status(500).json({error: "Internal Server Error"});
        }
    }
  }

 async DeleteEventDetails(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndDelete(id);
        res.status(200).json({message: "Event deleted successfully", event});
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

export default EventController;