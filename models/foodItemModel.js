const mongoose = require("mongoose")


const foodItemSchema = new mongoose.Schema({

name: {
   type: String,
   required: true
},
price: {
   type: String,
   required: true,

},
category: {
   type: String,
   required: true,
}

 });


 const foodItemData = mongoose.model('FoodItemData',foodItemSchema);

module.exports = foodItemData;