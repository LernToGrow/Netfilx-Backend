const mongoose =require('mongoose');
const UserScgithema = require('../schema/userSchema');

const Users = mongoose.model('User',UserSchema);

module.exports={
    Users
};
