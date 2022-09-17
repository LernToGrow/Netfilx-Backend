const Users = require("../db/model/UserModel").Users;
function addNewUser(user){
    //contnet with a mongo and create a new user
    return Users.create(user);
}

module.exports={
    addNewUser
}