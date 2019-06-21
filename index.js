'use strict'
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");
const { seeds } = require("./seeds");

mongoose.set('useFindAndModify', false);
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }, async (error, response) => {
  if(error){
    return console.log(`Connection error ${error}`);
  }
  console.log("DB Connection on ");
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Hamster rolling`);
  });
  await seeds()
});
