'use strict'
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");
const { seeds } = require("./seeds");

mongoose.set('useFindAndModify', false);
mongoose.connect(config.MONGO_DB, { useNewUrlParser: true }, async (error, response) => {
  if(error){
    return console.log(`Connection error ${error}`);
  }
  console.log("DB Connection on ");
  app.listen(config.port, () => {
    console.log(`Hamster rolling on port ${config.port}`);
  });
  await seeds()
});
