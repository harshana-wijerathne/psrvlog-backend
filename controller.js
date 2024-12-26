// const users = [
//     {
//         id:1,
//         name:'Harshana'
//     },
//     {
//         id:2,
//         name:'Madushan'
//     }
// ];



const User = require('./model');

const getUsers = (req,res,next)=>{
    User.find()
        .then(respond =>{
            res.json({respond})
        })
        .catch(error=>{
            res.json({error})
        })
};

const addUsers = (req,res,next)=>{
    const user = new User({
        id:req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(respond =>{
            res.json({respond})
        })
        .catch(error=>{
            res.json({error})
        })
}

const updateUser = (req,res,next)=>{
    const {id,name} = req.body;
    User.updateOne({id:id},{$set:{name:name}})
        .then(respond =>{
            res.json({respond})
        })
        .catch(error=>{
            res.json({error})
        })
}

const deleteUser = (req,res,next)=>{
    const id = req.body.id;
    User.deleteMany({id:id})
        .then(respond =>{
            res.json({respond})
        })
        .catch(error=>{
            res.json({error})
        })
}

// const getUsers = (cb) =>{
//     cb(users);
// };

const getUserById = (id,cb) =>{
    const user = users.find(user=>user.id==id);
    cb(user);
}

exports.getUsers =  getUsers;
exports.addUser = addUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;