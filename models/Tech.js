var mongoose = require('mongoose');

var TechSchema = new mongoose.Schema({
  tech_name:             String,
  tech_img:              String
});


module.exports = mongoose.model('Tech', TechSchema);
