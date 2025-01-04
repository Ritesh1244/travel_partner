const mongoose = require('mongoose')  
const Schema = mongoose.Schema  

const UserSchema = new Schema({  
    name: {  
        type: String,  
        required: true  
    },  
    email: {  
        type: String,  
        required: true,  
        unique: true // Optional: Ensures all emails are unique  
    },  
    password: {  
        type: String,  
        required: true  
    },  
    phoneNumber: {  
        type: String,   // You can change this to Number if you prefer  
        required: false // Make it required based on your requirements  
    }  
})  

// const locationSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     latitude: { type: Number, required: true },
//     longitude: { type: Number, required: true },
//     timestamp: { type: Date, default: Date.now },
// });

// const Location = mongoose.model('Location', locationSchema);

const Usermodel = mongoose.model("users", UserSchema)  

module.exports = Usermodel