const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:8080/warbler", {
  keepAlive: true,
  useMongoClient: true
});
