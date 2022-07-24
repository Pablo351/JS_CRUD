const {Schema , model}  =require('mongoose');

const userSchema = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    pets: [Object],
    province: {type: String}
    
});


const User = new model('user',userSchema);


module.exports = User;