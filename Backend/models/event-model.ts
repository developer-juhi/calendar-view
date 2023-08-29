import mongoose, { model, Schema } from "mongoose";

export interface IEventModel {
    _id: mongoose.Types.ObjectId;
    title: string;
    start_date: string;
    end_date: string;
    description: string;
    priority: string;
}

const schema = new Schema<IEventModel>(
    {
        title: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        description: { type: String },
        priority: { type: String },
    }, {
    timestamps: true
}
);

const EventModel = model('events', schema);

export default EventModel;