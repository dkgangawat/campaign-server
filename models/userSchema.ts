import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index:true
    },
    phone:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: "https://placehold.co/256?text=No+image",
    },
    linkedin:{
        type: String,
        required: true
    },
    all_network:{
        type: [String],
        default: []
    },
    company_id:{
        type: String,
    }
})

const User = mongoose.model('User', UserSchema);

export default User;