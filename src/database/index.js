const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/noderest", {
  useMongoClient: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
