const mongoose = require("mongoose");
import EventModel from '../models/event-model';



const get = (async (req: any, res: any) => {
    try {
        let eventModelData: any = await EventModel.find();
        let dataResponse: any = {
            "code": 200,
            "status": "success",
            "message": 'get Data ',
            "data": eventModelData
        }
        res.status(200).send(dataResponse);
    } catch (err: any) {
        console.log(err)
    }
})
const store = (async (req: any, res: any) => {
    try {
        let id: number = req.body.id;
        const {
            end_date,
            title,
            start_date,
            description,
            priority,
        } = req.body;
        let eventModelData: any = {}
        let message: any
        if (id) {
            eventModelData = await EventModel.findOne({ _id: id });
            message = 'Event updated successfully';
        } else {
            eventModelData = await new EventModel();
            message = 'Event added successfully';
        }

        eventModelData.title = title ?? title;
        eventModelData.end_date = end_date ?? end_date;
        eventModelData.start_date = start_date ?? start_date;
        eventModelData.description = description ?? description;
        eventModelData.priority = priority ?? priority;
        await eventModelData.save();
        let dataResponse: any = {
            "code": 200,
            "status": "success",
            "message": message,
            "data": []
        }
        res.status(200).send(dataResponse);
    } catch (err: any) {
        console.log(err)
    }
})


export default {
    get,
    store,
}