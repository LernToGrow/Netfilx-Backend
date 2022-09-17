const R =require('ramda');
const UserService = require("../service/UserService");
function signupHandler(req,res){
    //extract the body and validate and call the userAccesser.addnewUser
    const userInput = req.body;
    console.log(`userInput = ${JSON.stringify(userInput)}`);
    if(R.isNil(userInput.name)){
        res.status(400).send("name Not Present");
        return;
    }
    if(R.isNil(userInput.email)){
        res.status(400).send("Email Not Present");
        return;
    }
    if(R.isNil(userInput.phoneNumber)){
        res.status(400).send("phoneNumber Not Present");
        return;
    }
    if(R.isNil(userInput.password)){
        res.status(400).send("password Not Present");
        return;
    }
    UserService.addNewUser(userInput)
    .then(()=> res.status(200).send('user created succesfully'))
    .catch((error) => res.status(500).send(error))
}

module.exports = {
    signupHandler
}