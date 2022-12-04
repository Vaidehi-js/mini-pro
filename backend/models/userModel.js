const {Schema, model} = require('../connection')
const schema = new Schema({
    username: {type:String, default: 'Anonymous'},
    email : String,
    password : String

});

module.exports = model('users', schema);