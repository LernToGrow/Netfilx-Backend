const UserAccesser = require("../accesser/UserAccesser");

function addNewUser(user){
    //call the user accessor and return the result 
    return UserAccesser.addNewUser(user);
}

module.exports={
    addNewUser
}