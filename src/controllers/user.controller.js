const User = require('../models/user.model');
const {saveUser,deleteUser} = require('../Services/user.services');

async function addUser(req, res){
    // res.json({
    //     msj: "Hola desde User Controller"
    
    // })

    /********************************************* 
     * ESTO ERA ANTES DE USAR EL SERVICES
    const data = req.body;
    const user = new User(data);

    await user.save().then((data =>{
        res.json(data);
    })).catch((err=>{
        res.status(400);
        console.error(err)
        res.json(err);
    }))
   ******************************************************/
    try{
        const data = req.body;
        const result = await saveUser(data);

        res.json(result)

    }catch(err){
        res.status(400);
        console.error(err)
        res.json(err);
    }


}

async function getAllUsers(req,res){
    // res.json({
    //     msj:"Hola desde el get del user"
    // })
    await User.find({})
    .then(data=>{
        res.json(data);
    }).catch(err=>{
        res.status(401);
        console.error(err)
        res.json(err);
    })
}


async function getUsersByProvince(req,res){
    // res.json({
    //     msj:"Hola desde el get del user"
    // })
    const {province} = req.query;
    const query = {province};
    await User.find(query)
    .then(data=>{
        res.json(data);
    }).catch(err=>{
        res.status(401);
        console.error(err)
        res.json(err);
    })

}


async function getUserbyID(req,res){
    const {id} = req.params;
    const user = await User.findById(id)
    .then(data=>{
        res.json(data);
    }).catch(err=>{
        res.status(402);
        console.error(err);
        res.json({error:"No se encuentra user con ese ID"});
    })
}

async function updateUserById(req,res){
    const {id} = req.params;
    const data = req.body;
    const user = await User.findById(id)
    .then(user=>{
        user.name = data.name
        user.email = data.email
        user.pets = data.pets
        user.province = data.province
        user.save()
        res.json({
            operacion: "Update",
            status: "Actualizado con exito",
            data: user
        })
    }).catch(err=>{
        res.status(403);
        console.error(err);
        res.json({error:"No se pudo actaulizar el User"});
    })
}

async function deleteById(req,res){ //hay QUE LLAMARLO
    // ASI: localhost:3000/user/:id... sino se pone el id tira error con el metodo delete
    // res.json({
    //     msj: "Hola desde Detele"
    // })
    try{
        const {id} = req.params;
        const result = await deleteUser(id);
        res.json(result);
    }catch(err){
        res.status(405);
        console.error(err);
        res.json({
            error:"No se pudo eliminar el User",
            data: err
        });

    }


}

module.exports = {addUser, getAllUsers,getUserbyID, updateUserById, deleteById, getUsersByProvince}