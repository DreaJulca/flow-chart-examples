const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  source: { type : String, required : true},
  target:  { type : String, required : true},
  value:  { type : Number, required : false},
  class:  { type : String, required : false},
})

module.exports = mongoose.model("Link", linkSchema );
