const User =  require('../models/user.model');

async function saveUser(data){
    const user = new User(data);
    return user.save();
}


async function deleteUser(id){
    const result = await User.deleteOne({_id:id});
    if(result.deletedCount ==0){
        const error = new Error();
        Object.assign(error, {
            status: 404,
            message: 'User not found'
        })
        throw error;
    }

    return result;
}


module.exports = {saveUser,deleteUser}