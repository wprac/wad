const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    age:{
        type:Number
    }
})

module.exports = mongoose.model('user',user);
