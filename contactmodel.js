var mongoose = require ('mongoose');
var Contact = mongoose.model ('contacts', {
  id: {type: Number},
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});
module.exports = {Contact};
