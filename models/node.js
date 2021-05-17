const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  name: { type : String, required : true},
  value:  { type : Number, required : false},
  description:  { type : String, required : false},
  class:  { type : String, required : false},
})

module.exports = mongoose.model("Node", nodeSchema );
