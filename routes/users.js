const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0/amazon")

const userSchema = mongoose.Schema({
  name : String,
  email : String,
  password : String,
  number : Number
})

module.exports = mongoose.model("user",userSchema)