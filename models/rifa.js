const mongoose = require("mongoose")

const rifaSchema = new mongoose.Schema({
    name:{type:String,required: true},
    rifa:[{type:Object,required:true}]
})

const Rifa = mongoose.model("rifas",rifaSchema)
module.exports = Rifa