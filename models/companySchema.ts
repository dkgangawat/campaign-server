import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    logo_url:{
        type: String,
        default: "https://placehold.co/256?text=No+image",
    },
    description:{
        type: String,
    },
    website:String,
    email:{
        type: String,
        required: true,
        unique: true,
        index:true
    },
    linkedin:{
        type: String,
    },
    address:{
        type: String,
    },
    member:{
        type: Array,
        default: []
    },
    brochure:String,


})

const Company = mongoose.model('Company',  CompanySchema);

export default Company;