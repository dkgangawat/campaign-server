import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    // event_id: {
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    time_in_ms: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pic_url: {
        type: String,
        required: true
    },
    related_doc_url: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', EventSchema);

export default Event;