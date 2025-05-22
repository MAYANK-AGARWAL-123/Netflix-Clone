const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb://127.0.0.1:27017/netflix")
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 