
let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let VideoSchema = new Schema({
  title:{ type: String,required:true},
  description:{type:String,required:true},
  duration: { type: String},
  author: { type: String },
  link: { type: String },
  createdDate: { type: Date },
},
{
  collection: "video", 
});

module.exports = mongoose.model("VideoSchema", VideoSchema);
