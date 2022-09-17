const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    userid:{ type: String, required: true},
    name:{ type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true},
    phoneNumber:{ type: String, required: true},
    isemaiverified:{ type: Boolean, required: true},
    isphonenoverified:{ type: Boolean, required: true},
    role:{ type: String, required: true},
    state:{ type: String, required: true} 
});

module.exports={
    UserSchema
};